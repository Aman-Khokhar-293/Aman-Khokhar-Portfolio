"use client";

import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";

export function Projects() {
    const [showAll, setShowAll] = useState(false);
    // Filter out the AI spotlight project as it has its own section
    const otherProjects = projects.filter(p => !p.title.includes("AI-Powered Resume Screening"));

    const initialProjects = [
        otherProjects.find(p => p.title.includes("House Price Prediction")),
        otherProjects.find(p => p.title.includes("Python Data Science & ML Portfolio")),
        otherProjects.find(p => p.title.includes("Applied Machine Learning Lab Project")),
    ].filter(Boolean) as typeof otherProjects;

    const remainingProjects = otherProjects.filter(p => !initialProjects.includes(p));

    const displayedProjects = showAll ? otherProjects : initialProjects;

  return (
    <section id="projects" className="container mx-auto py-16 px-4 md:px-8">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold">Projects</h2>
            <p className="text-muted-foreground mt-2">A selection of my work and personal projects.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
                <Card key={index} className="flex flex-col shadow-md transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 border border-border/40">
                    <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground mb-4">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        {project.link && (
                             <Button variant="secondary" size="sm" asChild className="border border-border hover:bg-primary/10 hover:text-primary">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                </a>
                            </Button>
                        )}
                            {project.link && (
                                <Button variant="ghost" size="sm" asChild>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                    </a>
                                </Button>
                            )}
                    </CardFooter>
                </Card>
            ))}
        </div>
        {otherProjects.length > 3 && (
          <div className="text-center mt-12">
            <Button onClick={() => setShowAll(!showAll)} variant="outline" className="transition-all hover:shadow-md hover:shadow-primary/40 hover:ring-2 hover:ring-primary/20">
              {showAll ? "View Less" : "View More"}
            </Button>
          </div>
        )}
    </section>
  );
}
