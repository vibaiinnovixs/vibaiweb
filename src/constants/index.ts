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
  { icon: '🧩', title: 'Embedded Systems & Microcontrollers' },
  { icon: '🔌', title: 'Smart IoT Devices & Sensors' },
  { icon: '🧠', title: 'AI/ML & Predictive Logic Models' },
  { icon: '📱', title: 'Mobile App Ecosystems (Android, iOS)' },
  { icon: '🧾', title: 'UI/UX & Interface Psychology' },
  { icon: '⚙️', title: 'Mechanical CAD & Product Design' },
  { icon: '🖥', title: 'Web Technologies & Cloud Interfaces' },
  { icon: '🧲', title: 'Electronic Circuit Design & Prototyping' },
  { icon: '💬', title: 'Human-Computer Interaction & Voice Systems' },
  { icon: '⚡', title: 'Low-Power Systems & Energy Optimization' },
];

export const CAREER_PATHS: CareerPath[] = [
  { 
    title: 'Design Division', 
    description: 'UI/UX artists, modelers, graphics',
    icon: '🎨'
  },
  { 
    title: 'Assembly Division', 
    description: 'prototypers, PCB builders, QA',
    icon: '🔧'
  },
  { 
    title: 'Field Division', 
    description: 'onsite deployers, installers, testers',
    icon: '🛠️'
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
  { title: 'Contract-based Projects', icon: '🤝' },
  { title: 'Institutional Training Tie-ups', icon: '👩‍🏫' },
  { title: 'Hardware & Software Integration', icon: '🧑‍🔧' },
  { title: 'Bulk Hiring of VCAP Graduates', icon: '💼' },
];

export const VCAP_TECHNOLOGIES = [
  'Software Development (Web, Mobile)',
  'Cloud & DevOps',
  'Electronics & Embedded Systems',
  'AI, ML & Chatbots',
  'UI/UX Design',
  '3D Design & CAD Tools',
  'Smart Hardware Integration',
];

export const VCAP_ROLES = [
  'Software Developer',
  'Hardware Engineer',
  'UI/UX Designer',
  'AI Model Trainer',
  'DevOps Assistant',
  'R&D Associate',
  'Quality Tester',
  'Project Assistant',
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
  'Stable income',
  'Family support at home',
  'Career growth through real experience',
  'Better structure than gig or freelance jobs',
];

export const WHY_VCAP = [
  'Work From Home – No relocation struggles',
  'Fixed ₹15,000/month Salary – From Day 1',
  'Hands-on Real Project Work',
  'No Interview – Just 15 years of education',
  'Strong Community and Mentorship',
];