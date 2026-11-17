import Link from "next/link";
import { resumeUrl } from "@/lib/data";

export const metadata = {
  title: "Resume | Saif Salmani",
  description: "View or download Saif Salmani’s résumé.",
};

export default function ResumePage() {
  return (
    <main className="relative z-10 flex min-h-[100dvh] flex-col px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-36 md:px-8 md:pt-24">
      <header className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 py-4">
        <div>
          <p className="text-sm text-white/40">Résumé</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">Saif Salmani</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/#contact" className="pill min-h-11 px-5 py-2.5 text-sm text-white/80">
            Back
          </Link>
          <a
            href={resumeUrl}
            download="Saif_Salmani_resume.pdf"
            className="pill min-h-11 border-[var(--teal)]/40 bg-[var(--teal)]/15 px-5 py-2.5 text-sm font-medium text-[var(--teal)]"
          >
            Get a soft copy
          </a>
        </div>
      </header>

      <div className="mx-auto mt-2 w-full max-w-5xl flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[var(--panel)] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
        <iframe
          title="Saif Salmani resume"
          src={`${resumeUrl}#toolbar=0&navpanes=0`}
          className="h-[min(82dvh,920px)] w-full bg-[#0a0a0b]"
        />
      </div>

      <p className="mx-auto mt-4 max-w-5xl text-center text-xs text-white/35 md:text-left">
        Prefer offline? Use <span className="text-white/55">Get a soft copy</span> to save the PDF on your device.
      </p>
    </main>
  );
}
