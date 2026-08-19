"use client";

import { projects } from "@/lib/data";

const FEATURED = [
  {
    id: "dev-4",
    metric: "🥈",
    metricLabel: "DemoDay 2025",
    role: "Full-stack · Hackathon",
  },
  {
    id: "dev-life-lens",
    metric: "Live",
    metricLabel: "Assistive AI concept",
    role: "Next.js · Product narrative",
  },
  {
    id: "dev-1",
    metric: "Live",
    metricLabel: "Shop + admin panel",
    role: "Full-stack · E-commerce",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="relative z-10 border-t border-white/10 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold md:text-5xl">Case Studies</h2>
        <div className="mt-12 space-y-6">
          {FEATURED.map((f) => {
            const p = projects.find((x) => x.id === f.id);
            if (!p) return null;
            return (
              <a
                key={f.id}
                href={p.siteUrl || p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[var(--purple)]/40 md:grid-cols-[1.2fr_0.8fr]"
              >
                <div>
                  <p className="text-xs text-white/40">{f.role}</p>
                  <h3 className="mt-2 text-2xl font-semibold group-hover:text-[var(--cream)]">{p.title}</h3>
                  <p className="mt-3 max-w-lg text-sm text-white/55">{p.hook}</p>
                </div>
                <div className="flex items-center justify-between gap-4 md:justify-end">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.thumbnail} alt="" className="h-28 w-40 rounded-2xl object-cover" />
                  <div className="text-right">
                    <p className="text-3xl font-bold text-[var(--teal)]">{f.metric}</p>
                    <p className="text-xs text-white/40">{f.metricLabel}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
