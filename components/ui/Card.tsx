'use client';

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient';
  hover?: boolean;
  glow?: 'none' | 'cyan' | 'blue' | 'amber';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const variantStyles = {
  default: 'bg-primary-800/60 backdrop-blur-xl border border-steel-700/30',
  elevated: 'bg-primary-800/80 backdrop-blur-xl shadow-card',
  outlined: 'bg-transparent border-2 border-steel-700/50',
  gradient: 'bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur-xl border border-steel-700/30',
};

const glowStyles = {
  none: '',
  cyan: 'hover:border-accent-500/50 hover:shadow-glow-cyan',
  blue: 'hover:border-primary-500/50 hover:shadow-glow-blue',
  amber: 'hover:border-secondary-500/50 hover:shadow-glow-amber',
};

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      hover = true,
      glow = 'cyan',
      padding = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -8 } : undefined}
        transition={{ duration: 0.3 }}
        className={`
          relative rounded-2xl overflow-hidden
          transition-all duration-300
          ${variantStyles[variant]}
          ${glowStyles[glow]}
          ${paddingStyles[padding]}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

// Card Header component
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div ref={ref} className={`mb-4 ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

// Card Content component
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

// Card Footer component
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div ref={ref} className={`mt-4 pt-4 border-t border-steel-700/30 ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export default Card;
