
"use client";

import { useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { achievements } from "@/lib/data";

export function Achievements() {
  const [showAll, setShowAll] = useState(false);

  const initialAchievements = [
    achievements.find(a => a.title.includes("Python 101 for Data Science")),
    achievements.find(a => a.title.includes("Professional Machine Learning Engineer")),
    achievements.find(a => a.title.includes("Business Analytics with Excel")),
  ].filter(Boolean) as typeof achievements;

  const remainingAchievements = achievements.filter(
    (cert) => !initialAchievements.some(initCert => initCert.title === cert.title)
  );
  
  const displayedAchievements = showAll
    ? achievements
    : initialAchievements;

  const renderCertificate = (cert: typeof achievements[0]) => (
    <Card className="transition-all hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 bg-card/50 border border-border/40 w-full flex flex-col">
      <CardContent className="p-4 flex-grow">
        <div className="flex items-start gap-4">
            <Award className="h-8 w-8 text-primary shrink-0 mt-1" />
            <div className="flex-1">
              <p className="font-semibold">{cert.title}</p>
              <p className="text-sm text-muted-foreground">
                {cert.issuer} {cert.platform && `(${cert.platform})`}
              </p>
              <Badge variant="outline" className="mt-2 border-primary/50 text-primary">{cert.date}</Badge>
            </div>
        </div>
      </CardContent>
      {cert.link && (
          <div className="px-4 pb-4 pt-0">
             <Button variant="secondary" size="sm" asChild className="w-full border border-border hover:bg-primary/10 hover:text-primary" disabled={cert.link === '#'}>
                <a href={cert.link} download={cert.link.split('/').pop()}>
                    <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
                </a>
            </Button>
          </div>
      )}
    </Card>
  );

  return (
    <section id="achievements" className="container mx-auto py-16 px-4 md:px-8 bg-muted/30">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold">Achievements & Certificates</h2>
            <p className="text-muted-foreground mt-2">My professional certifications and recognitions.</p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayedAchievements.map((cert, index) =>
                  <div key={index} className="flex">
                    {renderCertificate(cert)}
                  </div>
                )}
            </div>
            {achievements.length > 3 && (
                <div className="text-center mt-12">
                    <Button onClick={() => setShowAll(!showAll)} variant="outline" className="transition-all hover:shadow-md hover:shadow-primary/40 hover:ring-2 hover:ring-primary/20">
                        {showAll ? "View Less" : "View More"}
                    </Button>
                </div>
            )}
        </div>
    </section>
  );
}
