import { TrainFront, Truck } from "lucide-react";

export default function MovingRoad() {
  return (
    <div className="relative min-h-[470px] overflow-hidden rounded-[2rem] bg-[#07110c] shadow-2xl shadow-emerald-950/20">
      <img src="/images/hero-transport.svg" alt="Illustration of Lagos waste transport, road and freight rail" className="absolute inset-0 h-full w-full object-cover opacity-90"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#07110c]/90 via-[#07110c]/20 to-transparent"/>
      <div className="absolute left-5 top-5 z-10 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
        <p className="text-[10px] font-black uppercase tracking-[.2em] text-emerald-300">Movement layer</p>
        <p className="mt-1 text-sm font-black text-white">Road + transfer + rail</p>
      </div>
      <div className="float-slow absolute bottom-7 left-6 z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/55 px-4 py-3 backdrop-blur">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0d8b4b] text-white"><Truck size={20}/></div>
        <div><p className="text-xs font-black text-white">LOCAL UNIT</p><p className="text-[11px] text-emerald-200">Small streets</p></div>
      </div>
      <div className="train-move absolute top-[31%] z-10 flex items-center gap-1 text-white">
        <div className="grid h-11 w-20 place-items-center rounded-lg bg-emerald-500"><TrainFront size={21}/></div>
        <div className="h-9 w-20 rounded-lg bg-emerald-700"/><div className="h-9 w-20 rounded-lg bg-emerald-600"/><div className="h-9 w-20 rounded-lg bg-emerald-500"/>
      </div>
      <div className="absolute bottom-7 right-6 z-10 rounded-2xl border border-emerald-300/20 bg-black/55 px-4 py-3 backdrop-blur">
        <p className="text-[10px] font-black uppercase tracking-[.2em] text-emerald-300">Main corridor</p><p className="mt-1 text-sm font-black text-white">Large evacuation truck</p>
      </div>
    </div>
  );
}
