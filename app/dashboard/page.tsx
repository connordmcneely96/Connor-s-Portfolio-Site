'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import GitHubActivitySection from '../components/GitHubActivitySection';
import {
  Brain,
  Database,
  Eye,
  MessageSquare,
  Activity,
  TrendingUp,
  Zap,
  Users,
  ArrowUpRight,
  Sparkles,
  Box,
  Grid3x3,
  RotateCw,
  ZoomIn,
  FileText,
  Download,
  Github,
  Code2,
  Rocket,
  Award
} from 'lucide-react';

export default function Dashboard() {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [viewerInitialized, setViewerInitialized] = useState(false);
  const sceneRef = useRef<any>(null);
  const animationFrameRef = useRef<number | null>(null);
  const modelAnimationFrameRef = useRef<number | null>(null);

  // Three.js initialization
  const initThreeJS = useCallback(() => {
    if (typeof window === 'undefined' || !(window as any).THREE || !viewerRef.current) return;

    const THREE = (window as any).THREE;
    const container = viewerRef.current;

    if (container.querySelector('canvas')) return;

    try {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x1E2538);

      const width = container.clientWidth || 800;
      const height = 500;
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0x00B8E6, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const gridHelper = new THREE.GridHelper(10, 10, 0x00B8E6, 0x2D3548);
      scene.add(gridHelper);

      const axesHelper = new THREE.AxesHelper(5);
      scene.add(axesHelper);

      const animate = () => {
        animationFrameRef.current = requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();

      sceneRef.current = { scene, camera, renderer };
    } catch (error) {
      console.error('Error initializing Three.js:', error);
    }
  }, []);

  useEffect(() => {
    if (threeLoaded && !viewerInitialized) {
      initThreeJS();
      setViewerInitialized(true);
    }
  }, [threeLoaded, viewerInitialized, initThreeJS]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (modelAnimationFrameRef.current) {
        cancelAnimationFrame(modelAnimationFrameRef.current);
      }
      if (sceneRef.current) {
        const { scene, renderer } = sceneRef.current;
        if (renderer) renderer.dispose();
        if (scene) {
          scene.traverse((object: any) => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach((material: any) => material.dispose());
              } else {
                object.material.dispose();
              }
            }
          });
        }
      }
    };
  }, []);

  const loadSampleModel = () => {
    if (!(window as any).THREE || !sceneRef.current) return;

    try {
      const THREE = (window as any).THREE;
      const { scene, renderer, camera } = sceneRef.current;

      if (modelAnimationFrameRef.current) {
        cancelAnimationFrame(modelAnimationFrameRef.current);
      }

      const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
      const material = new THREE.MeshStandardMaterial({
        color: 0x00B8E6,
        metalness: 0.7,
        roughness: 0.3,
      });
      const model = new THREE.Mesh(geometry, material);
      scene.add(model);

      const animate = () => {
        modelAnimationFrameRef.current = requestAnimationFrame(animate);
        model.rotation.x += 0.005;
        model.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    } catch (error) {
      console.error('Error loading model:', error);
    }
  };

  const metrics = [
    {
      label: 'GitHub Projects',
      value: '7',
      change: 'Production-ready apps',
      icon: Github,
      sparkline: [3, 4, 4, 5, 6, 7, 7],
    },
    {
      label: 'Tech Stack',
      value: '20+',
      change: 'Technologies mastered',
      icon: Code2,
      sparkline: [10, 12, 14, 16, 18, 19, 20],
    },
    {
      label: 'AI/ML Projects',
      value: '4',
      change: 'RAG & ML systems',
      icon: Brain,
      sparkline: [1, 2, 2, 3, 3, 4, 4],
    },
    {
      label: 'Live Deployments',
      value: '7',
      change: 'Vercel production',
      icon: Rocket,
      sparkline: [3, 4, 5, 5, 6, 7, 7],
    },
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript, Tailwind CSS',
      icon: Code2,
      level: 90,
      gradient: 'from-brand-cyan to-brand-cyan-dark',
    },
    {
      title: 'Backend & APIs',
      description: 'Node.js, FastAPI, Python, REST/GraphQL',
      icon: Database,
      level: 85,
      gradient: 'from-brand-blue-electric to-brand-cyan',
    },
    {
      title: 'AI/ML Engineering',
      description: 'PyTorch, LangChain, RAG, Vector DBs',
      icon: Brain,
      level: 80,
      gradient: 'from-success to-brand-cyan',
    },
    {
      title: 'CAD & Engineering',
      description: 'SolidWorks, FEA/CFD, PLC, Automation',
      icon: Activity,
      level: 95,
      gradient: 'from-warning to-brand-blue-electric',
    },
  ];

  return (
    <div className="min-h-screen bg-neural-dark">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        onLoad={() => setThreeLoaded(true)}
        strategy="afterInteractive"
      />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-br from-neural-dark via-neural-slate to-neural-dark pt-20 pb-16"
      >
        {/* Animated Background Grid */}
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

        {/* Glowing Orbs */}
        <div className="absolute top-10 -left-40 w-80 h-80 bg-brand-cyan opacity-20 rounded-full blur-3xl animate-pulse" />
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
                Integrated AI/ML + CAD Engineering Platform
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Professional Dashboard
            </h1>
            <p className="text-xl md:text-2xl text-circuit-silver max-w-3xl mx-auto mb-8">
              Technical skills, project metrics, and professional resources
            </p>

            {/* Resume Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/resumes/connor-mcneely-engineering-resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue-electric text-white font-semibold shadow-glow-cyan hover:shadow-glow-cyan-lg transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                <span>ME/Automation Resume</span>
                <Download className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/resumes/connor-mcneely-developer-resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand-cyan/30 text-brand-cyan font-semibold hover:bg-brand-cyan/10 hover:border-brand-cyan transition-all duration-300"
              >
                <Code2 className="w-5 h-5" />
                <span>Developer/AI Resume</span>
                <Download className="w-4 h-4" />
              </motion.a>
            </div>

            <p className="text-sm text-circuit-silver/70 mt-4">
              Resumes will be available soon
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-20">
        <GitHubActivitySection />

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan/0 to-brand-cyan/0 group-hover:from-brand-cyan/10 group-hover:to-transparent transition-all duration-300" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-circuit-silver text-sm font-medium mb-1">
                      {metric.label}
                    </p>
                    <h3 className="text-4xl font-bold text-white">{metric.value}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 flex items-center justify-center group-hover:bg-brand-cyan/30 transition-colors">
                    <metric.icon className="w-6 h-6 text-brand-cyan" />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-success text-sm font-semibold flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {metric.change}
                  </span>
                </div>

                {/* Mini Sparkline */}
                <div className="mt-4 flex items-end gap-1 h-8">
                  {metric.sparkline.map((value, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-brand-cyan/30 rounded-t group-hover:bg-brand-cyan/50 transition-colors"
                      style={{
                        height: `${(value / Math.max(...metric.sparkline)) * 100}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Skill Proficiency</h2>
              <p className="text-circuit-silver">
                Technical expertise across engineering and software development
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skillCategories.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
                className="group relative bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${skill.gradient} shadow-glow-cyan`}
                    >
                      <skill.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-white">{skill.level}%</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-circuit-silver text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full bg-neural-gray/50 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-2.5 rounded-full bg-gradient-to-r ${skill.gradient}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CAD Engineering Workspace */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                CAD Engineering Workspace
              </h2>
              <p className="text-circuit-silver">
                Interactive 3D modeling and parametric design tools
              </p>
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-xl bg-success/20 text-success border border-success/30 font-semibold hover:bg-success/30 transition-all"
              >
                + New Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-xl border border-circuit-silver/30 text-circuit-silver font-semibold hover:bg-circuit-silver/10 transition-all"
              >
                Import
              </motion.button>
            </div>
          </div>

          <div className="bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl overflow-hidden">
            {/* Viewer Toolbar */}
            <div className="bg-neural-gray/50 p-4 flex gap-4 border-b border-circuit-silver/20">
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-lg hover:bg-brand-cyan/20 transition text-brand-cyan flex items-center justify-center">
                  <RotateCw className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-lg hover:bg-brand-cyan/20 transition text-brand-cyan flex items-center justify-center">
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-lg hover:bg-brand-cyan/20 transition text-brand-cyan flex items-center justify-center">
                  <Grid3x3 className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1" />
              <div className="flex items-center gap-2 text-sm text-circuit-silver">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span>Viewer Ready</span>
              </div>
            </div>

            {/* 3D Viewer */}
            <div className="w-full h-[500px] bg-gradient-to-br from-neural-slate to-neural-gray relative">
              <div ref={viewerRef} className="w-full h-full absolute top-0 left-0" />

              {!viewerInitialized && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="text-center p-4">
                    <Box className="w-16 h-16 mx-auto mb-4 text-brand-cyan animate-float" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      3D CAD Viewer
                    </h3>
                    <p className="text-circuit-silver mb-4">
                      Load a model to begin
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={loadSampleModel}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue-electric text-white font-semibold shadow-glow-cyan-lg"
                    >
                      Load Sample Model
                    </motion.button>
                  </div>
                </div>
              )}
            </div>

            {/* Viewer Info */}
            <div className="bg-neural-gray/50 p-3 flex justify-between text-sm border-t border-circuit-silver/20">
              <span className="text-circuit-silver">
                Status: {viewerInitialized ? 'Ready' : 'Initializing...'}
              </span>
              <span className="text-circuit-silver">
                {viewerInitialized ? 'Three.js Loaded' : 'Loading renderer...'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Recent Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Inner Animals AI',
                description: 'Enterprise AI dashboard with RAG & ML training',
                status: 'active',
                link: '/dashboard',
                gradient: 'from-brand-cyan to-brand-cyan-dark',
              },
              {
                title: 'RAG Q&A System',
                description: 'Engineering documentation assistant',
                status: 'deployed',
                link: 'https://rag-q-a-for-mechanical-engineers.vercel.app/',
                gradient: 'from-brand-blue-electric to-brand-cyan',
              },
              {
                title: 'CAD Automation',
                description: 'AI-powered design optimization',
                status: 'deployed',
                link: 'https://cad-autonomous-engine-backend.vercel.app/',
                gradient: 'from-success to-brand-cyan',
              },
              {
                title: 'AI Fitness Coach',
                description: 'Personalized training & nutrition',
                status: 'deployed',
                link: 'https://ai-powered-health-fitness-coach.vercel.app/',
                gradient: 'from-warning to-brand-blue-electric',
              },
              {
                title: 'Animal Rescue Platform',
                description: 'Full-stack adoption management',
                status: 'deployed',
                link: 'https://southern-pets-animal-rescue-client.vercel.app/',
                gradient: 'from-brand-cyan-dark to-brand-cyan',
              },
              {
                title: 'iAutodidact',
                description: 'Rust-powered learning platform',
                status: 'deployed',
                link: 'https://i-autodidact-rust.vercel.app/',
                gradient: 'from-error to-brand-cyan',
              },
            ].map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300 cursor-pointer"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-300`} />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                      project.status === 'active' 
                        ? 'bg-success/20 text-success border border-success/30'
                        : 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30'
                    }`}>
                      {project.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-circuit-silver text-sm mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-brand-cyan font-semibold text-sm">
                    <span>Open Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Platform Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="relative bg-gradient-to-br from-brand-cyan to-brand-blue-electric rounded-2xl p-12 overflow-hidden"
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
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-white" />
              <h2 className="text-3xl font-bold text-white">Engineering Impact</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-white mb-2">759M</div>
                <div className="text-white/80 font-medium">Vaccine Doses</div>
                <p className="text-white/60 text-sm mt-1">Contributed at Pfizer</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-2">75%</div>
                <div className="text-white/80 font-medium">Downtime Reduced</div>
                <p className="text-white/60 text-sm mt-1">Through automation</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-2">20%</div>
                <div className="text-white/80 font-medium">Efficiency Gains</div>
                <p className="text-white/60 text-sm mt-1">Design optimization</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
