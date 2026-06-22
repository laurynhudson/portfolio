'use client';

import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** entrance delay in ms */
  delay?: number;
  /** render element tag */
  as?: React.ElementType;
  id?: string;
  'aria-label'?: string;
}

/**
 * Lightweight scroll-triggered entrance wrapper. Content reveals once as it
 * enters the viewport. Respects reduced-motion and degrades gracefully when
 * IntersectionObserver is unavailable.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`fx ${shown ? 'fx-in' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
