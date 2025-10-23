import { useTransactions } from "../../contexts/TransactionsContext";
import { FiTrash2 } from "react-icons/fi";

export default function TransactionsTable() {
  const { transactions, deleteTransaction } = useTransactions();

  console.log(transactions);

  return (
    <div className="flex flex-col mb-6 w-full">
      <label htmlFor="period" className="sr-only">
        Filtrer par période
      </label>
      <select
        id="period"
        className="border-2 border-gray-300 px-3 py-2 w-36 md:w-56 rounded-lg ml-5 mt-5 outline-none focus:border-violet-500 bg-white"
      >
        <option>Ce mois-ci</option>
        <option>Le mois dernier</option>
        <option>Cette année</option>
      </select>

      <div className="mt-4 w-full overflow-x-auto xl:overflow-x-visible">
        <table className="w-full min-w-[720px] md:min-w-0 table-auto bg-white rounded-xl shadow">
          <thead>
            <tr>
              <th className="border-b border-gray-200 px-4 py-2 text-left">
                Date
              </th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">
                Description
              </th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">
                Catégorie
              </th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">
                Montant
              </th>
              {/* <th>
                Supprimer
              </th> */}
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="border-b border-gray-100 px-3 md:px-4 py-2 whitespace-nowrap">
                  {transaction.date}
                </td>
                <td className="border-b border-gray-100 px-3 md:px-4 py-2 max-w-[220px] break-words">
                  {transaction.description}
                </td>
                <td className="border-b border-gray-100 px-3 md:px-4 py-2 max-w-[160px] break-words">
                  {transaction.categorie}
                </td>
                <td
                  className={`... ${
                    transaction.montant >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {transaction.montant > 0 ? "+" : "-"}
                  {Math.abs(transaction.montant).toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </td>
                <td
                  onClick={() => deleteTransaction(transaction.id)}
                  className="text-lg cursor-pointer"
                >
                  <FiTrash2 />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
