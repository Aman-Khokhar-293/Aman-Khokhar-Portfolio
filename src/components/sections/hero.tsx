
"use client";

import { personalInfo } from "@/lib/data";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="h-[calc(100vh-56px)] w-full relative flex flex-col items-center justify-center bg-background text-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="relative z-10 flex flex-col items-center">
          <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tight text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            {personalInfo.name}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-semibold">
            {personalInfo.title}
          </p>
          <p className="mt-8 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-foreground/80">
              {personalInfo.objective}
          </p>
          <div className="mt-10">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
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
