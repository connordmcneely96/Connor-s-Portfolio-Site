export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'mechanical' | 'ai-ml' | 'fullstack';
  status: 'complete' | 'in-progress' | 'concept';
  thumbnail: string;
  description: string;
  longDescription: string;
  techStack: string[];
  highlights: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  images?: string[];
  modelPath?: string;
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  // MECHANICAL ENGINEERING
  {
    id: 'pump-001',
    slug: 'centrifugal-pump',
    title: 'Industrial Centrifugal Pump',
    category: 'mechanical',
    status: 'in-progress',
    thumbnail: '/images/projects/pump-thumb.jpg',
    description: 'API 610 compliant industrial pump with complete engineering documentation',
    longDescription: 'Full design of a single-stage end-suction centrifugal pump (500 GPM @ 200 ft head) following API 610 standards. Includes impeller design, volute casing, shaft analysis per ASME, bearing L10 life calculations, and mechanical seal selection per API 682.',
    techStack: ['SolidWorks', 'FEA', 'API 610', 'API 682', 'ASME'],
    highlights: [
      'Specific speed: 1,200 (optimal efficiency range)',
      'Shaft critical speed: 58% safety margin above operating speed',
      'Bearing L10 life: 40,000+ hours',
      'Complete API 610 datasheet and GA drawing'
    ],
    metrics: [
      { label: 'Flow Rate', value: '500 GPM' },
      { label: 'Head', value: '200 ft' },
      { label: 'Standards', value: 'API 610/682' }
    ],
    modelPath: '/models/pump-assembly.glb',
    featured: true,
    order: 1
  },
  {
    id: 'engine-001',
    slug: 'v6-engine',
    title: 'V6 Internal Combustion Engine',
    category: 'mechanical',
    status: 'in-progress',
    thumbnail: '/images/projects/v6-thumb.jpg',
    description: 'Complete V6 engine design with thermodynamic analysis and component stress calculations',
    longDescription: 'Detailed design of a V6 internal combustion engine including slider-crank kinematics, gas and inertia force calculations, crankshaft journal sizing, connecting rod design, and block architecture.',
    techStack: ['SolidWorks', 'FEA', 'Thermodynamics', 'Kinematics'],
    highlights: [
      'Full slider-crank kinematic analysis',
      'Gas force and inertia force calculations',
      'Crankshaft torsional vibration analysis',
      'Thermal stress analysis of cylinder head'
    ],
    featured: true,
    order: 2
  },
  {
    id: 'cnc-001',
    slug: 'cnc-gang-drill',
    title: 'CNC Gang Drill System',
    category: 'mechanical',
    status: 'complete',
    thumbnail: '/images/projects/cnc-thumb.jpg',
    description: 'Capstone project: Automated multi-spindle drilling system',
    longDescription: 'Senior capstone project designing a CNC gang drill system for high-volume manufacturing. Focused on spindle alignment, vibration control, and cycle time optimization.',
    techStack: ['SolidWorks', 'CNC', 'Manufacturing', 'GD&T'],
    highlights: [
      'Reduced cycle time by 40%',
      'Multi-spindle synchronization',
      'Automated tool change system',
      'Full GD&T documentation'
    ],
    featured: false,
    order: 3
  },
  {
    id: 'robot-001',
    slug: 'robot-arm',
    title: '6-Axis Industrial Robot Arm',
    category: 'mechanical',
    status: 'in-progress',
    thumbnail: '/images/projects/robot-thumb.jpg',
    description: 'FANUC-style articulated robot with complete kinematic analysis',
    longDescription: 'Design of a 6-axis industrial robot arm including DH parameter definition, forward/inverse kinematics, Jacobian-based dynamics, harmonic drive selection, and structural FEA.',
    techStack: ['SolidWorks', 'Python', 'Robotics', 'ISO 9283'],
    highlights: [
      'Full DH parameter kinematic model',
      'Inverse kinematics solver',
      'Joint torque calculations for motor selection',
      'Repeatability error budget per ISO 9283'
    ],
    featured: true,
    order: 4
  },

  // AI/ML PROJECTS
  {
    id: 'ai-001',
    slug: 'engineer-gpt',
    title: 'EngineerGPT',
    category: 'ai-ml',
    status: 'concept',
    thumbnail: '/images/projects/engineergpt-thumb.jpg',
    description: 'RAG system for engineering standards (API, ASME, ISO) with intelligent retrieval',
    longDescription: 'A retrieval-augmented generation system designed to answer engineering questions by intelligently searching through API, ASME, and ISO standards. Part of the EngineerCAD platform vision.',
    techStack: ['LangChain', 'Pinecone', 'GPT-4', 'Python', 'RAG'],
    highlights: [
      'Multi-standard knowledge base',
      'Context-aware retrieval',
      'Source citation for compliance',
      'Integration with EngineerCAD'
    ],
    featured: true,
    order: 1
  },
  {
    id: 'ai-002',
    slug: 'design-review-crew',
    title: 'DesignReviewCrew',
    category: 'ai-ml',
    status: 'concept',
    thumbnail: '/images/projects/reviewcrew-thumb.jpg',
    description: 'Multi-agent AI system for automated design review across disciplines',
    longDescription: 'A CrewAI/LangGraph powered system where multiple AI agents review engineering deliverables from different perspectives: requirements compliance, quality assurance, risk assessment, and domain-specific technical review.',
    techStack: ['CrewAI', 'LangGraph', 'AWS Bedrock', 'Python'],
    highlights: [
      'Multi-agent review workflow',
      'Domain-configurable (ME, AI, Business)',
      'Automated compliance checking',
      'Risk identification and mitigation suggestions'
    ],
    featured: true,
    order: 2
  },
  {
    id: 'ai-003',
    slug: 'ai-health-coach',
    title: 'AI Health & Fitness Coach',
    category: 'ai-ml',
    status: 'complete',
    thumbnail: '/images/projects/healthcoach-thumb.jpg',
    description: 'Personalized AI health coaching application',
    longDescription: 'An AI-powered health and fitness coaching application that provides personalized workout plans, nutrition guidance, and progress tracking.',
    techStack: ['Next.js', 'OpenAI', 'Vercel', 'TypeScript'],
    highlights: [
      'Personalized workout generation',
      'Nutrition tracking integration',
      'Progress analytics dashboard',
      'Natural language interaction'
    ],
    links: {
      live: 'https://ai-powered-health-fitness-coach.vercel.app/',
      github: 'https://github.com/connordmcneely96/AI_Powered_Health_-_Fitness_Coach'
    },
    featured: false,
    order: 3
  },
  {
    id: 'ai-004',
    slug: 'inner-animals-dashboard',
    title: 'Inner Animals AI Dashboard',
    category: 'ai-ml',
    status: 'complete',
    thumbnail: '/images/projects/inneranimals-thumb.jpg',
    description: 'AI-powered personality analysis and visualization dashboard',
    longDescription: 'Interactive dashboard that uses AI to analyze and visualize personality traits, providing insights through animal archetypes and behavioral patterns. Features ML studio, NLP analytics, RAG builder, and vision lab.',
    techStack: ['Next.js', 'FastAPI', 'LangChain', 'Python', 'TensorFlow'],
    highlights: [
      'AI personality analysis',
      'Interactive data visualization',
      'Custom archetype generation',
      'RAG-powered knowledge base'
    ],
    links: {
      github: 'https://github.com/connordmcneely96/inner-animals-ai-dashboard'
    },
    featured: true,
    order: 4
  },
  {
    id: 'ai-005',
    slug: 'rag-qa-system',
    title: 'RAG Q&A for Engineers',
    category: 'ai-ml',
    status: 'complete',
    thumbnail: '/images/projects/rag-thumb.jpg',
    description: 'Retrieval-Augmented Generation system for technical documentation',
    longDescription: 'A RAG-based question answering system designed specifically for mechanical engineers, enabling intelligent search and retrieval from technical documentation, standards, and engineering references.',
    techStack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'Streamlit'],
    highlights: [
      'Semantic search across technical docs',
      'Context-aware answer generation',
      'Source citation and traceability',
      'Custom embedding pipeline'
    ],
    links: {
      live: 'https://rag-q-a-for-mechanical-engineers.vercel.app/',
      github: 'https://github.com/connordmcneely96/RAG-Q-A-for-Mechanical-Engineers'
    },
    featured: false,
    order: 5
  },

  // FULL-STACK PROJECTS
  {
    id: 'fs-001',
    slug: 'southern-pets',
    title: 'Southern Pets Animal Rescue',
    category: 'fullstack',
    status: 'complete',
    thumbnail: '/images/projects/southernpets-thumb.jpg',
    description: 'Full-stack MERN platform for animal rescue operations',
    longDescription: 'Complete web platform for an animal rescue organization, featuring pet listings, adoption applications, volunteer management, and donation processing.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind'],
    highlights: [
      'Pet listing management system',
      'Adoption application workflow',
      'Volunteer scheduling',
      'Payment integration for donations'
    ],
    links: {
      github: 'https://github.com/connordmcneely96/Southern-Pets-Animal-Rescue-client-project',
      live: 'https://southern-pets-animal-rescue-client.vercel.app/'
    },
    featured: true,
    order: 1
  },
  {
    id: 'fs-002',
    slug: 'leadership-legacy',
    title: 'Leadership Legacy Platform',
    category: 'fullstack',
    status: 'in-progress',
    thumbnail: '/images/projects/leadershiplegacy-thumb.jpg',
    description: 'Agency operations platform for Leadership Legacy LLC',
    longDescription: 'Internal operations platform for managing client projects, proposals, invoicing, and content generation for the AI engineering and consulting agency.',
    techStack: ['Next.js', 'Supabase', 'Cloudflare', 'TypeScript'],
    highlights: [
      'Client project management',
      'Proposal generation system',
      'Invoice tracking',
      'Content calendar integration'
    ],
    featured: false,
    order: 2
  },
  {
    id: 'fs-003',
    slug: 'portfolio-site',
    title: 'Portfolio Website',
    category: 'fullstack',
    status: 'complete',
    thumbnail: '/images/projects/portfolio-thumb.jpg',
    description: 'This portfolio site built with Next.js and deployed on Cloudflare',
    longDescription: 'A modern, responsive portfolio website showcasing engineering and AI development work. Built with Next.js 15, Tailwind CSS, and Framer Motion. Features 3D model viewing, dynamic project filtering, and edge-deployed backend.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Cloudflare'],
    highlights: [
      'Lighthouse score 95+',
      '3D model viewer integration',
      'Edge-deployed API routes',
      'Responsive design system'
    ],
    featured: false,
    order: 3
  }
];

// Helper functions
export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects
    .filter(p => p.category === category)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter(p => p.featured)
    .sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projects.filter(p => p.status === status);
}

export const categoryLabels: Record<Project['category'], string> = {
  'mechanical': 'Mechanical Engineering',
  'ai-ml': 'AI/ML',
  'fullstack': 'Full-Stack'
};

export const statusLabels: Record<Project['status'], string> = {
  'complete': 'Complete',
  'in-progress': 'In Progress',
  'concept': 'Concept'
};

export const statusColors: Record<Project['status'], string> = {
  'complete': 'bg-success/20 text-success border-success/30',
  'in-progress': 'bg-accent-500/20 text-accent-400 border-accent-500/30',
  'concept': 'bg-secondary-500/20 text-secondary-400 border-secondary-500/30'
};
