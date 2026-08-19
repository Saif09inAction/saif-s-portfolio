import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/binil/AboutMe";
import { CaseStudies } from "@/components/binil/CaseStudies";
import { ContactMe } from "@/components/binil/ContactMe";
import { ProjectBoard } from "@/components/binil/ProjectBoard";
import { SkillBands } from "@/components/binil/SkillBands";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <AboutMe />
      <SkillBands />
      <CaseStudies />
      <ProjectBoard />
      <ContactMe />
    </main>
  );
}
