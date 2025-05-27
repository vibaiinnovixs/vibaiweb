import React, { useEffect } from 'react';
import { ArrowLeft, Home, Briefcase, Code, Cpu, Layout, Rocket, Globe, Users, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface RefundTimelineItem {
  period: string;
  monthlyDeduction: string;
  refund: string;
  salaryEarned: string;
  totalTakeaway: string;
}

interface DepartmentRole {
  title: string;
  description: string;
}

interface Department {
  name: string;
  roles: DepartmentRole[];
}

const DEPARTMENTS: Department[] = [
  {
    name: "Software & AI",
    roles: [
      { title: "AI Solutions Architect", description: "Designs intelligent systems with NLP & ML" },
      { title: "Conversational AI Developer", description: "Builds chatbots & voice assistants" },
      { title: "AI Code Quality Engineer", description: "Enhances code with AI tools" }
    ]
  },
  {
    name: "Hardware & IoT",
    roles: [
      { title: "Edge AI Engineer", description: "Builds AI-integrated devices" },
      { title: "IoT Intelligence Analyst", description: "Analyzes IoT data streams" },
      { title: "Smart Systems Designer", description: "Creates intelligent hardware solutions" }
    ]
  },
  {
    name: "Cloud & Data",
    roles: [
      { title: "AI Pipeline Engineer", description: "Manages AI training workflows" },
      { title: "Data Intelligence Lead", description: "Oversees AI data operations" },
      { title: "MLOps Specialist", description: "Handles AI deployment & scaling" }
    ]
  },
  {
    name: "Design & UX",
    roles: [
      { title: "AI UX Designer", description: "Creates adaptive interfaces" },
      { title: "Visual AI Artist", description: "Applies generative design" },
      { title: "Smart UI Architect", description: "Builds intelligent interfaces" }
    ]
  },
  {
    name: "Business & Ops",
    roles: [
      { title: "AI Process Optimizer", description: "Automates workflows with AI" },
      { title: "Intelligence Analyst", description: "Provides AI-driven insights" },
      { title: "Smart Systems Manager", description: "Oversees AI operations" }
    ]
  }
];

const REFUND_TIMELINE: RefundTimelineItem[] = [
  {
    period: 'After 1 Year',
    monthlyDeduction: '₹7,000 × 12',
    refund: '₹1,16,000',
    salaryEarned: '₹1,80,000',
    totalTakeaway: '₹2,96,000'
  },
  {
    period: 'After 2 Years',
    monthlyDeduction: '₹6,000 × 24',
    refund: '₹56,000',
    salaryEarned: '₹3,60,000',
    totalTakeaway: '₹4,16,000'
  },
  {
    period: 'After 3 Years',
    monthlyDeduction: '₹5,000 × 36',
    refund: '₹20,000',
    salaryEarned: '₹5,40,000',
    totalTakeaway: '₹5,60,000'
  },
  {
    period: '3+ Years',
    monthlyDeduction: '₹0',
    refund: '₹2,00,000',
    salaryEarned: '₹6,00,000+',
    totalTakeaway: '₹8,00,000+'
  }
];

const VCAP_FINANCIAL_COMPARISON = [
  { category: 'Take-Home Salary', vcap: '₹15,000', cityJob: '₹40,000', vcapClass: 'text-green-600', cityJobClass: 'text-green-600' },
  { category: 'Rent/Hostel', vcap: '₹0', cityJob: '–₹10,000', vcapClass: 'text-green-600', cityJobClass: 'text-red-600' },
  { category: 'Food & Groceries', vcap: '₹0', cityJob: '–₹7,000', vcapClass: 'text-green-600', cityJobClass: 'text-red-600' },
  { category: 'Commute/Travel', vcap: '₹0', cityJob: '–₹3,000', vcapClass: 'text-green-600', cityJobClass: 'text-red-600' },
  { category: 'Misc. Costs', vcap: '₹0', cityJob: '–₹5,000', vcapClass: 'text-green-600', cityJobClass: 'text-red-600' },
  { category: 'Net Savings', vcap: '₹15,000', cityJob: '₹15,000', vcapClass: 'text-green-600 font-bold', cityJobClass: 'text-green-600 font-bold' }
];

const VcapPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/vcap') {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }
  }, [location]);

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
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              VCAP — Vibai Career Assurance Program
            </h1>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Overview Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Start Your Tech Career from Home — No Degree, No Interviews.
              </h2>
              <p className="text-lg text-gray-600">
                VCAP is a full-time, paid remote program aimed at empowering talented individuals across India—especially from rural and underserved areas. Learn real skills, earn monthly income, and gain mentorship—all without ever stepping into a traditional office.
              </p>
            </section>

            {/* Departments and Roles Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                AI-Powered Career Paths
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {DEPARTMENTS.map((dept, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                      {dept.name}
                    </h3>
                    <div className="space-y-3">
                      {dept.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className="bg-white rounded-lg p-3 shadow-sm">
                          <h4 className="font-medium text-gray-900 text-sm">{role.title}</h4>
                          <p className="text-gray-600 text-xs mt-1">{role.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Work From Home Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Home className="w-6 h-6 mr-2 text-purple-600" />
                Why Work From Home?
              </h2>
              <p className="text-gray-600 mb-8">
                At Vibai Innovixs, we believe innovation shouldn't be limited by your location, language, or lifestyle. That's why VCAP is fully remote — built to empower you, wherever you are.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <Home className="w-5 h-5 text-purple-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Remote Innovation</h3>
                    </div>
                    <p className="text-sm text-gray-600">Work on cutting-edge AI projects from anywhere</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Zero Relocation</h3>
                    </div>
                    <p className="text-sm text-gray-600">Save on living costs while building your career</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <Heart className="w-5 h-5 text-green-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Work-Life Balance</h3>
                    </div>
                    <p className="text-sm text-gray-600">Maintain family connections while growing professionally</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-purple-50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-yellow-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Inclusive Growth</h3>
                    </div>
                    <p className="text-sm text-gray-600">Equal opportunities regardless of location</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Financial Transparency Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Transparency</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VCAP (Remote)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City Job (₹40K Salary)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {VCAP_FINANCIAL_COMPARISON.map((row, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.category}</td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${row.vcapClass}`}>{row.vcap}</td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${row.cityJobClass}`}>{row.cityJob}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Security Deposit & Refund Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Deposit & Refund</h2>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">₹</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Deposit: ₹2,00,000 (Fully Refundable)</h3>
                    <p className="text-gray-600">Covers tools, training, licensed software, infra, and mentorship.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Refund Timelines:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Exit Period</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Monthly Deduction</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Refund</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Salary Earned</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Takeaway</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {REFUND_TIMELINE.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm text-gray-900">{item.period}</td>
                        <td className="px-4 py-4 text-sm text-gray-600">{item.monthlyDeduction}</td>
                        <td className="px-4 py-4 text-sm text-green-600">{item.refund}</td>
                        <td className="px-4 py-4 text-sm text-blue-600">{item.salaryEarned}</td>
                        <td className="px-4 py-4 text-sm font-medium text-purple-600">{item.totalTakeaway}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-sm text-gray-600">
                ⏳ Refund is processed within 15 business days after program exit.
              </p>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                Join VCAP today and build your tech career from home. No interviews, no degrees—just your passion and commitment.
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

export default VcapPage;