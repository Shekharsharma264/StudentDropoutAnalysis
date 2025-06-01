import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Recommendations() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-br from-indigo-50 to-white">
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Recommendations for Reducing Dropout Rates
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto text-gray-600 mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          These actionable recommendations are based on in-depth data analysis to reduce student dropout rates and ensure better retention and academic success for every student.
        </motion.p>
      </section>

      {/* Recommendations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Recommendations
          </h2>
          <ul className="space-y-6 text-lg text-gray-700">
            <RecommendationItem
              title="Improve School Infrastructure"
              description="Enhance school facilities, especially in rural and government schools, to create a more engaging learning environment."
            />
            <RecommendationItem
              title="Increase Parental Awareness"
              description="Launch campaigns to educate parents about the long-term benefits of consistent education and the dangers of student dropout."
            />
            <RecommendationItem
              title="Provide Financial Assistance"
              description="Offer scholarships, stipends, and financial aid to students from low-income backgrounds to ensure financial barriers don't prevent education."
            />
            <RecommendationItem
              title="Train More Empathetic Teaching Staff"
              description="Ensure that teachers are well-trained in both academic and emotional support, especially in high-dropout areas."
            />
            <RecommendationItem
              title="Ensure Better Accessibility"
              description="Improve school transportation and provide easy access to education, especially for students in remote locations."
            />
            <RecommendationItem
              title="Mental Health Support"
              description="Integrate counseling programs within schools to support students' emotional well-being and address issues like stress, bullying, or family problems."
            />
            <RecommendationItem
              title="Offer Career Counseling Early"
              description="Help students understand their potential career paths and provide mentorship opportunities to guide them throughout their academic journey."
            />
            <RecommendationItem
              title="After-School Programs"
              description="Establish after-school clubs and workshops that foster creativity, skill-building, and positive extracurricular engagement."
            />
            <RecommendationItem
              title="Increase Government Funding"
              description="Ensure that there is adequate funding to upgrade infrastructure, hire quality teachers, and support students in underserved regions."
            />
            <RecommendationItem
              title="Strengthen Community Involvement"
              description="Collaborate with local communities, religious leaders, and influencers to emphasize the importance of education."
            />
            <RecommendationItem
              title="Utilize Technology for Learning"
              description="Leverage digital learning platforms to provide supplementary education resources and virtual learning opportunities."
            />
            <RecommendationItem
              title="Implement Attendance Policies"
              description="Enforce stricter attendance policies while providing interventions for chronic absenteeism."
            />
            <RecommendationItem
              title="Peer Mentorship Programs"
              description="Create programs where older students mentor younger ones, promoting a sense of responsibility and community."
            />
            <RecommendationItem
              title="Support First-Generation Learners"
              description="Develop specialized support systems for first-generation students, providing extra academic and emotional assistance."
            />
            <RecommendationItem
              title="Offer Flexible Curriculums"
              description="Allow students to learn at their own pace, tailoring their learning experiences to individual strengths and needs."
            />
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-semibold mb-4">Take Action for Change</h2>
        <p className="mb-6">Be part of the solution and help us reduce dropout rates by getting involved in educational initiatives.</p>
        <Link
          to="/feedback"
          className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium"
        >
          Provide Your Feedback
        </Link>
      </section>
    </div>
  );
}

function RecommendationItem({ title, description }) {
  return (
    <li className="flex flex-col items-start">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </li>
  );
}
