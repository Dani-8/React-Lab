import { Zap, RefreshCw } from 'lucide-react'
import { useEffect } from 'react'

export default function UseEffectMountDemo({ data, setData }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            setData({ status: 'System Online', connected: true });
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl w-80 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-slate-50 rounded-3xl flex items-center justify-center relative">
                <Zap size={32} className={data.connected ? "text-orange-500 fill-orange-500" : "text-slate-300"} />
                {!data.connected && <div className="absolute inset-0 flex items-center justify-center animate-spin"><RefreshCw size={48} className="text-orange-200 opacity-20" /></div>}
            </div>

            <h3 className="text-xl font-black text-slate-900 mb-2">Mount Effect</h3>
            <p className="text-xs text-slate-400 mb-8 font-medium italic">Simulating API load on component entry</p>

            <div className={`py-3 px-6 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${data.connected ? 'bg-orange-50 text-orange-600 border border-orange-100' : 'bg-slate-50 text-slate-400 border border-slate-100'}`}>
                {data.status}
            </div>
        </div>
    );
}