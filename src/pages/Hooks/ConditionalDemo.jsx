import { Eye, EyeOff, Lock, Unlock } from 'lucide-react'

export default function ConditionalDemo({ data, setData }) {
    return (
        <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl w-80 text-center">
            <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center transition-all duration-500 ${data.isVisible ? 'bg-orange-500 text-white rotate-12 shadow-lg shadow-orange-200' : 'bg-slate-100 text-slate-400'}`}>
                {data.isVisible ? <Unlock size={40} /> : <Lock size={40} />}
            </div>

            <h3 className="text-xl font-black text-slate-900 mb-2">Toggle Logic</h3>
            <p className="text-xs text-slate-400 mb-8 font-medium italic">Conditional rendering using boolean state</p>

            <div className="h-20 flex items-center justify-center mb-8 border-y border-slate-50">
                {data.isVisible ? (
                    <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center">
                        <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">Decrypted Data</span>
                        <span className="font-mono font-bold text-slate-700 bg-slate-50 px-3 py-1 rounded border border-slate-100 italic">app_v2_stable</span>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-slate-200 animate-pulse" />)}
                    </div>
                )}
            </div>

            <button
                onClick={() => setData({ isVisible: !data.isVisible })}
                className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-95 ${data.isVisible ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-slate-900 text-white shadow-xl shadow-slate-200 hover:bg-slate-800'
                    }`}
            >
                {data.isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                {data.isVisible ? 'Hide Details' : 'Reveal Details'}
            </button>
        </div>
    )
}