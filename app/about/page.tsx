'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Target,
  Users,
  TrendingUp,
  Award,
  GraduationCap,
  Star,
  Trophy,
  Heart,
  Zap,
  Shield,
  Sparkles,
  ArrowRight,
  Cog,
  Settings,
  Factory,
  Code,
} from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: '2020',
      title: 'Machine Design Engineer',
      description: 'Designed complete centrifugal pump system at Louisiana Tech',
    },
    {
      year: '2021',
      title: 'Joined Pfizer',
      description: 'Contributed to 759M vaccine doses production',
    },
    {
      year: '2022',
      title: 'Process Excellence',
      description: 'Enhanced efficiency to #1 PatientView ranking',
    },
    {
      year: '2023',
      title: 'Automation Leadership',
      description: 'Led automation initiatives at John Deere Turf Care',
    },
    {
      year: '2023',
      title: 'Lead Design Engineer',
      description: 'Sole engineer for high-efficiency pump systems',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Excellence',
      description: 'Engineering excellence in every project',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Continuous innovation and optimization',
    },
    {
      icon: Star,
      title: 'Precision',
      description: 'Precision in design and execution',
    },
    {
      icon: Heart,
      title: 'Collaboration',
      description: 'Cross-functional team collaboration',
    },
    {
      icon: Users,
      title: 'Impact',
      description: 'Creating measurable positive impact',
    },
  ];

  const expertise = [
    { icon: Settings, label: 'Mechanical Design', gradient: 'from-brand-cyan to-brand-cyan-dark' },
    { icon: Zap, label: 'Automation & Controls', gradient: 'from-brand-blue-electric to-brand-cyan' },
    { icon: Factory, label: 'Process Optimization', gradient: 'from-success to-brand-cyan' },
    { icon: Code, label: 'AI/ML & Programming', gradient: 'from-warning to-brand-blue-electric' },
    { icon: Trophy, label: 'Project Leadership', gradient: 'from-error to-brand-cyan' },
  ];

  const credentials = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.S. Mechanical Engineering from Louisiana Tech University with strong foundation in design, analysis, and systems thinking',
    },
    {
      icon: Star,
      title: 'Experience',
      description: 'Multi-disciplinary engineering across pump manufacturing, automation, pharmaceuticals, and agricultural equipment',
    },
    {
      icon: Trophy,
      title: 'Certifications',
      description: 'SolidWorks Professional, Lean Six Sigma, PLC Programming, Machine Learning, ISO Standards expertise',
    },
  ];

  return (
    <div className="min-h-screen bg-neural-dark">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-br from-neural-dark via-neural-slate to-neural-dark pt-32 pb-20"
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #00B8E6 1px, transparent 1px),
                              linear-gradient(to bottom, #00B8E6 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="absolute top-20 -left-40 w-80 h-80 bg-brand-cyan opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-blue-electric opacity-20 rounded-full blur-3xl animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span className="text-sm font-medium text-brand-cyan">
                Multi-Disciplinary Engineering Leader & Lifetime Learner
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About Connor McNeely
            </h1>
            <p className="text-xl md:text-2xl text-circuit-silver max-w-3xl mx-auto">
              Mechanical engineer passionate about design, automation, and leveraging AI/ML to solve complex engineering challenges
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-20">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          <div className="lg:col-span-2">
            <div className="bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-8 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-4">My Story</h2>
              <p className="text-circuit-silver leading-relaxed mb-4">
                I'm a multi-disciplinary mechanical engineer with expertise spanning mechanical design, automation, process optimization, and AI/ML integration. My career has been driven by a passion for solving complex engineering problems and delivering measurable impact across diverse industries—from pharmaceutical manufacturing to precision pump design.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-3">Engineering Philosophy</h3>
              <p className="text-circuit-silver leading-relaxed mb-4">
                Great engineering is about more than technical proficiency—it's about understanding systems holistically, optimizing for manufacturability, and creating solutions that deliver real-world value. I believe in combining rigorous analysis with practical innovation, always keeping the end goal in sight: designs that work efficiently, reliably, and cost-effectively.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-3">Approach</h3>
              <p className="text-circuit-silver leading-relaxed">
                My approach integrates mechanical design expertise with automation, data-driven decision making, and continuous improvement methodologies. From SolidWorks and FEA/CFD analysis to PLC programming and machine learning, I leverage the full spectrum of modern engineering tools to deliver innovative solutions. Whether leading full-cycle pump design or optimizing production processes, I focus on quantifiable results and cross-functional collaboration.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-4">Core Values</h4>
              <ul className="space-y-2">
                {values.map((value, index) => (
                  <motion.li
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 text-circuit-silver"
                  >
                    <value.icon className="w-5 h-5 text-brand-cyan" />
                    {value.description}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-4">Expertise Areas</h4>
              <div className="space-y-3">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${item.gradient}`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-circuit-silver text-sm">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-cyan via-brand-blue-electric to-brand-cyan opacity-30" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300 inline-block">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-circuit-silver text-sm">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue-electric flex items-center justify-center shadow-glow-cyan">
                    <span className="text-white font-bold text-sm">{item.year}</span>
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Qualifications & Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-8 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300 text-center"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan/0 to-brand-cyan/0 group-hover:from-brand-cyan/10 group-hover:to-transparent transition-all duration-300" />

                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue-electric flex items-center justify-center shadow-glow-cyan">
                    <credential.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{credential.title}</h3>
                  <p className="text-circuit-silver leading-relaxed">{credential.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative bg-gradient-to-br from-brand-cyan to-brand-blue-electric rounded-2xl p-12 overflow-hidden text-center"
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
            <h2 className="text-4xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
            <p className="text-white/80 text-xl mb-8">
              Ready to bring engineering excellence to your team
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white text-brand-cyan font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
