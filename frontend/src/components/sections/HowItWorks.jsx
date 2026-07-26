import { FaUpload, FaMagic, FaGraduationCap } from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload size={40} />,
    title: "Upload",
    description: "Upload your notes, PDF, DOCX, or simply enter a topic.",
  },
  {
    icon: <FaMagic size={40} />,
    title: "Generate",
    description: "AI creates summaries, flashcards, and quizzes instantly.",
  },
  {
    icon: <FaGraduationCap size={40} />,
    title: "Study",
    description: "Practice, review, and improve your learning efficiently.",
  },
];

function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          How It Works
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Study smarter in just three simple steps.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-lg p-8 text-center"
            >
              <div className="text-blue-600 flex justify-center mb-5">
                {step.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;