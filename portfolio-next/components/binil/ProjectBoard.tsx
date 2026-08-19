"use client";

import { projects } from "@/lib/data";

export function ProjectBoard() {
  const list = projects.filter((p) => p.type === "developer");

  return (
    <section id="projects" className="relative z-10 border-t border-white/10 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[2rem] font-bold md:text-5xl">My Projects</h2>
        <div className="mt-10 grid gap-4 md:mt-12 sm:grid-cols-2">
          {list.map((p) => (
            <a
              key={p.id}
              href={p.siteUrl || p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-[var(--teal)]/40 md:rounded-3xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.thumbnail} alt="" className="aspect-[16/10] w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-white/40">
                  <span>Development</span>
                  <span>{p.date.slice(0, 4)}</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/50">{p.hook}</p>
                <p className="mt-3 text-xs text-white/35">{p.technologies.slice(0, 4).join(" · ")}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
