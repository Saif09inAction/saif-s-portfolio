"use client";

const GROUPS = [
  {
    n: "01",
    title: "Frontend",
    body: "Interfaces that load fast and feel intentional.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    n: "02",
    title: "Backend",
    body: "APIs, auth, and realtime — production-shaped, not tutorial-shaped.",
    tags: ["Node", "Express", "MongoDB", "JWT", "Socket.IO", "REST"],
  },
  {
    n: "03",
    title: "Ship",
    body: "From hackathon night to a URL judges can click.",
    tags: ["Git", "Firebase", "Vercel", "Netlify", "Vite"],
  },
  {
    n: "04",
    title: "Product",
    body: "Zero-to-one thinking — scope, story, and metrics that matter.",
    tags: ["Hackathons", "Pitch", "E-commerce", "UX"],
  },
];

export function SkillBands() {
  return (
    <section className="relative z-10 border-t border-white/10 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold md:text-5xl">Experience & skills.</h2>
        <div className="mt-12 space-y-10">
          {GROUPS.map((g) => (
            <div key={g.n} className="grid gap-4 border-b border-white/10 pb-10 md:grid-cols-[80px_1fr]">
              <span className="text-sm text-white/35">{g.n}</span>
              <div>
                <h3 className="text-2xl font-semibold">{g.title}</h3>
                <p className="mt-2 max-w-xl text-white/55">{g.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
