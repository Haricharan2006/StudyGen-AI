import { FaBolt, FaRobot, FaClock, FaChartLine } from "react-icons/fa";

const benefits = [
  {
    icon: <FaBolt size={40} />,
    title: "Fast Learning",
    description: "Generate study material within seconds.",
  },
  {
    icon: <FaRobot size={40} />,
    title: "AI Powered",
    description: "Smart AI helps create notes, quizzes, and flashcards.",
  },
  {
    icon: <FaClock size={40} />,
    title: "Save Time",
    description: "Spend more time learning and less time preparing notes.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Track Progress",
    description: "Monitor your learning journey with quizzes and study history.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose StudyGen AI?
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Designed to make studying easier, faster, and smarter.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <div className="text-blue-600 flex justify-center mb-5">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;