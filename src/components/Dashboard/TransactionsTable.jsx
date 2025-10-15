export default function TransactionsTable() {
  return (
    <div className="flex flex-col mb-6">
      <select
        id="period"
        className="border-2 border-gray-300 px-2 py-1 w-2/7 rounded-lg ml-5 mt-5 outline-none focus:border-violet-500"
      >
        <option>Ce mois-ci</option>
        <option>Le mois dernier</option>
        <option>Cette année</option>
      </select>
      <table className="min-w-full bg-white shadow mt-4">
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b border-gray-100 px-4 py-2">3 avr. 2024</td>
            <td className="border-b border-gray-100 px-4 py-2">Salaire</td>
            <td className="border-b border-gray-100 px-4 py-2">Salaire</td>
            <td className="border-b border-gray-100 px-4 py-2 text-green-600 font-semibold">
              +2 800,00 €
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-100 px-4 py-2">10 avr. 2024</td>
            <td className="border-b border-gray-100 px-4 py-2">Nourriture</td>
            <td className="border-b border-gray-100 px-4 py-2">Nourriture</td>
            <td className="border-b border-gray-100 px-4 py-2 text-red-600 font-semibold">
              -150,00 €
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-100 px-4 py-2">10 avr. 2024</td>
            <td className="border-b border-gray-100 px-4 py-2">Nourriture</td>
            <td className="border-b border-gray-100 px-4 py-2">Nourriture</td>
            <td className="border-b border-gray-100 px-4 py-2 text-green-600 font-semibold">
              +120,00 €
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
