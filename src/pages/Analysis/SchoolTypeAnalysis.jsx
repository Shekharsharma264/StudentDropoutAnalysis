// import DropoutBySchoolTypeBar from '../../components/DropoutBySchoolTypeBar';
// import DropoutTrendsChart from '../../components/DropoutTrendsChart';

import DropoutTrendsChart from "../../components/DropoutTrendsChart";
import DropoutBySchoolTypeBar from '../../components/SchoolType/DropoutBySchoolTypeBar'

export default function SchoolTypeAnalysis({ data }) {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        School Type-based Dropout Analysis
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <DropoutBySchoolTypeBar data={data} />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <DropoutTrendsChart />
      </div>
    </div>
  );
}
