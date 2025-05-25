import React from 'react';
import { COLLABORATION_TYPES } from '../constants';

const Collaboration: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Build the Future Together
          </h2>
          <p className="text-lg text-gray-700">
            We're open to collaborations with organizations that share our vision for innovation.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-8">
              We're open to collaborations including:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {COLLABORATION_TYPES.map((type, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 rounded-lg bg-blue-50 transition-all duration-300 hover:bg-blue-100"
                >
                  <div className="text-3xl mr-4">{type.icon}</div>
                  <p className="font-medium text-gray-900">{type.title}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
              >
                Discuss Partnership
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;