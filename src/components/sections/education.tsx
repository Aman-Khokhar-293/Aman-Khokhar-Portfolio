import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="container mx-auto py-16 px-4 md:px-8">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold">Education</h2>
            <p className="text-muted-foreground mt-2">My academic journey.</p>
        </div>
        <div className="max-w-2xl mx-auto">
            <Card className="shadow-md bg-secondary/30 border border-border/40">
                <CardHeader className="flex flex-row items-center gap-4">
                    <GraduationCap className="h-10 w-10 text-primary" />
                    <div>
                        <CardTitle>{education.degree}</CardTitle>
                        <CardDescription>{education.university}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{education.duration}</p>
                    <p className="font-medium mt-2">CGPA: {education.cgpa}</p>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
