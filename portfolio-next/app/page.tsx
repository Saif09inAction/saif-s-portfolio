import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/binil/AboutMe";
import { ContactMe } from "@/components/binil/ContactMe";
import { Journey } from "@/components/binil/Journey";
import { ProjectBoard } from "@/components/binil/ProjectBoard";
import { SkillBands } from "@/components/binil/SkillBands";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <AboutMe />
      <SkillBands />
      <Journey />
      <ProjectBoard />
      <ContactMe />
    </main>
  );
}
