"use client";

import { useLenis } from "lenis/react";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const lenis = useLenis();

  const go = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el && lenis) lenis.scrollTo(el, { offset: -20, duration: 1.05 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[80] px-4 py-4 md:px-6">
      <div className="pointer-events-auto mx-auto flex max-w-[1400px] items-center justify-between gap-3">
        <button type="button" onClick={() => go("#home")} className="pill flex items-center gap-2 px-3 py-2 text-sm">
          <span className="h-2 w-2 rounded-full bg-[#39ff14] shadow-[0_0_10px_#39ff14]" />
          saifsalmani
        </button>
        <nav className="pill flex max-w-[60vw] items-center gap-1 overflow-x-auto px-2 py-1.5 md:max-w-none">
          {navLinks.map((l) => (
            <button
              key={l.href}
              type="button"
              onClick={() => go(l.href)}
              className="rounded-full px-3 py-1.5 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </button>
          ))}
        </nav>
        <button type="button" onClick={() => go("#contact")} className="pill px-4 py-2 text-sm">
          Contact Me
        </button>
      </div>
    </header>
  );
}
