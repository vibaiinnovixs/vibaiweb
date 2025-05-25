import React from 'react';
import { DOMAINS } from '../constants';

const Domains: React.FC = () => {
  const midPoint = Math.ceil(DOMAINS.length / 2);
  const leftColumn = DOMAINS.slice(0, midPoint);
  const rightColumn = DOMAINS.slice(midPoint);

  return (
    <section id="domains" className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Explore & Innovate Across These Fields:
          </h2>
          <p className="text-lg text-gray-600">
            Our diverse expertise allows us to tackle complex problems across multiple technology domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            {leftColumn.map((domain, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-gradient-to-r from-white to-purple-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                  {domain.icon}
                </div>
                <p className="text-gray-800 font-medium">{domain.title}</p>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            {rightColumn.map((domain, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-gradient-to-r from-white to-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                  {domain.icon}
                </div>
                <p className="text-gray-800 font-medium">{domain.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 italic">
            Our technology stack is constantly evolving to embrace the latest innovations and industry standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Domains;