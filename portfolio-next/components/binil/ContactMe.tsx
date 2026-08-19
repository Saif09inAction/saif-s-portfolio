"use client";

import { contact, resumeUrl } from "@/lib/data";

export function ContactMe() {
  return (
    <section id="contact" className="relative z-10 border-t border-white/10 px-4 py-16 pb-[max(5rem,env(safe-area-inset-bottom))] md:px-8 md:py-24 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-white/40">Contact Me</p>
        <h2 className="mt-3 text-[2.15rem] font-bold leading-[1.1] md:text-6xl">
          Let&apos;s build
          <br />
          something real.
        </h2>
        <a
          href="mailto:saifsalmani224@gmail.com"
          className="mt-6 inline-block break-all text-lg text-[var(--teal)] md:mt-8 md:text-xl"
        >
          saifsalmani224@gmail.com
        </a>
        <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
          {contact.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="pill min-h-11 px-5 py-2.5 text-sm"
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              {l.label}
            </a>
          ))}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="pill min-h-11 px-5 py-2.5 text-sm">
            Resume
          </a>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-6xl text-xs text-white/30 md:mt-20">© {new Date().getFullYear()} Saif Salmani</p>
    </section>
  );
}
