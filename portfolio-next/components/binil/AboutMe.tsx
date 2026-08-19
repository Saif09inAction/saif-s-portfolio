"use client";

import { about } from "@/lib/data";

const CARDS = [
  {
    title: "Full-stack development",
    body: "React, Next.js, Node, MongoDB — from API to UI, shipped and deployed.",
  },
  {
    title: "Hackathons & product",
    body: "Discovery under time pressure. DemoDay 🥈, Mumbai Hacks, LifeLens.",
  },
  {
    title: "UI systems",
    body: "Interfaces that feel considered — motion, hierarchy, and real usability.",
  },
  {
    title: "E-commerce",
    body: "PrismHold — full e-commerce website with shopping for users and a complete admin panel.",
  },
];

export function AboutMe() {
  return (
    <section id="about" className="relative z-10 border-t border-white/10 px-4 py-16 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-white/40">About Me</p>
        <h2 className="mt-3 text-[2.15rem] font-bold tracking-tight md:text-6xl">WHAT I DO</h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:mt-6 md:text-base">{about.paragraphs[0]}</p>
        <p className="mt-3 text-sm leading-relaxed text-white/40">
          {about.education.title} · {about.education.place}
        </p>
        <div className="mt-10 grid gap-3 md:mt-12 md:gap-4 sm:grid-cols-2">
          {CARDS.map((c) => (
            <article key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:rounded-3xl md:p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
