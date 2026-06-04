import { useEffect, useState } from "react";

import API from "../services/api";

import Header from "../components/Header";
import ProductTable from "../components/ProductTable";
import SummaryCards from "../components/SummaryCards";

import HistoryTable from "../components/HistoryTable";
import StatisticsCards from "../components/StatisticsCards";
import SearchBar from "../components/SearchBar";
import DarkModeToggle from "../components/DarkModeToggle";

import { generatePDF } from "../utils/generatePDF";

const Dashboard = ({ darkMode, setDarkMode }) => {
  const [products, setProducts] = useState([]);

  const [facture, setFacture] = useState("");
  const [avance, setAvance] = useState("");

  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchHistory();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");

      const updated = res.data.map((item) => ({
        ...item,
        nbCgt: 0,
      }));

      setProducts(updated);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchHistory = async () => {
    try {
      const res = await API.get("/deconsignations");
      setHistory(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (index, value) => {
    const updated = [...products];

    updated[index].nbCgt = Number(value) || 0;

    setProducts(updated);
  };

  const totalCgt = products.reduce(
    (sum, item) => sum + item.nbCgt,
    0
  );

  const totalAr = products.reduce(
    (sum, item) => sum + item.nbCgt * item.pu,
    0
  );

  const aPayer =
    (Number(facture) || 0) - totalAr;

  const reste =
    aPayer - (Number(avance) || 0);

  const saveData = async () => {
    try {
      await API.post("/deconsignations", {
        facture: Number(facture) || 0,
        avance: Number(avance) || 0,
        items: products,
      });

      await fetchHistory();

      alert("Déconsignation sauvegardée !");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la sauvegarde");
    }
  };

  const filteredHistory = history.filter(
    (item) =>
      item.facture
        ?.toString()
        .includes(search)
  );

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">

      {/* Header + Dark Mode */}
      <div className="flex justify-between items-center mb-6">
        <Header />

        <DarkModeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      {/* Tableau Produits */}
      <ProductTable
        products={products}
        handleChange={handleChange}
      />

      {/* Facture + Avance */}
      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">

        <input
          type="number"
          min="0"
          placeholder="Entrer le montant de la facture"
          value={facture}
          onChange={(e) =>
            setFacture(e.target.value)
          }
          className="border rounded-xl p-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          min="0"
          placeholder="Entrer le montant de l'avance"
          value={avance}
          onChange={(e) =>
            setAvance(e.target.value)
          }
          className="border rounded-xl p-3 w-full outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Résumé */}
      <SummaryCards
        totalCgt={totalCgt}
        totalAr={totalAr}
        facture={Number(facture) || 0}
        aPayer={aPayer}
        avance={Number(avance) || 0}
        reste={reste}
      />

      {/* Bouton Sauvegarder */}
      <button
        onClick={saveData}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl mt-6 w-full sm:w-auto"
      >
        Sauvegarder
      </button>
      <button
        onClick={() =>
          generatePDF({
            products,
            totalCgt,
            totalAr,
            facture,
            aPayer,
            avance,
            reste,
          })
        }
        className="bg-red-600 text-white px-6 py-3 rounded-xl mt-6 ml-4"
      >
        Télécharger PDF
      </button>

      {/* Recherche */}
      <div className="mt-10">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      {/* Statistiques */}
      <StatisticsCards history={history} />

      {/* Historique */}
      <HistoryTable
        data={filteredHistory}
      />

    </div>
  );
};

export default Dashboard;