import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Hybrid Tech Hub. A Career Launchpad. A Movement.
              </h2>
              
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-8">
                  At Vibai Innovixs, we unite passionate minds—graduates, polytechnic learners, and self-taught talents—to build meaningful tech products. Whether you're a UI/UX designer, embedded systems expert, or hardware dreamer, we give you real opportunities to grow with purpose.
                </p>
                
                <div className="inline-block border-b-2 border-purple-500 pb-2 font-semibold text-xl text-gray-900 mb-6">
                  We Don't Just Hire. We Empower.
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" 
                alt="Tech collaboration" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <div className="text-blue-600 mb-4 text-4xl">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation First</h3>
              <p className="text-gray-600">We prioritize fresh ideas and creative solutions over conventional approaches.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <div className="text-purple-600 mb-4 text-4xl">🌱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Mindset</h3>
              <p className="text-gray-600">We believe in continuous learning and development for every team member.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <div className="text-indigo-600 mb-4 text-4xl">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inclusive Community</h3>
              <p className="text-gray-600">We value diverse perspectives and backgrounds in our collaborative environment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;