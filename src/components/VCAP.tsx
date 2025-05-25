import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Users, DollarSign, Code, Rocket } from 'lucide-react';

const VCAP: React.FC = () => {
  return (
    <section id="vcap" className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block text-purple-600 mb-4">
              <Zap className="h-12 w-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              VCAP — Vibai Career Assurance Program
            </h2>
            <p className="text-2xl font-semibold text-purple-600 mb-6">
              Your Gateway to a Tech Career — No Degree Required
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join a revolutionary program that transforms passionate learners into tech professionals, 
              with guaranteed monthly income and full work-from-home flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-3xl p-8 shadow-lg order-2 md:order-1">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Monthly Income</p>
                    <p className="text-purple-600 text-lg font-semibold">₹15,000 from Day 1</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Real Projects</p>
                    <p className="text-blue-600">Work on live tech solutions</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">No Interviews</p>
                    <p className="text-emerald-600">Passion over paperwork</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Career Growth</p>
                    <p className="text-yellow-600">From learner to leader</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Transform Your Future in Tech
                </h3>
                <p className="text-gray-600 mb-8">
                  VCAP is designed for motivated individuals who want to break into the tech industry 
                  regardless of their academic background. Our model provides practical, hands-on 
                  experience while earning, with a clear path to full-time roles based on performance.
                </p>
                <Link
                  to="/vcap"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-purple-600 rounded-xl shadow-lg hover:bg-purple-700 transition-all duration-300"
                >
                  More Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VCAP;