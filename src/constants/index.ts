import { NavItem, DomainItem, CareerPath, EducationPath, VcapHighlight, CollaborationType } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Domains', href: '/#domains' },
  { label: 'Careers', href: '/#careers' },
  { label: 'VCAP', href: '/#vcap' },
  { label: 'Ignite', href: '/#ignite' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/#contact' },
];

export const DOMAINS: DomainItem[] = [
  { icon: '🧠', title: 'AI/ML & Intelligent Systems' },
  { icon: '🤖', title: 'Conversational AI & NLP' },
  { icon: '🔌', title: 'Edge AI & Smart IoT' },
  { icon: '📱', title: 'Mobile & Cross-platform AI' },
  { icon: '🎨', title: 'AI-Powered UI/UX Design' },
  { icon: '⚙️', title: 'AI-Enhanced CAD & Engineering' },
  { icon: '☁️', title: 'Cloud AI & MLOps' },
  { icon: '🧲', title: 'Smart Circuit Design & Testing' },
  { icon: '🌱', title: 'AI-Driven Hydroponics Systems' },
  { icon: '📊', title: 'Predictive Analytics & Optimization' },
  { icon: '🤝', title: 'Human-AI Collaboration Systems' },
  { icon: '🔋', title: 'Sustainable Tech & Energy AI' },
];

export const CAREER_PATHS: CareerPath[] = [
  { 
    title: 'AI Solutions Division', 
    description: 'ML engineers, NLP specialists, AI architects',
    icon: '🧠'
  },
  { 
    title: 'Smart Systems Division', 
    description: 'IoT developers, automation engineers',
    icon: '🤖'
  },
  { 
    title: 'Hydroponics Division', 
    description: 'AI cultivation, plant analytics',
    icon: '🌱'
  },
];

export const EDUCATION_PATHS: EducationPath[] = [
  { title: 'B.Tech / B.Sc / B.Com', icon: '🎓' },
  { title: 'Diploma / Polytechnic', icon: '🏫' },
  { title: 'ITI / Vocational', icon: '🛠' },
  { title: 'Self-taught Individuals', icon: '🧠' },
];

export const VCAP_HIGHLIGHTS: VcapHighlight[] = [
  { 
    title: 'Roles based on skill, not resume', 
    description: 'We evaluate what you can do, not what your CV says',
    icon: '📝' 
  },
  { 
    title: '₹15,000 monthly income from Day 1', 
    description: 'Start earning immediately without probation periods',
    icon: '💰' 
  },
  { 
    title: 'No degree or interview required', 
    description: 'Your skills and passion matter more than formal credentials',
    icon: '🎯' 
  },
  { 
    title: 'Real-time learning on real projects', 
    description: 'Learn by doing meaningful work, not theoretical exercises',
    icon: '💼' 
  },
  { 
    title: 'Mentorship and growth path', 
    description: 'Personalized guidance to help you advance your career',
    icon: '📈' 
  },
];

export const COLLABORATION_TYPES: CollaborationType[] = [
  { title: 'AI Research Partnerships', icon: '🤝' },
  { title: 'Smart Agriculture Solutions', icon: '🌱' },
  { title: 'Intelligent Systems Integration', icon: '🤖' },
  { title: 'AI Talent Development', icon: '👥' },
];

export const VCAP_TECHNOLOGIES = [
  'AI/ML Development',
  'Smart IoT Systems',
  'Hydroponics Technology',
  'Cloud & MLOps',
  'Intelligent UI/UX',
  'Predictive Analytics',
  'Edge Computing',
  'Automation Systems',
];

export const VCAP_ROLES = [
  'AI Solutions Architect',
  'ML Engineer',
  'Smart Systems Developer',
  'Hydroponics AI Specialist',
  'IoT Solutions Engineer',
  'Data Intelligence Analyst',
  'AI Research Associate',
  'Automation Engineer',
];

export const VCAP_FINANCIAL_COMPARISON = [
  { 
    category: 'Monthly Take-Home', 
    vcap: '₹15,000', 
    cityJob: '₹40,000',
    vcapClass: 'text-green-600',
    cityJobClass: 'text-green-600'
  },
  { 
    category: 'Rent/Hostel', 
    vcap: '₹0', 
    cityJob: '-₹10,000',
    vcapClass: 'text-green-600',
    cityJobClass: 'text-red-600'
  },
  { 
    category: 'Food & Groceries', 
    vcap: '₹0', 
    cityJob: '-₹7,000',
    vcapClass: 'text-green-600',
    cityJobClass: 'text-red-600'
  },
  { 
    category: 'Commute/Travel', 
    vcap: '₹0', 
    cityJob: '-₹3,000',
    vcapClass: 'text-green-600',
    cityJobClass: 'text-red-600'
  },
  { 
    category: 'City Living Costs', 
    vcap: '₹0', 
    cityJob: '-₹5,000',
    vcapClass: 'text-green-600',
    cityJobClass: 'text-red-600'
  },
  { 
    category: 'Net Savings', 
    vcap: '₹15,000', 
    cityJob: '₹15,000',
    vcapClass: 'text-green-600 font-bold',
    cityJobClass: 'text-green-600 font-bold'
  },
];

export const VCAP_BENEFITS = [
  'Work with cutting-edge AI',
  'Learn from industry experts',
  'Build real-world solutions',
  'Growth-focused environment',
];

export const WHY_VCAP = [
  'Work From Home – No relocation struggles',
  'Fixed ₹15,000/month Salary – From Day 1',
  'Hands-on AI Project Experience',
  'No Interview – Just passion for tech',
  'Strong Mentorship Community',
];