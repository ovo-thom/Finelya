import StatCard from "./components/Dashboard/StatCard";
import TransactionsTable from "./components/Dashboard/TransactionsTable";
import { useTransactions } from "../src/contexts/TransactionsContext";

export default function TransactionsPage() {
  const { transactions } = useTransactions();
  const lastTransactionDate = new Date(transactions[0].date);
  const lastDate = lastTransactionDate.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-6">
        Transactions
      </h2>
      <div className="bg-white rounded-xl border-2 border-gray-300 p-4">
        <TransactionsTable />
      </div>
      <div className="w-full rounded-xl mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-xl border-2 border-gray-300 ">
          <StatCard title="Dernière transaction" value={lastDate} />
        </div>
        <div className="bg-white rounded-xl border-2 border-gray-300 ">
          <StatCard title="Montant" value="+ 280,00 €" />
        </div>
      </div>
    </div>
  );
}
