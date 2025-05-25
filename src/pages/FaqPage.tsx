import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FaqPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/"
              className="inline-flex items-center text-indigo-200 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
              VCAP FAQ
            </h1>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* About VCAP & Eligibility */}
            <section className="bg-white rounded-2xl shadow-lg p-8 animate-slide-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About VCAP & Eligibility
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What is VCAP?</h3>
                  <p className="text-gray-700">
                    VCAP is a full-time, remote, paid program where you work on real tech projects from Day 1. No interviews, no degrees—just your dedication.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Who can apply?</h3>
                  <p className="text-gray-700 mb-4">Anyone in India with:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Minimum 15 years of education (10+2+3 or similar)</li>
                    <li>Passion for tech (software, hardware, or design)</li>
                    <li>A desire to learn & earn from home</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is this a job or training?</h3>
                  <p className="text-gray-700">
                    Both. It's a job with a structured, skill-based learning path.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is it remote?</h3>
                  <p className="text-gray-700">
                    Yes. 100% work-from-home. No need to relocate, pay rent, or worry about travel.
                  </p>
                </div>
              </div>
            </section>

            {/* Work, Tools & Growth */}
            <section className="bg-white rounded-2xl shadow-lg p-8 animate-slide-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Work, Tools & Growth
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What work will I do?</h3>
                  <p className="text-gray-700 mb-4">Live projects across:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="bg-white p-3 rounded-lg shadow-sm">Software/App development</li>
                    <li className="bg-white p-3 rounded-lg shadow-sm">UI/UX design</li>
                    <li className="bg-white p-3 rounded-lg shadow-sm">Hardware prototyping</li>
                    <li className="bg-white p-3 rounded-lg shadow-sm">AI testing</li>
                    <li className="bg-white p-3 rounded-lg shadow-sm">CAD & product design</li>
                    <li className="bg-white p-3 rounded-lg shadow-sm">Field/client-based solutions</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I get tools/laptops?</h3>
                  <p className="text-gray-700">
                    Yes, if needed. We provide laptops, kits, software licenses, and support.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens after 3 years?</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Become a senior associate, R&D lead, or team head</li>
                    <li>Option to launch your own product under VIIP</li>
                    <li>Build a strong portfolio that can take you global</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Deposit, Refund & Timeline */}
            <section className="bg-white rounded-2xl shadow-lg p-8 animate-slide-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Deposit, Refund & Timeline
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Why is there a deposit?</h3>
                  <p className="text-gray-700">
                    To provide tools, infra, training, and ensure commitment.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeline Overview</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="text-left py-2 text-gray-600">Month</th>
                          <th className="text-left py-2 text-gray-600">Milestone</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 text-gray-700">1</td>
                          <td className="py-3 text-gray-700">Onboarding & Workspace Setup</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-700">2–3</td>
                          <td className="py-3 text-gray-700">Project Simulations + Guidance</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-700">4–6</td>
                          <td className="py-3 text-gray-700">Client Projects + Mentorship</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-700">6–12</td>
                          <td className="py-3 text-gray-700">Domain Ownership + Independent Tasks</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-700">Year 2</td>
                          <td className="py-3 text-gray-700">Tech Leadership Roles + Peer Mentoring</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-700">Year 3</td>
                          <td className="py-3 text-gray-700">Portfolio Completion + Team Lead Offers</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-700">Post Year 3</td>
                          <td className="py-3 text-gray-700">Full refund + Lifetime career advantage</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Why 3 Years & VStart */}
            <section className="space-y-6 animate-slide-in">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why is the VCAP duration 3 years?
                </h2>
                <p className="text-gray-700 mb-4">
                  VCAP is designed not just as a training program—but as a long-term career platform. The 3-year model allows us to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Offer you a ₹15,000/month stipend while giving you access to real projects and tools.</li>
                  <li>Invest in your infrastructure: laptops, toolkits, software, and daily mentorship.</li>
                  <li>Help you evolve from a beginner to a team lead, with the option to launch your own product or earn long-term equity.</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Join VStart?
                </h2>
                <p className="text-gray-700">
                  Whether you're exploring your first tech internship or looking to make your academic background more relevant in today's innovation-driven world, VStart connects your classroom learning with real startup impact.
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl shadow-lg p-8 text-center animate-scale-in">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Begin Your Tech Journey?
              </h2>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                Join VCAP today and start building your future in technology.
              </p>
              <Link 
                to="/#contact" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-purple-900 bg-white rounded-lg shadow-lg hover:bg-purple-50 transition-all duration-300"
              >
                Apply Now
              </Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FaqPage;