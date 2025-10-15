import CategoryChart from "./CategoryChart";
import TransactionsTable from "./TransactionsTable";
import StatCard from "./StatCard";

export default function Dashboard() {
  return (
    <div className="max-w-6xl w-full">
      <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-6">
        Tableau de bord des finances personnelles
      </h1>
      <div className="grid grid-cols-10 grid-rows-10 gap-8 h-screen">
        <div className="border-2 border-gray-300 col-span-6 row-span-7 bg-white rounded-xl">
          <TransactionsTable />
        </div>
        <div className="border-2 border-gray-300 col-span-4 row-span-7 bg-white rounded-xl">
          <CategoryChart />
        </div>
        <div className="border-2 border-gray-300 col-span-5 row-span-3 bg-white rounded-xl">
          <StatCard title="Solde total" value="+1.400,000 €" />
        </div>
        <div className="border-2 border-gray-300 col-span-5 row-span-3 bg-white rounded-xl">
          <StatCard title="Dépense moyenne" value="466,67 €" />
        </div>
      </div>
    </div>
  );
}
