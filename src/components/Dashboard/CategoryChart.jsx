import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Salaire", "Nourriture", "Logement", "Factures"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#7e21c9", // violet
        "#2ecc71", // vert
        "#4b2bc2", // bleu/violet foncé
        "#f7b731", // orange
      ],
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
    <div className="p-3">
      <h2 className="font-semibold">Dépenses par catégorie</h2>
      <div className="w-40 h-40 mx-auto mt-2">
        <Pie data={data} options={options} />
      </div>
      <div className="flex flex-wrap space-x-3 justify-center mt-1">
        {data.labels.map((label, i) => (
          <div key={label} className="flex items-center gap-1">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ background: data.datasets[0].backgroundColor[i] }}
            ></span>
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
