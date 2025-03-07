"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`py-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="font-serif text-xl tracking-wide">
          LAURYN HUDSON
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <Link href="/#about" className="uppercase-label text-text-primary hover:text-accent transition-all">
            About
          </Link>
          <Link href="/#experience" className="uppercase-label text-text-primary hover:text-accent transition-all">
            Experience
          </Link>
          <Link href="/#skills" className="uppercase-label text-text-primary hover:text-accent transition-all">
            Skills
          </Link>
          <Link href="/#projects" className="uppercase-label text-text-primary hover:text-accent transition-all">
            Projects
          </Link>
          <Link href="/#education" className="uppercase-label text-text-primary hover:text-accent transition-all">
            Education
          </Link>
          <Link href="/#contact" className="uppercase-label text-text-primary hover:text-accent transition-all">
            Contact
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-6">
          <div className="container-custom flex flex-col space-y-5">
            <Link href="/#about" className="uppercase-label text-text-primary hover:text-accent transition-all" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/#experience" className="uppercase-label text-text-primary hover:text-accent transition-all" onClick={toggleMenu}>
              Experience
            </Link>
            <Link href="/#skills" className="uppercase-label text-text-primary hover:text-accent transition-all" onClick={toggleMenu}>
              Skills
            </Link>
            <Link href="/#projects" className="uppercase-label text-text-primary hover:text-accent transition-all" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="/#education" className="uppercase-label text-text-primary hover:text-accent transition-all" onClick={toggleMenu}>
              Education
            </Link>
            <Link href="/#contact" className="uppercase-label text-text-primary hover:text-accent transition-all" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;