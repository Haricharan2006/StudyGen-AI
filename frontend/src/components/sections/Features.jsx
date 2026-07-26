import { BookOpen, Brain, ClipboardCheck } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <BookOpen size={40} />,
      title: "AI Notes",
      description:
        "Generate clean, structured notes from any topic instantly."
    },
    {
      icon: <Brain size={40} />,
      title: "Flashcards",
      description:
        "Learn faster using AI-generated flashcards."
    },
    {
      icon: <ClipboardCheck size={40} />,
      title: "Quiz Generator",
      description:
        "Practice with AI-generated quizzes based on your notes."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <div className="text-blue-600 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;