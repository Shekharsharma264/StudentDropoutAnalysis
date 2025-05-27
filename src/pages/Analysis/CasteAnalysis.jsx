import DropoutByCasteBar from '../../components/Caste/DropoutByCasteBar'
import DropoutTrendsChart from '../../components/DropoutTrendsChart'

export default function CasteAnalysis({ data }) {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        Caste-based Dropout Analysis
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <DropoutByCasteBar data={data} />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <DropoutTrendsChart />
      </div>
    </div>
  );
}
