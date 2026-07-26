import heroImage from "../../assets/images/hero-image.jpg";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full">
    
            <div className="grid md:grid-cols-2 gap-12 items-center">
    
              <div>
    
                <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
                  AI Powered
                  <br />
                  Study Assistant
                </h1>
    
                <p className="mt-8 text-xl text-gray-600 leading-9">
                  Generate AI Notes, Flashcards, Quizzes and
                  personalized summaries in seconds.
                </p>
    
                <div className="mt-10 flex gap-5">
    
                  <button
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl
                    hover:bg-blue-700 transition duration-300"
                  >
                    Get Started
                  </button>
    
                  <button
                    className="border-2 border-blue-600 text-blue-600
                    px-8 py-4 rounded-xl hover:bg-blue-600
                    hover:text-white transition duration-300"
                  >
                    Learn More
                  </button>
    
                </div>
    
              </div>
    
              <div className="flex justify-center">
    
                <img
                src={heroImage}
                alt="AI Study Assistant"
                className="rounded-3xl shadow-2xl w-full max-w-lg"
                />
    
              </div>
    
            </div>
    
          </div>
        </section>
  );
}

export default Hero;