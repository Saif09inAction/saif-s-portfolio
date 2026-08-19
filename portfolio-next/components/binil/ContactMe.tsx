"use client";

import { contact, resumeUrl } from "@/lib/data";

export function ContactMe() {
  return (
    <section id="contact" className="relative z-10 border-t border-white/10 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-white/40">Contact Me</p>
        <h2 className="mt-3 text-4xl font-bold md:text-6xl">
          Let&apos;s build
          <br />
          something real.
        </h2>
        <a href="mailto:saifsalmani224@gmail.com" className="mt-8 inline-block text-xl text-[var(--teal)]">
          saifsalmani224@gmail.com
        </a>
        <div className="mt-10 flex flex-wrap gap-4">
          {contact.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="pill px-5 py-2 text-sm"
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              {l.label}
            </a>
          ))}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="pill px-5 py-2 text-sm">
            Resume
          </a>
        </div>
      </div>
      <p className="mx-auto mt-20 max-w-6xl text-xs text-white/30">© {new Date().getFullYear()} Saif Salmani</p>
    </section>
  );
}
