import { Github, Linkedin } from 'lucide-react';
import { personalInfo } from "@/lib/data";
import { Button } from '../ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-6 mt-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Aman Khokhar. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
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
        </div>
      </div>
    </footer>
  );
}
