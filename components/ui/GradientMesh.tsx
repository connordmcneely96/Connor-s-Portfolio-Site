'use client';

import { cn } from '@/lib/utils';

interface GradientMeshProps {
  className?: string;
  variant?: 'default' | 'subtle' | 'vibrant';
}

export function GradientMesh({ className, variant = 'default' }: GradientMeshProps) {
  const opacityMap = {
    default: { primary: 30, secondary: 20, tertiary: 15 },
    subtle: { primary: 15, secondary: 10, tertiary: 8 },
    vibrant: { primary: 40, secondary: 30, tertiary: 25 },
  };

  const opacity = opacityMap[variant];

  return (
    <div className={cn('fixed inset-0 -z-10 overflow-hidden', className)}>
      {/* Primary gradient orb - top left */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse-slow"
        style={{ backgroundColor: `rgba(37, 99, 235, ${opacity.primary / 100})` }}
      />

      {/* Secondary gradient orb - bottom right */}
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] animate-drift"
        style={{ backgroundColor: `rgba(6, 182, 212, ${opacity.secondary / 100})` }}
      />

      {/* Tertiary gradient orb - center right */}
      <div
        className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full blur-[80px] animate-drift-reverse"
        style={{ backgroundColor: `rgba(245, 158, 11, ${opacity.tertiary / 100})` }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-blueprint-grid bg-grid-50 opacity-[0.03]" />
    </div>
  );
}

interface FloatingOrbProps {
  color: string;
  size?: 'sm' | 'md' | 'lg';
  position: { top?: string; left?: string; right?: string; bottom?: string };
  blur?: number;
  opacity?: number;
  animate?: boolean;
}

export function FloatingOrb({
  color,
  size = 'md',
  position,
  blur = 100,
  opacity = 20,
  animate = true,
}: FloatingOrbProps) {
  const sizeMap = {
    sm: 'w-[200px] h-[200px]',
    md: 'w-[400px] h-[400px]',
    lg: 'w-[600px] h-[600px]',
  };

  return (
    <div
      className={cn(
        'absolute rounded-full pointer-events-none',
        sizeMap[size],
        animate && 'animate-float'
      )}
      style={{
        backgroundColor: color,
        opacity: opacity / 100,
        filter: `blur(${blur}px)`,
        ...position,
      }}
    />
  );
}
