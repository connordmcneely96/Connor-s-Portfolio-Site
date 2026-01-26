'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain,
  Settings,
  Code2,
  PenTool,
  ArrowRight,
  Check,
  Sparkles,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const services = [
  {
    id: 'ai-development',
    icon: Brain,
    title: 'AI Development Services',
    subtitle: 'Custom AI solutions for engineering and business',
    description:
      'From RAG systems to multi-agent architectures, I build AI tools that solve real problems. Specializing in engineering-focused AI that understands technical domains.',
    features: [
      'Custom RAG systems for technical documentation',
      'Multi-agent workflows with CrewAI/LangGraph',
      'LLM integration and prompt engineering',
      'AI-powered automation pipelines',
      'Vector database setup and optimization',
      'Production deployment and scaling',
    ],
    deliverables: [
      'Working AI application',
      'Documentation and training',
      'Source code and deployment guides',
      'Ongoing support options',
    ],
    pricing: 'Starting at $5,000',
    gradient: 'from-accent-500 to-accent-600',
    popular: true,
  },
  {
    id: 'engineering',
    icon: Settings,
    title: 'Engineering Consultation',
    subtitle: 'Expert guidance on mechanical systems',
    description:
      '5+ years of production engineering experience, available when you need it. Expert consultation on pump design, rotating equipment, and manufacturing optimization.',
    features: [
      'Pump design review (API 610/682)',
      'Rotating equipment troubleshooting',
      'FEA/CFD analysis guidance',
      'Design for Manufacturing (DFMA)',
      'Standards compliance review',
      'Technical documentation',
    ],
    deliverables: [
      'Detailed technical report',
      'Recommendations with calculations',
      'CAD review comments',
      'Standards compliance checklist',
    ],
    pricing: 'Starting at $150/hour',
    gradient: 'from-secondary-500 to-secondary-600',
    popular: false,
  },
  {
    id: 'fullstack',
    icon: Code2,
    title: 'Full-Stack Development',
    subtitle: 'Modern web applications end-to-end',
    description:
      'Complete web application development from concept to deployment. Specializing in React, Next.js, and cloud-native architectures.',
    features: [
      'Next.js/React applications',
      'API design and development',
      'Database architecture',
      'Cloud deployment (AWS, Vercel, Cloudflare)',
      'Performance optimization',
      'CI/CD pipeline setup',
    ],
    deliverables: [
      'Production-ready application',
      'Full source code ownership',
      'Deployment documentation',
      'Training for your team',
    ],
    pricing: 'Starting at $8,000',
    gradient: 'from-primary-500 to-primary-600',
    popular: false,
  },
  {
    id: 'cad-design',
    icon: PenTool,
    title: 'CAD/Design Services',
    subtitle: '3D modeling and technical drawings',
    description:
      'Professional 3D modeling and technical documentation services. From concept sketches to manufacturing-ready drawings.',
    features: [
      'SolidWorks 3D modeling',
      'Technical drawings with GD&T',
      'Assembly modeling',
      'BOM generation',
      'Design optimization',
      'Rendering and visualization',
    ],
    deliverables: [
      'Native CAD files',
      'Technical drawings (PDF/DWG)',
      'Bill of Materials',
      '3D renders if requested',
    ],
    pricing: 'Starting at $75/hour',
    gradient: 'from-success to-accent-500',
    popular: false,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We discuss your project, goals, and requirements to understand the full scope.',
  },
  {
    number: '02',
    title: 'Proposal',
    description: 'I provide a detailed proposal with timeline, deliverables, and pricing.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Regular updates and checkpoints ensure the project stays on track.',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Final delivery with documentation, training, and ongoing support options.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid bg-grid-50 opacity-20" />
        <div className="absolute top-20 -left-32 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="accent" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              Services
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              How I Can Help
            </h1>
            <p className="text-xl text-steel-400 max-w-2xl mx-auto mb-8">
              From AI development to mechanical engineering consultation,
              I offer services that bridge the gap between physical and digital innovation.
            </p>
            <Link href="/contact">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Start a Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  hover
                  glow="cyan"
                  padding="lg"
                  className={`h-full ${service.popular ? 'ring-2 ring-accent-500/50' : ''}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-6">
                      <Badge variant="accent">Most Popular</Badge>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-steel-400">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-steel-300 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3">
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-steel-300 text-sm">
                          <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3">
                      Deliverables
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((item) => (
                        <Badge key={item} variant="default" size="sm">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-steel-700/30">
                    <div>
                      <p className="text-sm text-steel-500">Starting at</p>
                      <p className="text-2xl font-bold text-white">{service.pricing.replace('Starting at ', '')}</p>
                    </div>
                    <Link href={`/contact?service=${service.id}`}>
                      <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-primary-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-steel-400 max-w-2xl mx-auto">
              A straightforward process designed to deliver results efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent-500/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-400">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-steel-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-accent-500 to-primary-600 rounded-3xl p-12 md:p-16 overflow-hidden text-center"
          >
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />
            </div>

            <div className="relative">
              <MessageSquare className="w-16 h-16 mx-auto mb-6 text-white/80" />
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Ready to Start?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Let's discuss your project and find the right solution for your needs.
                Free initial consultation to understand your requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="bg-white text-primary-600 hover:bg-white/90"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    Schedule a Call
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
