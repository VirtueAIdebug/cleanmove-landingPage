import { ArrowRight, Bot, MapPin, Route, Truck, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import MovingRoad from "../components/MovingRoad";
import ImpactStats from "../components/ImpactStats";
import { collectionPoints, markets, trucks } from "../data/lagosData";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f4faf6] dark:bg-[#07100c]">
        <div className="page-container grid items-center gap-12 py-12 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[.92fr_1.08fr] lg:py-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-[#0d8b4b] dark:border-emerald-900/50 dark:bg-white/5">
              <Waves size={15}/> Nigeria-first logistics concept
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-[-.05em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
              Cleaner Lagos starts with <span className="text-[#0d8b4b]">smarter movement.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
              CleanMove proposes a practical transport chain: containerise waste at collection points, use smaller vehicles for difficult streets, consolidate at transfer points, and deploy larger vehicles on major corridors.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/map" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0d8b4b] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1">Open live map <ArrowRight size={17}/></Link>
              <Link to="/trucks" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-black dark:border-white/10 dark:bg-white/5">View fleet <Truck size={17}/></Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Waste generation</p><p className="mt-1 text-2xl font-black">13K–14K</p><p className="text-xs text-slate-500">tonnes/day</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">BRT movement</p><p className="mt-1 text-2xl font-black">200K+</p><p className="text-xs text-slate-500">passenger trips/day cited by LAMATA</p></div>
            </div>
          </div>
          <MovingRoad/>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-14 dark:border-white/10 dark:bg-[#0a1510]">
        <div className="page-container">
          <p className="text-xs font-black uppercase tracking-[.16em] text-[#0d8b4b]">Lagos by the numbers</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">The scale of the challenge needs a logistics response.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">The homepage uses source-backed figures for context. Operational fleet counts below are prototype values and are labelled as such.</p>
          <div className="mt-8"><ImpactStats/></div>
        </div>
      </section>

      <section className="py-16">
        <div className="page-container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[.16em] text-[#0d8b4b]">The operating idea</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Don't send the biggest truck to every street.</h2>
            <p className="mt-5 text-sm leading-8 text-slate-600 dark:text-slate-400">
              Match the vehicle to the road. Smaller local units can feed transfer points from difficult neighbourhood streets, while larger vehicles move consolidated loads on major corridors. This is a route-and-vehicle fit argument—not a claim that one fuel type is always more efficient.
            </p>
            <Link to="/routes" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#0d8b4b]">Explore the route model <Route size={16}/></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[['Small unit','Narrow streets','Households + local shops'],['Collection bin','Ready load','Access points + markets'],['Large truck','Main corridor','Transfer + evacuation']].map(([title,sub,desc]) => (
              <div key={title} className="hover-bounce rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[.04]"><div className="grid size-11 place-items-center rounded-2xl bg-emerald-50 text-[#0d8b4b] dark:bg-emerald-950/50"><Bot size={20}/></div><h3 className="mt-4 font-black">{title}</h3><p className="mt-1 text-sm font-bold text-[#0d8b4b]">{sub}</p><p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f4faf6] py-16 dark:border-white/10 dark:bg-[#0a1510]">
        <div className="page-container">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-xs font-black uppercase tracking-[.16em] text-[#0d8b4b]">Collection point network</p><h2 className="mt-3 text-3xl font-black">Waste should be waiting in a bin, not waiting on the road.</h2></div><Link to="/collection-points" className="text-sm font-black text-[#0d8b4b]">View all bins →</Link></div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {collectionPoints.slice(0,3).map(point => <div key={point.id} className="hover-bounce rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[.04]"><div className="flex justify-between gap-3"><span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-black uppercase text-[#0d8b4b] dark:bg-emerald-950/50">{point.type}</span><span className="text-xs font-black text-slate-500">{point.id}</span></div><h3 className="mt-4 text-lg font-black">{point.name}</h3><p className="mt-1 flex items-center gap-2 text-sm text-slate-500"><MapPin size={14}/>{point.area}</p><div className="mt-5"><div className="flex justify-between text-xs font-bold"><span>Fill level</span><span>{point.fill}%</span></div><div className="mt-2 h-2 rounded-full bg-slate-100 dark:bg-white/10"><div className="h-full rounded-full bg-[#0d8b4b]" style={{width:`${point.fill}%`}}/></div></div></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#0d8b4b] py-16 text-white">
        <div className="page-container">
          <div className="grid gap-8 lg:grid-cols-2">
            <div><p className="text-xs font-black uppercase tracking-[.16em] text-emerald-100">Market evacuation proposal</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Schedule waste movement where waste is concentrated.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50">The prototype uses a simple rule: large markets can receive multiple scheduled truck visits, while smaller markets can have a dedicated daily vehicle. These are proposed operating targets, not current government allocations.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">{markets.slice(0,4).map(m => <div key={m.name} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"><p className="text-xs font-black text-emerald-100">{m.scale}</p><p className="mt-1 font-black">{m.name}</p><p className="mt-2 text-xs text-emerald-50">{m.trucksPerDay} proposed truck visits/day</p></div>)}</div>
          </div>
        </div>
      </section>
    </>
  );
}
