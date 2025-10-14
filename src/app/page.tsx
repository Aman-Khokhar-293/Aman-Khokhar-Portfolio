import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { AiProjectHighlight } from "@/components/sections/ai-project-highlight";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ScrollAnimator } from "@/components/scroll-animator";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <ScrollAnimator>
          <Hero />
        </ScrollAnimator>
        <ScrollAnimator>
          <Skills />
        </ScrollAnimator>
        <ScrollAnimator>
          <AiProjectHighlight />
        </ScrollAnimator>
        <ScrollAnimator>
          <Projects />
        </ScrollAnimator>
        <ScrollAnimator>
          <Education />
        </ScrollAnimator>
        <ScrollAnimator>
          <Achievements />
        </ScrollAnimator>
        <ScrollAnimator>
          <Contact />
        </ScrollAnimator>
      </main>
      <Footer />
    </div>
  );
}
