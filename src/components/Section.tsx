"use client";

import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  subtitle?: string;
  centered?: boolean;
}

const Section = ({ id, title, subtitle, children, className = '', centered = false }: SectionProps) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-custom">
        <div className={`mb-16 md:mb-20 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
          <div className="mb-3">
            <span className="uppercase-label text-accent">{id}</span>
          </div>
          <h2 className="heading-lg mb-4">{title}</h2>
          {subtitle && (
            <p className="body-text max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;