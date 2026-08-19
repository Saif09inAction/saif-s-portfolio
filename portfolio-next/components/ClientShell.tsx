"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { LenisProvider } from "./providers/LenisProvider";
import { Preloader } from "./binil/Preloader";

export function ClientShell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  return (
    <LenisProvider>
      <AnimatePresence>{ready ? null : <Preloader key="pre" onDone={() => setReady(true)} />}</AnimatePresence>
      <div className={ready ? "opacity-100" : "pointer-events-none opacity-0"}>
        <div className="site-grid pointer-events-none fixed inset-0 z-0" aria-hidden />
        <Navbar />
        {children}
      </div>
    </LenisProvider>
  );
}
