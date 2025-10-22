import CategoryChart from "./CategoryChart";
import TransactionsTable from "./TransactionsTable";
import StatCard from "./StatCard";
import { useTransactions } from "../../contexts/TransactionsContext";

export default function Dashboard() {
  const { transactions } = useTransactions();
  
  const total = transactions.reduce((sum, tx) => sum + Number(tx.montant), 0);
  const depenses = transactions.filter((depense) => depense.montant < 0);
  const average = depenses.length
    ? depenses.reduce((sum, tx) => sum + Math.abs(Number(tx.montant)), 0) /
      depenses.length
    : 0;

  return (
    <div className="max-w-6xl w-full mx-auto px-4">
      <h1 className="text-xl sm:text-2xl xl:text-3xl font-semibold mb-6">
        Tableau de bord des finances personnelles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-10 md:grid-rows-10 gap-8">
        <div className="border-2 border-gray-300 md:col-span-6 md:row-span-7 bg-white rounded-xl p-4 h-full">
          <TransactionsTable />
        </div>
        <div className="border-2 border-gray-300 md:col-span-4 md:row-span-7 bg-white rounded-xl p-4 h-full">
          <CategoryChart />
        </div>
        <div className="border-2 border-gray-300 md:col-span-5 md:row-span-3 bg-white rounded-xl p-4 h-full">
          <StatCard
            title="Solde total"
            value={total.toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
            })}
          />
        </div>
        <div className="border-2 border-gray-300 md:col-span-5 md:row-span-3 bg-white rounded-xl p-4 h-full">
          <StatCard
            title="Dépense moyenne"
            value={average.toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
            })}
          />
        </div>
      </div>
    </div>
  );
}
