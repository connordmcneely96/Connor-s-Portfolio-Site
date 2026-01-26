'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
  delay?: number;
}

const paddingMap = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const blurMap = {
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur-md',
  lg: 'backdrop-blur-lg',
  xl: 'backdrop-blur-xl',
};

export function GlassCard({
  children,
  className,
  padding = 'md',
  blur = 'xl',
  hover = true,
  glow = false,
  gradient = false,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        'relative rounded-2xl overflow-hidden',
        'bg-white/5',
        blurMap[blur],
        'border border-white/10',
        'shadow-glass',
        paddingMap[padding],
        hover && 'transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20 hover:shadow-glass-hover',
        glow && 'hover:shadow-glow-cyan',
        gradient && 'gradient-border-animated',
        className
      )}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

interface GlassCardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function GlassCardHeader({ children, className }: GlassCardHeaderProps) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

interface GlassCardContentProps {
  children: ReactNode;
  className?: string;
}

export function GlassCardContent({ children, className }: GlassCardContentProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
