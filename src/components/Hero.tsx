import React from 'react';
import { Search, Zap, Rocket, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-white to-blue-50/30">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Reimagining Innovation —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Together.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join a boundary-breaking tech platform where your background doesn't limit your future.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#careers" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 group"
            >
              <Search className="mr-2 h-5 w-5" />
              Explore Roles
            </a>
            
            <a 
              href="#vcap" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 group"
            >
              <Zap className="mr-2 h-5 w-5" />
              Join VCAP
            </a>

            <a 
              href="#vstart" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-emerald-600 rounded-lg shadow-lg hover:bg-emerald-700 transition-all duration-300 group"
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              VStart Program
            </a>

            <a 
              href="#ignite" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-yellow-600 rounded-lg shadow-lg hover:bg-yellow-700 transition-all duration-300 group"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Ignite Your Idea
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;