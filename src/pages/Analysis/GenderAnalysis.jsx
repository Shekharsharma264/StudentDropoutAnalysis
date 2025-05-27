import DropoutByGenderBar from "../../components/Gender/GenderColumn";
import DropoutByGenderDoughnut from "../../components/Gender/GenderDoughnut";
import GenderRatioPie from "../../components/Gender/GenderpieChart";
export default function GenderAnalysis({ data }) {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        Gender-based Dropout Analysis
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <DropoutByGenderBar data={data} />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <DropoutByGenderDoughnut data={data} />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <GenderRatioPie data={data} />
      </div>
    </div>
  );
}
