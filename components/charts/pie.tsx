import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Pie as PieChart } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: any;
}
const Pie = ({ data }: Props) => {
  return <PieChart data={data} />;
};

export default Pie;
