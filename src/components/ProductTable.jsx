import { formatNumber } from "../utils/formatNumber";

const ProductTable = ({
  products,
  handleChange,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Désignation</th>
            <th className="text-left p-2">NB CGT</th>
            <th className="text-left p-2">P.U</th>
            <th className="text-left p-2">Montant</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="border-b">
              <td className="p-2">
                {product.designation}
              </td>

              <td className="p-2">
                <input
                  type="number"
                  value={product.nbCgt}
                  onChange={(e) =>
                    handleChange(index, e.target.value)
                  }
                  className="border rounded-lg p-2 w-full sm:w-24"
                />
              </td>

              <td className="p-2">
                {formatNumber(product.pu)}
              </td>

              <td className="p-2">
                {formatNumber(product.nbCgt * product.pu)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
