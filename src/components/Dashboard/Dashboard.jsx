import CategoryChart from "./CategoryChart";
import TransactionsTable from "./TransactionsTable";

export default function Dashboard() {
  return (
    <div className="max-w-6xl w-full">
      <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-6">
        Tableau de bord des finances personnelles
      </h1>
      <div className="grid grid-cols-10 grid-rows-2 gap-8 h-screen">
        <div className="border-2 border-gray-300 col-span-6 bg-white rounded-xl">
          <TransactionsTable />
        </div>
        <div className="border-2 border-gray-300 col-span-4 bg-white rounded-xl">
          <CategoryChart />
        </div>
        <div className="border-2 border-gray-300 col-span-5 bg-white rounded-xl"></div>
        <div className="border-2 border-gray-300 col-span-5 bg-white rounded-xl"></div>
      </div>
    </div>
  );
}
