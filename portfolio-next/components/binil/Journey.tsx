"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { journeyStops, type JourneyStop } from "@/lib/data";

function EventGallery({ stop }: { stop: JourneyStop }) {
  const shots = stop.photos;
  const [i, setI] = useState(0);

  const prev = useCallback(() => {
    setI((n) => (shots.length ? (n - 1 + shots.length) % shots.length : 0));
  }, [shots.length]);

  const next = useCallback(() => {
    setI((n) => (shots.length ? (n + 1) % shots.length : 0));
  }, [shots.length]);

  useEffect(() => {
    setI(0);
  }, [stop.id]);

  useEffect(() => {
    if (shots.length < 2) return;
    const id = window.setInterval(next, 5200);
    return () => window.clearInterval(id);
  }, [next, shots.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:rounded-3xl">
      <div className="relative aspect-[4/5] w-full bg-black/40 md:aspect-[3/4]">
        {shots.length === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-white/40">No photos yet</div>
        ) : (
          <AnimatePresence mode="wait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              key={shots[i]}
              src={shots[i]}
              alt={`${stop.title} ${i + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
            />
          </AnimatePresence>
        )}

        {shots.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={prev}
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-lg text-white backdrop-blur-md md:left-3 md:h-10 md:w-10"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={next}
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-lg text-white backdrop-blur-md md:right-3 md:h-10 md:w-10"
            >
              →
            </button>
            <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5">
              {shots.map((src, idx) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Photo ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition ${
                    idx === i ? "w-6 bg-[var(--teal)]" : "w-1.5 bg-white/35 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export function Journey() {
  const [open, setOpen] = useState(false);

  return (
    <section id="journey" className="relative z-10 border-t border-white/10 px-4 py-16 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-white/40">The road so far</p>
          <h2 className="mt-3 text-[2.15rem] font-bold tracking-tight md:text-6xl">JOURNEY</h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/55 md:mt-5 md:text-base">
            Ten rooms between Mumbai and Bengaluru — hackathons, IoT benches, and a Demo Day stage.
            The résumé lists the names. This is what it actually looked like.
          </p>

          <AnimatePresence initial={false}>
            {!open ? (
              <motion.div
                key="cta"
                className="mt-10 flex flex-col items-center"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="group relative inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full border border-[var(--teal)]/40 bg-[var(--teal)]/10 px-5 py-3.5 text-sm font-medium text-white shadow-[0_0_40px_rgba(45,212,191,0.18)] md:w-auto md:gap-3 md:px-8 md:py-4 md:text-base md:hover:border-[var(--teal)] md:hover:bg-[var(--teal)]/20 md:hover:shadow-[0_0_56px_rgba(45,212,191,0.32)]"
                >
                  <span className="absolute -inset-1 -z-10 animate-pulse rounded-full bg-[var(--teal)]/15 blur-md" />
                  <span className="h-2 w-2 rounded-full bg-[var(--teal)] shadow-[0_0_12px_var(--teal)]" />
                  Peek behind the résumé
                  <span className="text-[var(--teal)] transition group-hover:translate-x-0.5">→</span>
                </button>
                <p className="mt-4 text-xs text-white/35">One click. Photos from the floors — not the LinkedIn recap.</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.ol
              key="roadmap"
              initial="hidden"
              animate="show"
              className="relative mt-12 space-y-14 pl-8 md:mt-20 md:space-y-24 md:pl-0"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.14, delayChildren: 0.12 } },
              }}
            >
              <motion.span
                aria-hidden
                className="absolute left-[11px] top-3 h-[calc(100%-1.5rem)] w-px origin-top bg-gradient-to-b from-[var(--purple)] via-white/15 to-[var(--teal)] md:left-1/2 md:-translate-x-px"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
              />

              {journeyStops.map((stop, index) => {
                const photoLeft = index % 2 === 1;
                return (
                  <motion.li
                    key={stop.id}
                    className="relative grid items-center gap-5 md:grid-cols-2 md:gap-16"
                    variants={{
                      hidden: { opacity: 0, y: 56, filter: "blur(8px)" },
                      show: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    <span
                      aria-hidden
                      className="absolute left-[-21px] top-2 z-10 h-3 w-3 rounded-full bg-[var(--cream)] shadow-[0_0_16px_var(--cream)] md:left-1/2 md:-translate-x-1/2"
                    />

                    <div className={photoLeft ? "md:order-1" : "md:order-2"}>
                      <EventGallery stop={stop} />
                    </div>

                    <div className={photoLeft ? "md:order-2 md:text-left" : "md:order-1 md:text-right"}>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                        {String(index + 1).padStart(2, "0")} · {stop.year}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold md:text-3xl">{stop.title}</h3>
                      <p className="mt-1 text-sm text-[var(--teal)]">{stop.place}</p>
                      <p className="mt-4 text-sm leading-relaxed text-white/55">{stop.hook}</p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ol>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
