'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function TextReveal({
  text,
  className,
  delay = 0,
  as: Component = 'h1',
}: TextRevealProps) {
  const words = text.split(' ');

  return (
    <Component className={cn('flex flex-wrap', className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.08,
              ease: [0.33, 1, 0.68, 1],
            }}
            viewport={{ once: true }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}

interface TextRevealByCharProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextRevealByChar({ text, className, delay = 0 }: TextRevealByCharProps) {
  const chars = text.split('');

  return (
    <span className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: delay + i * 0.02,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}
