import { getResumeScreeningToolDescription } from "@/ai/flows/resume-screening-tool-description";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cpu } from "lucide-react";
import { projects } from "@/lib/data";

export async function AiProjectHighlight() {
  let description = "Loading description...";
  try {
    const aiDescription = await getResumeScreeningToolDescription({
      projectName: "AI-Powered Resume Screening & Job Match System",
    });
    description = aiDescription.description;
  } catch (error) {
    // The AI-generated description failed. Fallback to the hardcoded description.
    description = "An advanced system designed to streamline the recruitment process by automatically parsing resumes, matching candidates to job descriptions, and analyzing skill gaps using Natural Language Processing and machine learning algorithms.";
  }

  const aiProject = projects.find(p => p.title.includes("AI-Powered Resume Screening"));

  return (
    <section id="ai-project" className="container mx-auto py-16 px-4 md:px-8">
      <Card className="bg-secondary/50 border-primary/30 shadow-lg transition-all hover:shadow-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50 dark:opacity-100"></div>
        <div 
          className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] animate-spin-slow"
          style={{
            background: 'conic-gradient(from 90deg at 50% 50%, hsl(var(--primary)) 0%, hsl(var(--primary)) 50%, transparent 100%)',
            opacity: 0.15,
          }}
        ></div>
        <div className="relative">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit border border-primary/30">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="font-headline text-3xl text-primary">AI Project Spotlight</CardTitle>
                <CardDescription className="pt-2 text-lg font-semibold text-foreground">{aiProject?.title}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-base leading-relaxed">
              {description}
            </p>
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {aiProject?.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/30 transition-all hover:shadow-[0_0_15px_hsl(var(--primary))] hover:shadow-primary/50 hover:-translatey-1">{tech}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}
