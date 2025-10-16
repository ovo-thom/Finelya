export default function TransactionsTable() {
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
              <th className="border-b border-gray-200 px-4 py-2 text-right">
                Montant
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border-b border-gray-100 px-3 md:px-4 py-2 whitespace-nowrap">
                3 avr. 2024
              </td>
              <td className="border-b border-gray-100 px-3 md:px-4 py-2 max-w-[220px] break-words">
                Salaire
              </td>
              <td className="border-b border-gray-100 px-3 md:px-4 py-2 max-w-[160px] break-words">
                Salaire
              </td>
              <td className="border-b border-gray-100 px-3 md:px-4 py-2 text-right whitespace-nowrap text-green-600 font-semibold">
                +2 800,00 €
              </td>
            </tr>

            <tr>
              <td className="border-b border-gray-100 px-3 md:px-4 py-2 whitespace-nowrap">
                10 avr. 2024
              </td>
              <td className="border-b border-gray-100 px-3 md:px-4 py-2 max-w-[220px] break-words">
                Nourriture
              </td>
              <td className="border-b border-gray-100 px-3 md:px-4 py-2 max-w-[160px] break-words">
                Nourriture
              </td>
              <td className="border-b border-gray-100 px-3 md:px-4 py-2 text-right whitespace-nowrap text-red-600 font-semibold">
                -150,00 €
              </td>
            </tr>

            <tr>
              <td className="border-b border-gray-100 px-3 md:px-4 py-2 whitespace-nowrap">
                18 avr. 2024
              </td>
              <td className="border-b border-gray-100 px-3 md:px-4 py-2 max-w-[220px] break-words">
                Logement
              </td>
              <td className="border-b border-gray-100 px-3 md:px-4 py-2 max-w-[160px] break-words">
                Logement
              </td>
              <td className="border-b border-gray-100 px-3 md:px-4 py-2 text-right whitespace-nowrap text-red-600 font-semibold">
                -1 200,00 €
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
