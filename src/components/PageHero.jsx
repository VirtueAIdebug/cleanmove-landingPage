import { ArrowUpRight } from "lucide-react";

export default function PageHero({eyebrow,title,text}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-white/10 dark:bg-[#08110d]">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-700/10"/>
      <div className="page-container relative py-16 sm:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black uppercase tracking-[.16em] text-[#0d8b4b] dark:bg-emerald-950/40">{eyebrow}<ArrowUpRight size={14}/></div>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">{text}</p>
        </div>
      </div>
    </section>
  );
}
