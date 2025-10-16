import { BrainCircuit, Code, Library, AppWindow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

const iconMap = {
  "Programming": <Code className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />,
  "Libraries & Tools": <Library className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />,
  "Data Science & ML": <BrainCircuit className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />,
  "Other Tools": <AppWindow className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />,
};

export function Skills() {
  return (
    <section id="skills" className="container mx-auto py-16 px-4 md:px-8 bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl font-bold">Skills & Abilities</h2>
        <p className="text-muted-foreground mt-2">A summary of my technical capabilities.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category} className="group shadow-md transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 bg-card/50 border border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-4 text-xl">
                {iconMap[skillCategory.category as keyof typeof iconMap]}
                {skillCategory.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="transition-all hover:bg-primary hover:text-primary-foreground text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
