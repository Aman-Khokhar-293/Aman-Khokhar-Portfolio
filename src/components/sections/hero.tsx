"use client";

import { useState, useEffect } from 'react';
import { Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import Confetti from 'react-confetti';
import { useTheme } from 'next-themes';

export function Hero() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // This check ensures window is defined, preventing SSR errors.
    if (typeof window !== 'undefined') {
        setShowConfetti(true);
        setDimensions({ width: window.innerWidth, height: window.innerHeight });

        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 8000); // Confetti will last for 8 seconds

        // Handle window resize
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }
  }, []);

  const confettiColors = resolvedTheme === 'dark' 
    ? ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899', '#f97316'] 
    : ['#38bdf8', '#60a5fa', '#a78bfa', '#f472b6', '#fb923c'];

  return (
    <section id="home" className="container relative mx-auto py-24 sm:py-32 px-4 md:px-8">
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          numberOfPieces={200}
          recycle={false}
          gravity={0.1}
          colors={confettiColors}
          className="!fixed top-0 left-0 z-[100]"
        />
      )}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-primary animate-in fade-in slide-in-from-top-8 duration-1000 ease-in-out">
          {personalInfo.name}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-medium">
          {personalInfo.title}
        </p>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-primary">{personalInfo.contact.email}</a>
            </div>
            <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{personalInfo.location}</span>
            </div>
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {personalInfo.objective}
        </p>

        <div className="mt-10">
            <Button size="lg" asChild>
                <a href="/Aman_Khokhar_Resume.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
