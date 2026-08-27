import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const links = [
  ["Home", "/"], ["Routes", "/routes"], ["Trucks", "/trucks"], ["Live Map", "/map"],
  ["Coverage", "/coverage"], ["Markets", "/markets"], ["Bins", "/collection-points"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("cleanmove-theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("cleanmove-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#08110d]/90">
      <div className="page-container">
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <Link to="/" onClick={() => setOpen(false)}><Logo /></Link>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {links.map(([label, path]) => (
              <NavLink key={path} to={path} end={path === "/"} className={({isActive}) =>
                `rounded-xl px-3 py-2.5 text-sm font-bold transition ${isActive ? "bg-emerald-50 text-[#0d8b4b] dark:bg-emerald-950/50" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"}`
              }>{label}</NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <button onClick={() => setDark(v => !v)} className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 dark:border-white/10">
              {dark ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
            <Link to="/report" className="rounded-xl bg-[#0d8b4b] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#08733d]">Report Waste</Link>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <button onClick={() => setDark(v => !v)} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 dark:border-white/10" aria-label="Toggle theme">
              {dark ? <Sun size={17}/> : <Moon size={17}/>}
            </button>
            <button onClick={() => setOpen(v => !v)} className="grid h-10 w-10 place-items-center rounded-xl bg-[#0d8b4b] text-white" aria-label={open ? "Close menu" : "Open menu"}>
              {open ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-slate-200 py-4 xl:hidden dark:border-white/10">
            <nav className="grid gap-1.5">
              {links.map(([label, path]) => (
                <NavLink key={path} to={path} end={path === "/"} onClick={() => setOpen(false)} className={({isActive}) =>
                  `rounded-xl px-4 py-3 text-sm font-bold ${isActive ? "bg-emerald-50 text-[#0d8b4b] dark:bg-emerald-950/50" : "text-slate-700 dark:text-slate-200"}`
                }>{label}</NavLink>
              ))}
              <Link to="/report" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-[#0d8b4b] px-5 py-3 text-center text-sm font-black text-white">Report Waste</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
