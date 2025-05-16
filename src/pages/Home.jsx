import { Link } from 'react-router-dom';
import { BarChart3, PieChart, Info, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-indigo-50 to-white">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Student Dropout Analysis Dashboard
        </motion.h1>
        <motion.p
          className="text-lg max-w-xl mx-auto text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Discover patterns and insights behind student dropout rates using interactive data visualization.
        </motion.p>
        <Link
          to="/analysis"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
        >
          Start Analysis
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            icon={<BarChart3 className="w-8 h-8 text-indigo-600" />}
            title="Interactive Charts"
            description="Visualize dropout trends across gender, region, caste, school type and more."
          />
          <FeatureCard
            icon={<PieChart className="w-8 h-8 text-indigo-600" />}
            title="Insightful Metrics"
            description="See what factors contribute most to dropout rates using filtered views."
          />
          <FeatureCard
            icon={<Info className="w-8 h-8 text-indigo-600" />}
            title="Clear Purpose"
            description="Built for educators and policymakers to make data-driven decisions."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white text-center py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">Want to learn more?</h2>
        <p className="mb-6">Explore detailed dropout analysis or reach out with your ideas.</p>
        <Link
          to="/about"
          className="bg-white text-indigo-600 hover:bg-gray-100 px-5 py-2 rounded-full font-medium"
        >
          About Project
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-gray-50 text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
