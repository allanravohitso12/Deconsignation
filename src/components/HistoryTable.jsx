import { formatNumber } from "../utils/formatNumber";

const HistoryTable = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-6 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">
        Historique
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-2">Date</th>
            <th className="p-2">Facture</th>
            <th className="p-2">Avance</th>
            <th className="p-2">Reste</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b"
            >
              <td className="p-2">
                {new Date(
                  item.date
                ).toLocaleDateString()}
              </td>

              <td className="p-2">
                {formatNumber(item.facture)}
              </td>

              <td className="p-2">
                {formatNumber(item.avance)}
              </td>

              <td className="p-2 text-red-500 font-bold">
                {formatNumber(item.reste)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
