import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#06100b]">
      <div className="page-container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div><Logo/><p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">A transportation-first Lagos waste-management prototype: smaller local vehicles, larger corridor vehicles, scheduled collection points and route intelligence.</p></div>
          <div><h3 className="font-black">Platform</h3><div className="mt-4 grid gap-3 text-sm text-slate-500"><Link to="/routes">Routes</Link><Link to="/trucks">Truck control</Link><Link to="/map">Live map</Link></div></div>
          <div><h3 className="font-black">Operations</h3><div className="mt-4 grid gap-3 text-sm text-slate-500"><Link to="/coverage">Coverage</Link><Link to="/markets">Markets</Link><Link to="/collection-points">Collection bins</Link></div></div>
          <div><h3 className="font-black">Project note</h3><p className="mt-4 text-sm leading-7 text-slate-500">Demo fleet positions, bus counts and trip counts are prototype data. Real-time deployment would connect approved operational feeds.</p></div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-white/10">Lagos CleanMove • Nigeria-focused transportation and waste logistics concept</div>
      </div>
    </footer>
  );
}
