import DropoutByGenderChart from '../components/DropoutByGenderChart';
import DropoutByLocationChart from '../components/DropoutByLocationChart';
import DropoutBySchoolTypeChart from '../components/DropoutBySchoolTypeChart';
import DropoutByCasteChart from '../components/DropoutByCasteChart';

export default function AnalysisPage({ data }) {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
        Dropout Analysis Dashboard
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Gender Analysis */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Dropout by Gender</h2>
          <DropoutByGenderChart data={data} />
        </div>

        {/* Location Analysis */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Dropout by Location</h2>
          <DropoutByLocationChart data={data} />
        </div>

        {/* School Type Analysis */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Dropout by School Type</h2>
          <DropoutBySchoolTypeChart data={data} />
        </div>

        {/* Caste Analysis */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Dropout by Caste</h2>
          <DropoutByCasteChart data={data} />
        </div>
      </div>
    </div>
  );
}
