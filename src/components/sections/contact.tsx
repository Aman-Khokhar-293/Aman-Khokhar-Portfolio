

"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { personalInfo } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="container mx-auto py-16 px-4 md:px-8 relative">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl font-bold text-primary">Let's Connect</h2>
        <p className="text-muted-foreground mt-2">Get in touch for collaborations or opportunities.</p>
      </div>

      <div className="max-w-md mx-auto">
        <Card className="shadow-lg bg-card/50 border border-border/40">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <a href={`mailto:${personalInfo.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {personalInfo.contact.email}
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <Github className="h-6 w-6 text-primary" />
                     <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        GitHub Profile
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <Linkedin className="h-6 w-6 text-primary" />
                     <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        LinkedIn Profile
                    </a>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
