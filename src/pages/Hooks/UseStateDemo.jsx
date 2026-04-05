export default function UseStateDemo({ data, setData }) {
  return (
    <div className="space-y-4">
      <div className="p-6 bg-white rounded-xl border border-slate-200 flex flex-col gap-3">
        <div className="text-sm font-bold text-slate-800">
          {data.name} ——— <span className="text-orange-600">Lvl {data.level}</span>
        </div>

        <button
          onClick={() => setData((prev) => ({ ...prev, level: prev.level + 1 }))}
          className="w-full py-2.5 bg-orange-500 text-white text-[11px] font-black uppercase tracking-widest rounded-lg hover:bg-orange-600 transition-all active:scale-[0.95] shadow-lg shadow-orange-200"
        >
          Level Up
        </button>
      </div>
    </div>
  );
}