'use client';

import { motion } from 'framer-motion';
import { Code, Cog, Globe } from 'lucide-react';
import { useAudienceMode } from './AudienceModeProvider';
import { trackAudienceModeChange } from '../utils/analytics';

export default function AudienceModeToggle() {
  const { mode, setMode } = useAudienceMode();

  const handleModeChange = (newMode: 'all' | 'ai-developer' | 'mechanical-engineer') => {
    setMode(newMode);
    trackAudienceModeChange(newMode);
  };

  const modes = [
    { id: 'all' as const, label: 'All', icon: Globe, color: 'brand-cyan' },
    { id: 'ai-developer' as const, label: 'AI/Dev', icon: Code, color: 'success' },
    { id: 'mechanical-engineer' as const, label: 'Mechanical', icon: Cog, color: 'warning' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex items-center justify-center gap-2 mt-8"
    >
      <span className="text-circuit-silver text-sm mr-2">I'm interested in:</span>
      <div className="inline-flex items-center gap-2 p-1 rounded-xl bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20">
        {modes.map((modeOption) => {
          const Icon = modeOption.icon;
          const isActive = mode === modeOption.id;

          return (
            <button
              key={modeOption.id}
              onClick={() => handleModeChange(modeOption.id)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? modeOption.id === 'ai-developer'
                    ? 'bg-success text-white'
                    : modeOption.id === 'mechanical-engineer'
                    ? 'bg-warning text-white'
                    : 'bg-brand-cyan text-white shadow-glow-cyan'
                  : 'text-circuit-silver hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{modeOption.label}</span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
