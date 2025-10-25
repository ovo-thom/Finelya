import { useTransactions } from "../../contexts/TransactionsContext";
import { FiTrash2 } from "react-icons/fi";

export default function TransactionsTable({ showDelete, onDelete }) {
  const { transactions, deleteTransaction } = useTransactions();

  const handleDelete = (id) => {
    deleteTransaction(id);
    if (onDelete) onDelete();
  };

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

      <div className="mt-4 w-full">
        {/* Desktop/tablet view */}
        <div className="hidden sm:block overflow-x-auto xl:overflow-x-visible max-h-[300px] overflow-y-auto">
          <table className="w-full min-w-0 table-auto bg-white rounded-xl shadow">
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
                <th className="border-b border-gray-200 px-4 py-2 text-left"></th>
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
                    className={`border-b border-gray-100 px-3 md:px-4 py-2 text-left whitespace-nowrap font-semibold ${
                      transaction.montant >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.montant > 0 ? "+" : "-"}
                    {Math.abs(transaction.montant).toLocaleString("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </td>
                  {showDelete && (
                    <td
                      onClick={() => handleDelete(transaction.id)}
                      className="text-lg cursor-pointer"
                    >
                      <FiTrash2 />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile/cards view */}
        <div className="sm:hidden flex flex-col gap-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-white rounded-xl shadow border border-gray-200 p-3 flex flex-col"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">
                  {transaction.date}
                </span>
                {showDelete && (
                  <td
                    onClick={() => handleDelete(transaction.id)}
                    className="text-lg cursor-pointer"
                  >
                    <FiTrash2 />
                  </td>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <span className="text-xs text-gray-500 mr-1">
                    Description:{" "}
                  </span>
                  <span className="font-medium">{transaction.description}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 mr-1">
                    Catégorie:{" "}
                  </span>
                  <span className="font-medium">{transaction.categorie}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 mr-1">Montant: </span>
                  <span
                    className={`font-semibold ${
                      transaction.montant >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.montant > 0 ? "+" : "-"}
                    {Math.abs(transaction.montant).toLocaleString("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
