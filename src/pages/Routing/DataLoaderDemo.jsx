import { useState } from "react";
import { RefreshCw, Database,  } from "lucide-react";

export default function DataLoaderDemo({ data, setData }) {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const triggerFetch = () => {
        setLoading(true);
        setData({ state: 'loading', action: 'loader_trigger' })

        setTimeout(() => {
            setResult([
                { name: 'Core Processor', price: '$299' },
                { name: 'Neural Link', price: '$850' },
                { name: 'Quantum Cell', price: '$120' }
            ]);
            setLoading(false);
            setData({ state: 'idle', dataLoaded: true, count: 3 });
        }, 1200);
    };

    return (
        <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl w-80 text-center">
            <div className="mb-6">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                    <Database size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-900">Route Loader</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Modern Fetching Pattern</p>
            </div>

            <div className="min-h-[140px] mb-6 flex flex-col justify-center">
                {loading ? (
                    <div className="flex flex-col items-center gap-3">
                        <RefreshCw className="animate-spin text-blue-500" size={24} />
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Awaiting Loader...</span>
                    </div>
                ) : result ? (
                    <div className="space-y-2">
                        {result.map((item, i) => (
                            <div key={i} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-left flex items-center justify-between">
                                <span className="text-[10px] font-black text-slate-600 uppercase tracking-tight">{item.name}</span>
                                <span className="text-[10px] font-mono text-emerald-500">{item.price}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-[10px] text-slate-300 italic font-medium px-4 py-8 border-2 border-dashed border-slate-50 rounded-2xl">
                        Data will be injected via 'useLoaderData' upon route entry
                    </div>
                )}
            </div>

            <button
                onClick={triggerFetch}
                disabled={loading}
                className="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest disabled:opacity-50 active:scale-95 transition-transform"
            >
                Simulate Route Load
            </button>
        </div>
    );
}