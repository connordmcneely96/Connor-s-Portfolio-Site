export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'mechanical' | 'ai-ml' | 'fullstack' | 'client-work';
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
  client?: string;
  primaryImage?: string;
  images?: string[];
  modelPath?: string;
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  // =====================
  // MECHANICAL ENGINEERING
  // =====================
  {
    id: 'pump-consolidated',
    slug: 'api-610-centrifugal-pump-system',
    title: 'API 610 Centrifugal Pump System',
    category: 'mechanical',
    status: 'complete',
    thumbnail: '/images/projects/pump/pump_isometric.jpg',
    description: 'Full SolidWorks assembly of an OH2-type API 610 centrifugal pump with impeller, volute casing, bearing frame, and API 682 seal chamber. Includes FEA analysis and complete engineering documentation.',
    longDescription: 'Full SolidWorks assembly of an OH2-type API 610 centrifugal pump system including impeller, volute casing, bearing frame, mechanical seal chamber, and flanged suction/discharge connections. Cross-section view exposes internal seal and impeller geometry. Modeled to API 610 12th Edition and API 682 mechanical seal interface standards. Includes shaft analysis per ASME, bearing L10 life calculations, and mechanical seal selection per API 682. Delivered as part of engineering documentation for industrial applications.',
    techStack: ['SolidWorks', 'FEA', 'API 610', 'API 682', 'ASME', 'Centrifugal Pump', 'Mechanical Seal', 'CAD'],
    highlights: [
      'OH2 pump architecture modeled for API 610 compliance',
      'Cross-section shows impeller, seal chamber, and bearing internals',
      'Mechanical seal interface aligned to API 682 requirements',
      'Shaft critical speed: 58% safety margin above operating speed',
      'Bearing L10 life: 40,000+ hours',
      'Complete API 610 datasheet and GA drawing'
    ],
    metrics: [
      { label: 'Flow Rate', value: '500 GPM' },
      { label: 'Head', value: '200 ft' },
      { label: 'Standards', value: 'API 610/682' }
    ],
    client: 'Tesla',
    primaryImage: '/images/projects/pump/pump_isometric.jpg',
    images: [
      '/images/projects/pump/pump_isometric.jpg',
      '/images/projects/pump/pump_exterior.jpg',
      '/images/projects/pump/pump_cutaway.jpg',
      '/images/projects/pump/pump_cross_section.jpg',
      '/images/projects/pump/pump_fea.jpg'
    ],
    modelPath: '/models/pump-assembly.glb',
    featured: true,
    order: 1
  },
  {
    id: 'engine-consolidated',
    slug: 'v6-engine-assembly',
    title: 'V6 Engine Assembly',
    category: 'mechanical',
    status: 'complete',
    thumbnail: '/images/projects/v6-engine/v6_engine_01.jpg',
    description: 'Full parametric V6 engine assembly modeled in SolidWorks with internal cutaway views, thermodynamic analysis, and motion study-ready mate constraints.',
    longDescription: 'Full parametric V6 engine assembly modeled in SolidWorks, including multi-body sub-assemblies for the cylinder block, rocker arm mechanisms, valve train, crankshaft, and timing system. Cutaway and section views reveal internal geometry with full mate constraints and motion study compatibility. Includes slider-crank kinematics, gas and inertia force calculations, crankshaft journal sizing, connecting rod design, and thermal stress analysis of the cylinder head.',
    techStack: ['SolidWorks', 'FEA', 'Thermodynamics', 'Kinematics', 'Mechanical Design', 'Assembly Modeling', 'CAD'],
    highlights: [
      'Multi-body sub-assemblies for block, valvetrain, crankshaft, and timing components',
      'Cutaway and section views for internal geometry communication',
      'Full slider-crank kinematic analysis',
      'Gas force and inertia force calculations',
      'Crankshaft torsional vibration analysis',
      'Thermal stress analysis of cylinder head'
    ],
    client: 'Portfolio / Internal',
    primaryImage: '/images/projects/v6-engine/v6_engine_01.jpg',
    images: [
      '/images/projects/v6-engine/v6_engine_01.jpg',
      '/images/projects/v6-engine/v6_engine_02.jpg',
      '/images/projects/v6-engine/v6_engine_exploded.jpg',
      '/images/projects/v6-engine/v6_engine_cutaway.jpg'
    ],
    featured: true,
    order: 2
  },
  {
    id: 'actuator-001',
    slug: 'motorized-linear-actuator-assembly',
    title: 'Motorized Linear Actuator Assembly',
    category: 'mechanical',
    status: 'complete',
    thumbnail: '/images/cad-projects/linear_actuator.jpg',
    description: 'Custom motorized linear actuator with DC motor, gearbox, couplings, and modular T-slot fixture mounting for precision motion control.',
    longDescription: 'Custom-designed motorized linear actuator assembly mounted on extruded aluminum T-slot framing. The system integrates a DC motor, helical gearbox, shaft coupling, bearing blocks, and linear slide mechanism. Designed for precision motion control applications with modular T-slot mounting for rapid fixture reconfiguration.',
    techStack: ['SolidWorks', 'Motion Design', 'Linear Systems', 'Mechanical Assembly', 'CAD'],
    highlights: [
      'Integrated drivetrain: DC motor, gearbox, coupling, and guided linear slide',
      'Modular T-slot base enables rapid fixture reconfiguration',
      'Designed for repeatable precision motion control applications',
      'Assembly organized for maintainable sub-component updates'
    ],
    client: 'Portfolio / Internal',
    primaryImage: '/images/cad-projects/linear_actuator.jpg',
    images: ['/images/cad-projects/linear_actuator.jpg'],
    featured: true,
    order: 3
  },
  {
    id: 'fixture-001',
    slug: 'automated-drilling-fixture-industrial-assembly',
    title: 'Automated Drilling Fixture — Industrial Assembly',
    category: 'mechanical',
    status: 'complete',
    thumbnail: '/images/cad-projects/drill_fixture_iso.png',
    description: 'Automated pneumatic drilling fixture with adjustable clamping, linear guide system, and T-slot base for precision manufacturing.',
    longDescription: 'SolidWorks assembly of an automated pneumatic drilling fixture designed for repeatable precision hole placement in manufacturing environments. Features a pneumatically-actuated drill spindle mounted to a linear rail guide system, adjustable workpiece clamping, and T-slot base for flexible fixturing. Designed to API manufacturing standards with full constraint and tolerance stack-up consideration.',
    techStack: ['SolidWorks', 'Fixture Design', 'Industrial Automation', 'Manufacturing', 'CAD'],
    highlights: [
      'Pneumatic drill spindle with guided motion architecture',
      'Adjustable clamp scheme supports repeatable workholding',
      'T-slot base provides flexible factory-floor fixture setups',
      'Tolerance stack-up accounted for production consistency'
    ],
    client: 'Portfolio / Internal',
    primaryImage: '/images/cad-projects/drill_fixture_iso.png',
    images: [
      '/images/cad-projects/drill_fixture_top.png',
      '/images/cad-projects/drill_fixture_iso.png'
    ],
    featured: true,
    order: 4
  },
  {
    id: 'cnc-001',
    slug: 'cnc-gang-drill',
    title: 'CNC Gang Drill System',
    category: 'mechanical',
    status: 'complete',
    thumbnail: '/images/projects/cnc-thumb.jpg',
    description: 'Capstone project: Automated multi-spindle drilling system with vibration control and cycle time optimization.',
    longDescription: 'Senior capstone project designing a CNC gang drill system for high-volume manufacturing. Focused on spindle alignment, vibration control, and cycle time optimization.',
    techStack: ['SolidWorks', 'CNC', 'Manufacturing', 'GD&T'],
    highlights: [
      'Reduced cycle time by 40%',
      'Multi-spindle synchronization',
      'Automated tool change system',
      'Full GD&T documentation'
    ],
    featured: false,
    order: 5
  },
  {
    id: 'robot-001',
    slug: 'robot-arm',
    title: '6-Axis Industrial Robot Arm',
    category: 'mechanical',
    status: 'in-progress',
    thumbnail: '/images/projects/robot-thumb.jpg',
    description: 'FANUC-style articulated robot with complete kinematic analysis and structural FEA.',
    longDescription: 'Design of a 6-axis industrial robot arm including DH parameter definition, forward/inverse kinematics, Jacobian-based dynamics, harmonic drive selection, and structural FEA.',
    techStack: ['SolidWorks', 'Python', 'Robotics', 'ISO 9283'],
    highlights: [
      'Full DH parameter kinematic model',
      'Inverse kinematics solver',
      'Joint torque calculations for motor selection',
      'Repeatability error budget per ISO 9283'
    ],
    featured: false,
    order: 6
  },

  // =====================
  // AI & SOFTWARE
  // =====================
  {
    id: 'ai-meal-planner',
    slug: 'ai-meal-planner',
    title: 'AI Meal Planner',
    category: 'ai-ml',
    status: 'complete',
    thumbnail: '/images/projects/ai-meal-planner/hero.jpg',
    description: 'AI-powered meal planning application that generates personalized nutrition plans, grocery lists, and recipe suggestions based on dietary goals and preferences.',
    longDescription: 'An AI-powered meal planning and nutrition coaching application that provides personalized weekly meal plans, automated grocery lists, and smart recipe suggestions. Uses LLM-based dietary analysis to adapt recommendations based on fitness goals, dietary restrictions, and taste preferences. Features progress tracking and nutrition analytics dashboard.',
    techStack: ['Next.js', 'OpenAI', 'Vercel', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      'Personalized weekly meal plan generation',
      'Smart grocery list with cost optimization',
      'Dietary restriction and allergy awareness',
      'Progress analytics dashboard with macro tracking'
    ],
    links: {
      live: 'https://ai-powered-health-fitness-coach.vercel.app/',
      github: 'https://github.com/connordmcneely96/AI_Powered_Health_-_Fitness_Coach'
    },
    primaryImage: '/images/projects/ai-meal-planner/hero.jpg',
    images: [
      '/images/projects/ai-meal-planner/hero.jpg',
      '/images/projects/ai-meal-planner/dashboard.jpg',
      '/images/projects/ai-meal-planner/meal-plan.jpg'
    ],
    featured: true,
    order: 1
  },
  {
    id: 'mechassist-ai',
    slug: 'mechassist-ai',
    title: 'MechAssist AI',
    category: 'ai-ml',
    status: 'in-progress',
    thumbnail: '/images/projects/mechassist/hero.jpg',
    description: 'Multi-agent RAG system for mechanical engineers — retrieves and reasons over API, ASME, and ISO standards with source-cited answers and automated design review.',
    longDescription: 'A multi-agent retrieval-augmented generation platform purpose-built for mechanical engineers. Combines intelligent search across API, ASME, and ISO standards with multi-agent design review workflows. Features domain-configurable review agents (requirements compliance, quality assurance, risk assessment) powered by CrewAI/LangGraph. Includes source citation for compliance traceability and custom embedding pipelines for technical documentation.',
    techStack: ['LangChain', 'CrewAI', 'LangGraph', 'Pinecone', 'GPT-4', 'Python', 'RAG', 'AWS Bedrock', 'Streamlit'],
    highlights: [
      'Multi-standard knowledge base (API, ASME, ISO)',
      'Multi-agent design review workflow with domain-configurable agents',
      'Context-aware retrieval with source citation for compliance',
      'Automated compliance checking and risk identification',
      'Custom embedding pipeline for technical documentation'
    ],
    links: {
      live: 'https://rag-q-a-for-mechanical-engineers.vercel.app/',
      github: 'https://github.com/connordmcneely96/RAG-Q-A-for-Mechanical-Engineers'
    },
    primaryImage: '/images/projects/mechassist/hero.jpg',
    images: [
      '/images/projects/mechassist/hero.jpg',
      '/images/projects/mechassist/rag-interface.jpg',
      '/images/projects/mechassist/agent-flow.jpg'
    ],
    featured: true,
    order: 2
  },
  {
    id: 'ai-cad-engine',
    slug: 'ai-autonomous-cad-engine',
    title: 'AI Autonomous CAD Engine',
    category: 'ai-ml',
    status: 'in-progress',
    thumbnail: '/images/projects/ai-cad-engine/hero.jpg',
    description: 'Autonomous AI system that generates production-ready CAD assemblies from natural language specifications, bridging the gap between engineering intent and parametric design.',
    longDescription: 'An autonomous AI engine that translates natural language engineering specifications into production-ready CAD assemblies. Leverages LLM reasoning to interpret design requirements, generate parametric geometry, apply GD&T constraints, and validate against engineering standards. Designed to dramatically accelerate the concept-to-CAD pipeline for mechanical engineers.',
    techStack: ['Python', 'OpenAI', 'SolidWorks API', 'LangChain', 'FastAPI', 'TypeScript'],
    highlights: [
      'Natural language to parametric CAD generation',
      'Automated GD&T constraint application',
      'Engineering standards validation (API, ASME)',
      'Iterative design refinement via AI feedback loops'
    ],
    primaryImage: '/images/projects/ai-cad-engine/hero.jpg',
    images: [
      '/images/projects/ai-cad-engine/hero.jpg',
      '/images/projects/ai-cad-engine/workflow.jpg',
      '/images/projects/ai-cad-engine/output.jpg'
    ],
    featured: true,
    order: 3
  },
  {
    id: 'i-autodidact',
    slug: 'i-autodidact',
    title: 'I-Autodidact',
    category: 'ai-ml',
    status: 'in-progress',
    thumbnail: '/images/projects/i-autodidact/hero.jpg',
    description: 'Self-directed learning AI that builds personalized curricula, tracks mastery progression, and adapts learning paths in real-time based on performance and goals.',
    longDescription: 'An AI-powered self-directed learning platform that generates personalized learning curricula based on the user\'s goals, current skill level, and learning style. Uses spaced repetition algorithms and LLM-based content generation to adapt learning paths in real-time. Tracks mastery progression across topics and suggests optimal study sequences for maximum retention.',
    techStack: ['Next.js', 'Python', 'OpenAI', 'LangChain', 'PostgreSQL', 'TypeScript'],
    highlights: [
      'AI-generated personalized learning curricula',
      'Spaced repetition with adaptive scheduling',
      'Real-time mastery tracking and progression analytics',
      'Multi-domain support (engineering, software, languages)'
    ],
    primaryImage: '/images/projects/i-autodidact/hero.jpg',
    images: [
      '/images/projects/i-autodidact/hero.jpg',
      '/images/projects/i-autodidact/curriculum.jpg',
      '/images/projects/i-autodidact/progress.jpg'
    ],
    featured: true,
    order: 4
  },
  {
    id: 'ai-004',
    slug: 'inner-animals-dashboard',
    title: 'Inner Animals AI Dashboard',
    category: 'ai-ml',
    status: 'complete',
    thumbnail: '/images/projects/inneranimals-thumb.jpg',
    description: 'AI-powered personality analysis and visualization dashboard with ML studio, NLP analytics, RAG builder, and vision lab.',
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
    featured: false,
    order: 5
  },

  // =====================
  // FULL-STACK WEB
  // =====================
  {
    id: 'fs-001',
    slug: 'southern-pets',
    title: 'Southern Pets Animal Rescue',
    category: 'fullstack',
    status: 'complete',
    thumbnail: '/images/projects/southernpets-thumb.jpg',
    description: 'Full-stack MERN platform for animal rescue operations with pet listings, adoption applications, and donation processing.',
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
    description: 'Agency operations platform for managing client projects, proposals, invoicing, and content generation.',
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
    description: 'This portfolio site built with Next.js, Tailwind CSS, and Framer Motion, deployed on Cloudflare.',
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
  },

  // =====================
  // CLIENT WORK
  // =====================
  {
    id: 'cw-evergrow',
    slug: 'evergrow-landscaping',
    title: 'Evergrow Landscaping',
    category: 'client-work',
    status: 'complete',
    thumbnail: '/images/projects/evergrow/hero.jpg',
    description: 'Full-stack lead generation website and CRM system for a landscaping business, featuring automated quote requests, job scheduling, and client management.',
    longDescription: 'End-to-end full-stack platform for Evergrow Landscaping combining a high-conversion lead generation website with an internal CRM. Features automated quote request forms, service area mapping, job scheduling, client communication tracking, and invoice management. Built for SEO performance and mobile-first design to capture local search traffic.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel', 'SEO'],
    highlights: [
      'High-conversion lead generation landing pages',
      'Automated quote request and follow-up system',
      'Internal CRM with job scheduling and client tracking',
      'SEO-optimized for local search visibility'
    ],
    primaryImage: '/images/projects/evergrow/hero.jpg',
    images: [
      '/images/projects/evergrow/hero.jpg',
      '/images/projects/evergrow/services.jpg',
      '/images/projects/evergrow/crm.jpg'
    ],
    client: 'Evergrow Landscaping',
    featured: true,
    order: 1
  },
  {
    id: 'cw-tonys-toolbox',
    slug: 'tonys-toolbox',
    title: "Tony's Toolbox",
    category: 'client-work',
    status: 'complete',
    thumbnail: '/images/projects/tonys-toolbox/hero.jpg',
    description: "Professional business website for a local handyman service, designed for lead capture, service showcase, and local SEO dominance.",
    longDescription: "A professional, mobile-first business website for Tony's Toolbox, a local handyman and home repair service. Features service catalog with pricing transparency, online booking integration, customer testimonials, and service area mapping. Built with a focus on local SEO to dominate Google Maps and organic search in the service area.",
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'SEO', 'Google Maps API'],
    highlights: [
      'Mobile-first design with fast load times',
      'Online booking and contact integration',
      'Local SEO optimization for Google Maps visibility',
      'Service catalog with transparent pricing'
    ],
    primaryImage: '/images/projects/tonys-toolbox/hero.jpg',
    images: [
      '/images/projects/tonys-toolbox/hero.jpg',
      '/images/projects/tonys-toolbox/services.jpg',
      '/images/projects/tonys-toolbox/testimonials.jpg'
    ],
    client: "Tony's Toolbox",
    featured: true,
    order: 2
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
  'ai-ml': 'AI & Software',
  'fullstack': 'Full-Stack Web',
  'client-work': 'Client Work'
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
