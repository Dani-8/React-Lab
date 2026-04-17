import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useCallback } from 'react';
// ---------------------------------------------------------------

export default function UseCallbackDemo({ data, setData }) {
    const handleAuth = useCallback(() => {
        setData(prev => ({ ...prev, loading: true }));
        setTimeout(() => {
            setData(prev => ({ ...prev, loading: false, success: true }));
            setTimeout(() => setData(prev => ({ ...prev, success: false })), 2000);
        }, 1500);
    }, [setData])

    return (
        <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl w-96 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                {data.success ? <CheckCircle2 size={32} /> : <ShieldCheck size={32} />}
            </div>

            <h3 className="text-xl font-black text-slate-900 mb-2">Secure Portal</h3>
            <p className="text-xs text-slate-400 mb-8 font-medium italic">Memoized submission handler</p>

            <div className="space-y-4">
                <input
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-emerald-100 focus:bg-white transition-all text-center font-bold"
                    placeholder="admin@access.io"
                />
                <button
                    onClick={handleAuth}
                    disabled={data.loading}
                    className="w-full py-4 bg-emerald-500 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-emerald-100 hover:bg-emerald-600 active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                    {data.loading ? <Zap size={14} className="animate-pulse" /> : 'Authorize Connection'}
                </button>
            </div>
        </div>
    );
}