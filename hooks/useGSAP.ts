'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook for using GSAP animations with automatic cleanup
 */
export function useGSAP(
  callback: (gsap: typeof import('gsap').default) => gsap.core.Timeline | gsap.core.Tween | undefined,
  dependencies: React.DependencyList = []
) {
  const animationRef = useRef<gsap.core.Timeline | gsap.core.Tween | undefined>(undefined);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const result = callback(gsap);
      animationRef.current = result;
    });

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return animationRef;
}

/**
 * Hook for scroll-triggered animations
 */
export function useScrollTrigger(
  elementRef: React.RefObject<HTMLElement>,
  options: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
    onEnter?: () => void;
    onLeave?: () => void;
    onEnterBack?: () => void;
    onLeaveBack?: () => void;
  } = {}
) {
  useEffect(() => {
    if (!elementRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: elementRef.current,
      start: options.start ?? 'top 80%',
      end: options.end ?? 'bottom 20%',
      scrub: options.scrub,
      markers: options.markers,
      onEnter: options.onEnter,
      onLeave: options.onLeave,
      onEnterBack: options.onEnterBack,
      onLeaveBack: options.onLeaveBack,
    });

    return () => {
      trigger.kill();
    };
  }, [elementRef, options]);
}

/**
 * Hook for fade-in animation on scroll
 */
export function useFadeIn(
  elementRef: React.RefObject<HTMLElement>,
  options: {
    duration?: number;
    delay?: number;
    y?: number;
    start?: string;
  } = {}
) {
  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    gsap.set(element, { opacity: 0, y: options.y ?? 30 });

    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 0.8,
      delay: options.delay ?? 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: options.start ?? 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      animation.kill();
    };
  }, [elementRef, options]);
}

/**
 * Hook for staggered children animations
 */
export function useStaggerChildren(
  containerRef: React.RefObject<HTMLElement>,
  childSelector: string,
  options: {
    duration?: number;
    stagger?: number;
    y?: number;
    start?: string;
  } = {}
) {
  useEffect(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.querySelectorAll(childSelector);

    gsap.set(children, { opacity: 0, y: options.y ?? 20 });

    const animation = gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 0.6,
      stagger: options.stagger ?? 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: options.start ?? 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      animation.kill();
    };
  }, [containerRef, childSelector, options]);
}

export { gsap, ScrollTrigger };
