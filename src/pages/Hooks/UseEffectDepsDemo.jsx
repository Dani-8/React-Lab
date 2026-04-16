import { Database, RefreshCw, Timer, Info } from 'lucide-react'
import {useEffect} from 'react'

export default function UseEffectDepsDemo({ data, setData }) {
    useEffect(() => {
        setData({ ...data, loading: true });
        const timer = setTimeout(() => {
            setData({ ...data, loading: false, lastFetch: new Date().toLocaleTimeString() });
        }, 2500);
        return () => clearTimeout(timer);
    }, [data.userId])


    return (
        <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl w-80 text-center">
            <div className="flex justify-center gap-4 mb-8">
                <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-lg">
                    <Database size={24} />
                </div>
                <div className="flex flex-col text-left justify-center">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Current Source</span>
                    <span className="text-sm font-bold text-slate-800 tracking-tight">User_ID: {data.userId}</span>
                </div>
            </div>

            <div className="h-24 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center p-4 mb-6">
                {data.loading ? (
                    <div className="flex flex-col items-center gap-2">
                        <RefreshCw size={20} className="text-orange-500 animate-spin" />
                        <span className="text-[10px] font-bold text-slate-400 animate-pulse">SYNCING DATA...</span>
                    </div>
                ) : (
                    <div className="animate-in fade-in duration-500 flex flex-col items-center gap-1">
                        <Timer size={16} className="text-emerald-500" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Sync</span>
                        <span className="text-xs font-mono font-bold text-slate-700 italic">{data.lastFetch}</span>
                    </div>
                )}
            </div>

            <button
                onClick={() => setData({ ...data, userId: data.userId + 1 })}
                disabled={data.loading}
                className="w-full py-4 bg-orange-500 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-orange-100 hover:bg-orange-600 active:scale-95 disabled:opacity-50 transition-all"
            >
                Fetch Next Record
            </button>
        </div>
    );
}