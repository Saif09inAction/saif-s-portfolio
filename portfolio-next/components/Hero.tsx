"use client";

import { motion } from "framer-motion";
import { contact, hero, siteImages } from "@/lib/data";

function CollabTag({
  color,
  label,
  className,
}: {
  color: string;
  label: string;
  className: string;
}) {
  return (
    <motion.div
      className={`pointer-events-none absolute hidden items-center gap-1 md:flex ${className}`}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="h-3 w-3 rotate-12 rounded-[2px]" style={{ background: color }} />
      <span
        className="rounded-md px-2 py-0.5 text-[11px] font-medium text-black"
        style={{ background: color }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100dvh] flex-col px-4 pb-28 pt-[7.75rem] md:px-8 md:pt-24">
      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center">
        <div className="relative mb-4 flex items-center justify-center gap-2.5 md:mb-6 md:gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteImages.portrait}
            alt={siteImages.portraitAlt}
            className="h-[4.75rem] w-[4.75rem] rounded-full object-cover object-[center_12%] ring-2 ring-white/15 md:h-32 md:w-32"
          />
          <span className="rounded-3xl bg-black px-3 py-2 text-sm font-medium text-white shadow-lg md:px-4 md:py-2.5 md:text-lg">
            Hello, I&apos;m Saif
          </span>
        </div>

        <div className="relative mt-4 w-fit">
          <CollabTag
            color="#f9a8d4"
            label="Hackathon"
            className="-left-28 top-[4%] lg:-left-36"
          />
          <CollabTag
            color="#60a5fa"
            label="Dev"
            className="-right-20 top-[34%] lg:-right-28"
          />
          <CollabTag
            color="#a78bfa"
            label="saif"
            className="-left-24 bottom-[4%] lg:-left-32"
          />

          <h1 className="relative z-[1] text-[1.9rem] font-bold uppercase leading-[0.92] tracking-tight md:text-[clamp(2.6rem,10vw,6.4rem)] md:leading-[0.9]">
            <span className="block text-[var(--purple)]">Full-stack</span>
            <span className="block text-[var(--cream)]">Developer</span>
            <span className="relative block text-white">
              Engineer
              <a
                href="#contact"
                className="absolute left-[calc(100%+1.25rem)] top-1/2 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-white/15 bg-black px-3 py-1.5 text-[11px] font-medium normal-case tracking-normal text-white md:inline-flex"
              >
                <span className="h-2 w-2 rounded-full bg-[#39ff14]" />
                Let&apos;s Connect
              </a>
            </span>
            <span className="block">
              <span className="text-white">&amp; </span>
              <span className="text-[var(--teal)]">Builder</span>
            </span>
          </h1>

          <p className="absolute left-[calc(100%+2.5rem)] top-1 hidden w-max text-left text-[11px] leading-snug text-white/40 lg:block">
            <span className="block whitespace-nowrap">// Based in</span>
            <span className="block whitespace-nowrap">Mumbai, India</span>
          </p>
          <p className="absolute right-[calc(100%+2.5rem)] top-[48%] hidden w-max text-right text-[11px] leading-snug text-white/50 lg:block">
            <span className="block whitespace-nowrap">// Ship with</span>
            <span className="block whitespace-nowrap">Purpose &amp; Impact</span>
          </p>
        </div>

        <p className="mt-6 max-w-xl px-1 text-sm text-white/80 md:mt-8 md:text-base">
          I create digital products that balance{" "}
          <span className="text-[var(--purple)]">efficiency</span>,{" "}
          <span className="text-[var(--cream)]">aesthetics</span> and{" "}
          <span className="text-[var(--teal)]">functionality</span>.
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-10 flex items-end justify-between px-4 md:bottom-6 md:px-8">
        <p className="hidden text-[11px] leading-tight text-white/35 md:block">
          // Design, Code,
          <br />
          Ship
        </p>
        <div className="pointer-events-auto pill mx-auto flex items-center gap-5 px-5 py-3 md:mx-0 md:gap-4 md:px-4 md:py-2.5">
          {contact.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-xs text-white/70 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:saifsalmani224@gmail.com"
          className="pointer-events-auto pill hidden px-4 py-2 text-xs text-white/80 md:inline-flex"
        >
          saifsalmani224@gmail.com
        </a>
      </div>
    </section>
  );
}
