'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  labelClassName?: string;
}

export function StatCounter({
  value,
  label,
  prefix = '',
  suffix = '',
  duration = 2000,
  className,
  labelClassName,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn('text-center', className)}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className={cn('text-steel-400 text-sm mt-2', labelClassName)}>{label}</div>
    </motion.div>
  );
}

interface StatGridProps {
  stats: Array<{
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
  }>;
  className?: string;
}

export function StatGrid({ stats, className }: StatGridProps) {
  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-8', className)}>
      {stats.map((stat, i) => (
        <StatCounter
          key={stat.label}
          {...stat}
        />
      ))}
    </div>
  );
}
