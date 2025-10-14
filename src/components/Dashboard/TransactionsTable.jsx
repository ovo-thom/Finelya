export default function TransactionsTable() {
  return (
    <div className="flex items-center mb-6">
      <select id="period" className="border-2 border-gray-300 px-2 py-1 rounded-lg ml-5 mt-5 outline-none focus:border-violet-500">
        <option>Ce mois-ci</option>
        <option>Le mois dernier</option>
        <option>Cette année</option>
      </select>
    </div>
  );
}
