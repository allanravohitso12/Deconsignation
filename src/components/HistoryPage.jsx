import HistoryTable from "./HistoryTable";

const HistoryPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">
        Historique
      </h1>

      <HistoryTable data={[]} />
    </div>
  );
};

export default HistoryPage;
