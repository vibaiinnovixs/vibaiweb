import React from 'react';
import { Briefcase, Clock, DollarSign, GraduationCap, Users, Rocket } from 'lucide-react';

const VStart: React.FC = () => {
  return (
    <section id="vstart" className="py-20 bg-gradient-to-br from-white to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block text-emerald-600 mb-4">🌱</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              VStart — Internship Program for College Students
            </h2>
            <p className="text-2xl font-semibold text-emerald-600 mb-6">
              Where Students Become Innovators
            </p>
            <p className="text-lg text-gray-600">
              VStart is Vibai Innovixs' exclusive internship program crafted for ambitious college students. 
              It's not just about learning — it's about building real-world solutions in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Program Highlights</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Security Deposit</p>
                    <p className="text-emerald-600">₹1,00,000 (Fully Refundable)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Daily Commitment</p>
                    <p className="text-emerald-600">4 hours/day (remote)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Stipend</p>
                    <p className="text-emerald-600">₹4,000/month</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Eligibility</p>
                    <p className="text-emerald-600">Undergraduates & Postgraduates (any stream)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Mentorship</p>
                    <p className="text-emerald-600">Learn directly from Vibai professionals</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Career Boost</p>
                    <p className="text-emerald-600">Add real startup projects to your resume</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Join VStart?</h3>
              <p className="text-gray-600 mb-6">
                Turn classroom knowledge into live innovation. From portfolio enhancement to pre-placement offers, 
                VStart is the bridge between college and your career in tech.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Real Projects</h4>
                  <p className="text-gray-600">Work on actual products used by customers</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Skill Development</h4>
                  <p className="text-gray-600">Learn industry-standard tools and practices</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Career Growth</h4>
                  <p className="text-gray-600">Potential for pre-placement offers based on performance</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-lg shadow-lg hover:bg-emerald-700 transition-all duration-300"
                >
                  Apply for VStart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VStart;