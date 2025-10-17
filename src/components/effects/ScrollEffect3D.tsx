"use client";

import { useEffect, useState } from 'react';

export function ScrollEffect3D() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScroll(scrolled);
      
      // Apply 3D effect to all sections
      document.querySelectorAll('section').forEach((section) => {
        const rect = section.getBoundingClientRect();
        const centerY = window.innerHeight / 2;
        const sectionCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - sectionCenterY);
        const maxDistance = window.innerHeight;
        const factor = 1 - Math.min(distance / maxDistance, 1);
        
        // Apply subtle 3D rotation based on scroll position
        const rotateX = (centerY - sectionCenterY) * 0.03;
        const translateZ = factor * 50;
        
        section.style.transform = `perspective(1000px) rotateX(${rotateX}deg) translateZ(${translateZ}px)`;
        section.style.opacity = (0.5 + factor * 0.5).toString();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; // This component doesn't render anything
}