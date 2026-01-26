'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px] md:auto-rows-[180px]',
        className
      )}
    >
      {children}
    </div>
  );
}

type SpanSize = '1x1' | '2x1' | '1x2' | '2x2';

interface BentoCardProps {
  span?: SpanSize;
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  glow?: boolean;
  delay?: number;
}

const spanClasses: Record<SpanSize, string> = {
  '1x1': 'col-span-1 row-span-1',
  '2x1': 'col-span-2 row-span-1',
  '1x2': 'col-span-1 row-span-2',
  '2x2': 'col-span-2 row-span-2',
};

export function BentoCard({
  span = '1x1',
  children,
  className,
  gradient = false,
  glow = false,
  delay = 0,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        spanClasses[span],
        'relative rounded-3xl overflow-hidden',
        'bg-gradient-to-br from-steel-800/50 to-steel-900/80',
        'backdrop-blur-xl border border-white/10',
        'p-6 transition-all duration-300',
        'hover:border-white/20 hover:shadow-lg',
        gradient && 'gradient-border',
        glow && 'hover:shadow-glow-cyan',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
