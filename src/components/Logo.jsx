import { Recycle, Route } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-[#0d8b4b] text-white shadow-lg">
        <Recycle size={23} className="recycle-spin" />
        <Route size={13} className="absolute bottom-1 right-1 rounded-full bg-white p-0.5 text-[#0d8b4b] dark:bg-[#07100c]" />
      </div>
      <div className="leading-none">
        <p className="text-sm font-black tracking-[0.18em]">CLEANMOVE</p>
        <p className="mt-1 text-[10px] font-black tracking-[0.30em] text-[#0d8b4b]">LAGOS</p>
      </div>
    </div>
  );
}
