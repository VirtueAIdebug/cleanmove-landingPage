const stats = [
  ["13K–14K", "tonnes/day", "Estimated Lagos waste generation"],
  ["200K+", "passenger trips/day", "BRT movement cited by LAMATA"],
  ["33", "routes", "Standard routes in LAMATA published scheme"],
  ["358", "buses", "Buses in the published standard scheme"],
];

export default function ImpactStats() {
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{stats.map(([value,unit,label]) => <div key={label} className="hover-bounce rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[.04]"><p className="text-3xl font-black text-[#0d8b4b]">{value}</p><p className="mt-1 text-xs font-black uppercase tracking-wider text-slate-500">{unit}</p><p className="mt-4 text-sm font-bold leading-6 text-slate-800 dark:text-white">{label}</p></div>)}</div>;
}
