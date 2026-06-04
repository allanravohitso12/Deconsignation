import { formatNumber } from "../utils/formatNumber";

const StatisticsCards = ({ history }) => {
  const totalFacture = history.reduce(
    (sum, item) => sum + item.facture,
    0
  );

  const totalAvance = history.reduce(
    (sum, item) => sum + item.avance,
    0
  );

  const totalReste = history.reduce(
    (sum, item) => sum + item.reste,
    0
  );

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="bg-green-500 text-white p-4 rounded-xl">
        <h2>Total Facture</h2>

        <p className="text-2xl font-bold">
          {formatNumber(totalFacture)}
        </p>
      </div>

      <div className="bg-blue-500 text-white p-4 rounded-xl">
        <h2>Total Avance</h2>

        <p className="text-2xl font-bold">
          {formatNumber(totalAvance)}
        </p>
      </div>

      <div className="bg-red-500 text-white p-4 rounded-xl">
        <h2>Total Reste</h2>

        <p className="text-2xl font-bold">
          {formatNumber(totalReste)}
        </p>
      </div>
    </div>
  );
};

export default StatisticsCards;
