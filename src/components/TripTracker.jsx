import { useMemo, useState } from "react";
import { CheckCircle2, RotateCcw, TrendingUp } from "lucide-react";

export default function TripTracker({initialTrips=3}) {
  const [trips, setTrips] = useState(initialTrips);
  const weekly = useMemo(() => trips * 7, [trips]);
  const monthly = useMemo(() => trips * 30, [trips]);
  const yearly = useMemo(() => trips * 365, [trips]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[.04]">
      <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-wider text-[#0d8b4b]">Trip accountability</p><h2 className="mt-2 text-2xl font-black">Completed market evacuations</h2></div><TrendingUp className="text-[#0d8b4b]"/></div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">{[["Today",trips],["7 days",weekly],["30 days",monthly],["365 days",yearly]].map(([label,value]) => <div key={label} className="rounded-2xl bg-[#f4faf6] p-4 dark:bg-white/5"><p className="text-xs text-slate-500">{label}</p><p className="mt-1 text-2xl font-black">{value}</p></div>)}</div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button onClick={() => setTrips(v => v+1)} className="inline-flex items-center gap-2 rounded-xl bg-[#0d8b4b] px-4 py-3 text-sm font-black text-white"><CheckCircle2 size={16}/> Mark trip complete</button>
        <button onClick={() => setTrips(initialTrips)} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-black dark:border-white/10"><RotateCcw size={16}/> Reset demo</button>
      </div>
    </div>
  );
}
