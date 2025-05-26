import DropoutTrendsChart from "../../components/DropoutTrendsChart";
import DropoutByLocationBar from '../../components/Location/DropoutByLocationBar'
export default function LocationAnalysis({ data }) {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        Location-based Dropout Analysis
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <DropoutByLocationBar data={data} />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <DropoutTrendsChart />
      </div>
    </div>
  );
}
