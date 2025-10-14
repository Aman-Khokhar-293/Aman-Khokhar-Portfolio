"use client";

import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-8">
        <a href="#" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg">Aman Khokhar</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="transition-colors hover:text-primary">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" size="icon" asChild>
                <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </a>
            </Button>
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
