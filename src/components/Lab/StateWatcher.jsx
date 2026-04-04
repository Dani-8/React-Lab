// src/components/Lab/StateWatcher.jsx
import { Activity, Sparkles } from 'lucide-react';

export default function StateWatcher({ localData }) {
  return (
    <aside className="w-80 space-y-6">
      <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-6 text-orange-600">
          <Activity size={16} className="animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">State Watcher</span>
        </div>
        <div className="space-y-3">
          {Object.keys(localData).length > 0 ? (
            Object.entries(localData).map(([key, val]) => (
              <div key={key} className="p-3 bg-slate-50/50 rounded-xl border border-slate-100 group transition-all hover:bg-white hover:shadow-md hover:border-orange-100">
                <div className="text-[9px] font-bold text-slate-400 uppercase mb-1 tracking-tighter">{key}</div>
                <div className="text-xs font-mono font-bold text-slate-800 break-all">
                  {typeof val === 'object' ? JSON.stringify(val) : String(val)}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <div className="text-slate-300 text-[11px] font-bold uppercase tracking-widest italic">Stateless</div>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 bg-slate-900 rounded-3xl text-white shadow-xl">
        <div className="flex items-center gap-2 mb-3 text-orange-400">
          <Sparkles size={14} />
          <span className="text-[10px] font-black uppercase tracking-widest">Mastery Tip</span>
        </div>
        <p className="text-[11px] leading-relaxed text-slate-300 font-medium italic">
          Check the <span className="text-orange-400 font-bold">Architecture</span> tab to see how to organize these concepts into real-world file structures.
        </p>
      </div>
    </aside>
  );
}