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
    name: "Software Department",
    roles: [
      {
        title: "AI Solutions Architect",
        description: "Designs intelligent systems leveraging NLP, ML, and predictive modeling"
      },
      {
        title: "Conversational Interface Developer",
        description: "Develops AI chatbots and voice assistants"
      },
      {
        title: "AI Code Auditor",
        description: "Uses AI tools to analyze and enhance code quality and security"
      },
      {
        title: "Intelligent QA Analyst",
        description: "Automates test cases using AI to ensure software reliability"
      },
      {
        title: "Smart Deployment Engineer",
        description: "Manages CI/CD with AI optimization"
      }
    ]
  },
  {
    name: "Hardware & IoT Department",
    roles: [
      {
        title: "Edge AI Hardware Engineer",
        description: "Builds devices with integrated edge AI processing"
      },
      {
        title: "Autonomous Device Tester",
        description: "Uses AI to simulate and test hardware functions"
      },
      {
        title: "Sensor Data Intelligence Analyst",
        description: "Analyzes real-time IoT data streams using AI models"
      },
      {
        title: "AI Circuit Design Assistant",
        description: "Aids in circuit planning with machine learning insights"
      }
    ]
  },
  {
    name: "Mechanical & Enclosure Department",
    roles: [
      {
        title: "AI-Driven Product Designer",
        description: "Uses generative AI tools for 3D modeling and industrial design"
      },
      {
        title: "Predictive Maintenance Analyst",
        description: "Uses AI to forecast wear and maintenance schedules"
      },
      {
        title: "Digital Twin Simulation Engineer",
        description: "Builds simulation models using real-time data and AI"
      },
      {
        title: "AI-Assisted Structural Analyst",
        description: "Evaluates physical product integrity with machine learning"
      }
    ]
  },
  {
    name: "Cloud & Data Department",
    roles: [
      {
        title: "AI Data Pipeline Engineer",
        description: "Builds and manages smart data flows for training and inference"
      },
      {
        title: "Cognitive Data Steward",
        description: "Monitors and curates training data for ethical and effective AI use"
      },
      {
        title: "Smart Storage Architect",
        description: "Designs AI-optimized cloud storage systems"
      },
      {
        title: "AI Security Analyst",
        description: "Protects systems using AI threat detection and pattern analysis"
      }
    ]
  },
  {
    name: "UI/UX & Design Department",
    roles: [
      {
        title: "Neuroadaptive UI Designer",
        description: "Designs interfaces that adapt to user behavior using AI"
      },
      {
        title: "AI-Powered UX Strategist",
        description: "Uses analytics and AI models to optimize user experiences"
      },
      {
        title: "Visual Intelligence Artist",
        description: "Applies generative models to create dynamic content"
      },
      {
        title: "Smart Accessibility Analyst",
        description: "Enhances accessibility with AI recognition and personalization"
      }
    ]
  },
  {
    name: "Business & Operations Department",
    roles: [
      {
        title: "Autonomous Process Optimizer",
        description: "Automates workflows using process mining and AI"
      },
      {
        title: "Predictive Business Analyst",
        description: "Forecasts trends, sales, and risks using AI insights"
      },
      {
        title: "AI Contracts & Policy Manager",
        description: "Manages smart contracts and AI-governed compliance"
      },
      {
        title: "Operational Digital Twin Manager",
        description: "Maintains real-time AI models of business systems"
      }
    ]
  },
  {
    name: "HR & Talent Department",
    roles: [
      {
        title: "AI Talent Acquisition Specialist",
        description: "Uses AI to identify, screen, and onboard talent"
      },
      {
        title: "Sentiment & Wellness Monitor",
        description: "Uses AI to track team morale and engagement"
      },
      {
        title: "Skill Gap AI Assessor",
        description: "Detects and recommends upskilling using AI profiles"
      },
      {
        title: "AI-Enhanced Training Architect",
        description: "Designs AI-personalized learning programs"
      }
    ]
  },
  {
    name: "Marketing & Sales Department",
    roles: [
      {
        title: "Predictive Market Analyst",
        description: "Uses AI to analyze demand and customer behavior"
      },
      {
        title: "AI Content Generator",
        description: "Crafts content using generative AI tools"
      },
      {
        title: "Smart Campaign Manager",
        description: "Designs and deploys AI-optimized marketing campaigns"
      },
      {
        title: "Sales Intelligence Agent",
        description: "Enhances CRM and lead qualification with AI"
      }
    ]
  },
  {
    name: "Customer & Field Services",
    roles: [
      {
        title: "AI Support Agent Supervisor",
        description: "Oversees AI-based customer support systems"
      },
      {
        title: "Automated Service Scheduler",
        description: "Uses AI to assign field tasks efficiently"
      },
      {
        title: "Voice & Intent Recognition Specialist",
        description: "Enhances customer understanding with AI"
      },
      {
        title: "Field Data AI Analyst",
        description: "Gathers insights from customer interactions in real-time"
      }
    ]
  },
  {
    name: "Finance & Legal Department",
    roles: [
      {
        title: "Financial Pattern Predictor",
        description: "Uses AI to detect anomalies and forecast performance"
      },
      {
        title: "Smart Invoice & Audit Manager",
        description: "Automates billing and audits with AI tools"
      },
      {
        title: "AI Compliance Officer",
        description: "Ensures regulatory adherence with AI-powered monitoring"
      },
      {
        title: "Legal Document Synthesizer",
        description: "Automates legal drafting and review using NLP"
      }
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
          <div className="max-w-6xl mx-auto space-y-12">
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
            <section className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
                AI-Powered Career Paths
              </h2>
              
              <div className="grid grid-cols-1 gap-8">
                {DEPARTMENTS.map((dept, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 px-6 py-4">
                      <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {dept.roles.map((role, roleIndex) => (
                          <div 
                            key={roleIndex}
                            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 transition-all duration-300 hover:shadow-md"
                          >
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{role.title}</h4>
                            <p className="text-gray-600">{role.description}</p>
                          </div>
                        ))}
                      </div>
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
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Home className="w-5 h-5 text-purple-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Reach Rural & Semi-Urban Talent</h3>
                    </div>
                    <p className="text-gray-600">We aim to bring tech careers to towns and villages where such opportunities rarely exist.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Remove Relocation Barriers</h3>
                    </div>
                    <p className="text-gray-600">No need to uproot your life or move to crowded cities. Save on rent, food, and transport.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Heart className="w-5 h-5 text-green-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Create Sustainable Growth</h3>
                    </div>
                    <p className="text-gray-600">Working from your own environment builds a healthier work-life balance, improving mental focus and family support.</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Globe className="w-5 h-5 text-yellow-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Real World, Real Projects — Remotely</h3>
                    </div>
                    <p className="text-gray-600">Today's tech is global and collaborative. From GitHub to Zoom, we use modern tools to work on cutting-edge projects without borders.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-50 to-purple-50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Users className="w-5 h-5 text-red-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Inclusivity in Action</h3>
                    </div>
                    <p className="text-gray-600">Women, caretakers, and differently-abled individuals often face hurdles commuting to jobs. Remote work offers them a level playing field.</p>
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
                    {[
                      { category: 'Take-Home Salary', vcap: '₹15,000', city: '₹40,000', vcapClass: 'text-green-600', cityClass: 'text-green-600' },
                      { category: 'Rent/Hostel', vcap: '₹0', city: '–₹10,000', vcapClass: 'text-green-600', cityClass: 'text-red-600' },
                      { category: 'Food & Groceries', vcap: '₹0', city: '–₹7,000', vcapClass: 'text-green-600', cityClass: 'text-red-600' },
                      { category: 'Commute/Travel', vcap: '₹0', city: '–₹3,000', vcapClass: 'text-green-600', cityClass: 'text-red-600' },
                      { category: 'Misc. Costs', vcap: '₹0', city: '–₹5,000', vcapClass: 'text-green-600', cityClass: 'text-red-600' },
                      { category: 'Net Savings', vcap: '₹15,000', city: '₹15,000', vcapClass: 'text-green-600 font-bold', cityClass: 'text-green-600 font-bold' },
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.category}</td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${row.vcapClass}`}>{row.vcap}</td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${row.cityClass}`}>{row.city}</td>
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