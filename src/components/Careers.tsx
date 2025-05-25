import React from 'react';
import { CAREER_PATHS, EDUCATION_PATHS } from '../constants';

const Careers: React.FC = () => {
  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-white to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Career Paths at Vibai
          </h2>
          <p className="text-lg text-gray-600">
            Find your perfect fit in one of our specialized divisions, each offering unique opportunities for growth and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {CAREER_PATHS.map((path, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-6">{path.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{path.title}</h3>
              <p className="text-gray-600">{path.description}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            Your Education Doesn't Define Your Limits:
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EDUCATION_PATHS.map((path, index) => {
              const gradients = [
                'from-purple-50 to-blue-50',
                'from-blue-50 to-emerald-50',
                'from-emerald-50 to-yellow-50',
                'from-yellow-50 to-purple-50'
              ];
              
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${gradients[index]} p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 group`}
                >
                  <div className="text-3xl mb-3 transform transition-transform group-hover:scale-110">{path.icon}</div>
                  <p className="font-medium text-gray-900">{path.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;