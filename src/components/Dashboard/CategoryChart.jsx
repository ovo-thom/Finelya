import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Salaire", "Nourriture", "Logement", "Factures"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["#7e21c9", "#2ecc71", "#4b2bc2", "#f7b731"],
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

export default function CategoryChart() {
  return (
    <div className="p-3 flex flex-col w-full max-w-xs mx-auto">
      <h2 className="font-semibold mb-4 text-left">Dépenses par catégorie</h2>
      <div className="flex justify-center items-center w-full">
        <div className="w-32 h-32 lg:w-32 lg:h-32 2xl:w-52 2xl:h-52">
          <Pie data={data} options={options} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4 w-full overflow-x-auto">
        {data.labels.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ background: data.datasets[0].backgroundColor[i] }}
            ></span>
            <span className="text-xs">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
