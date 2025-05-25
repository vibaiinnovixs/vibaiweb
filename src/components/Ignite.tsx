import React from 'react';
import { Lightbulb } from 'lucide-react';

const Ignite: React.FC = () => {
  return (
    <section id="ignite" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-8 md:mb-0 md:mr-12 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Have an Idea? Let's Build It.
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    VIIP – Vibai Innovative Ignite Program helps turn your innovative ideas into reality.
                  </p>
                  
                  <div className="inline-flex justify-center items-center bg-purple-100 px-4 py-2 rounded-full text-purple-800 font-medium text-sm mb-6">
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Idea Incubation Program
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">If your idea is accepted:</h3>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="text-2xl mr-3">💸</div>
                        <div>
                          <p className="font-medium text-gray-900">Get 2% of net product profits — for life</p>
                          <p className="text-sm text-gray-600">Recurring revenue stream without any investment</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-2xl mr-3">🛠</div>
                        <div>
                          <p className="font-medium text-gray-900">Full build and scale support</p>
                          <p className="text-sm text-gray-600">Our team handles all technical development</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-2xl mr-3">📣</div>
                        <div>
                          <p className="font-medium text-gray-900">Name credited publicly</p>
                          <p className="text-sm text-gray-600">Your contribution will be recognized</p>
                        </div>
                      </li>
                    </ul>
                    
                    <div className="mt-8">
                      <a 
                        href="#contact" 
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
                      >
                        Submit Your Idea
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ignite;