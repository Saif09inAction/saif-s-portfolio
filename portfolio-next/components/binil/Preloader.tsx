"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let n = 0;
    const id = window.setInterval(() => {
      n += Math.random() * 14 + 6;
      if (n >= 100) {
        n = 100;
        window.clearInterval(id);
        window.setTimeout(onDone, 280);
      }
      setPct(Math.min(100, Math.floor(n)));
    }, 70);
    return () => window.clearInterval(id);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[400] flex items-end justify-between bg-[#070708] px-8 py-8"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <p className="text-2xl font-medium text-white/90">Hello</p>
      <p className="text-sm text-white/50">{pct}%</p>
    </motion.div>
  );
}
