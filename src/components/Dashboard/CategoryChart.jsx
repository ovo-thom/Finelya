import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useTransactions } from "../../contexts/TransactionsContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

export default function CategoryChart() {
  const { transactions } = useTransactions();

  const uniqueCategories = [...new Set(transactions.map((tx) => tx.categorie))];
  const sums = uniqueCategories.map((cat) =>
    transactions
      .filter((tx) => tx.categorie === cat)
      .reduce((sum, tx) => sum + Math.abs(Number(tx.montant)), 0)
  );

  const isEmpty = transactions.length === 0;
  const data = isEmpty
    ? {
        labels: ["Aucune donnée"],
        datasets: [
          {
            label: "Montant par catégorie",
            data: [1],
            backgroundColor: ["#e0e0e0"],
            borderWidth: 0,
          },
        ],
      }
    : {
        labels: uniqueCategories,
        datasets: [
          {
            label: "Montant par catégorie",
            data: sums,
            backgroundColor: [
              "#7e21c9",
              "#2ecc71",
              "#4b2bc2",
              "#f7b731",
              "#f76e11",
            ],
            borderWidth: 0,
          },
        ],
      };

  return (
    <div className="p-0md:p-5 flex flex-col w-full max-w-md mx-auto">
      <h2 className="font-semibold mb-4 text-left lg:text-lg">
        Dépenses par catégorie
      </h2>
      <div className="flex justify-center items-center w-full mt-2">
        <div className="w-36 h-36 lg:w-56 lg:h-56 2xl:w-80 2xl:h-80">
          <Pie data={data} options={options} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4 w-full overflow-x-auto">
        {data.labels.map((label, i) => (
          <div key={label} className="flex items-center gap-2 2xl:mt-5">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ background: data.datasets[0].backgroundColor[i] }}
            ></span>
            <span className="text-xs 2xl:text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
