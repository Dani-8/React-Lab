import { useState } from "react";
import { RefreshCw, Wifi, Star } from "lucide-react";

export default function ApiSliceDemo({ data, setData }) {
    const [status, setStatus] = useState('idle');
    const [products, setProducts] = useState([]);

    const refetch = async () => {
        setStatus('loading');
        setData({ query: 'getProducts', status: 'pending', cached: false });

        try {
            // Real API Fetch
            const response = await fetch('https://fakestoreapi.com/products?limit=3');
            const result = await response.json();

            // Mapping API data to your component's fields
            const mappedProducts = result.map(p => ({
                id: p.id,
                name: p.title,
                category: p.category,
                rating: p.rating.rate
            }));

            setProducts(mappedProducts);
            setStatus('success');
            setData({ query: 'getProducts', status: 'fulfilled', items: mappedProducts.length, cached: true });
        } catch (error) {
            console.error("Fetch error:", error);
            setStatus('error');
            setData({ query: 'getProducts', status: 'rejected', error: error.message });
        }
    };

    return (
        <div className="w-80 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-black text-slate-900">API Cache</h3>

                    <div className="flex items-center gap-1.5 mt-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${status === 'loading' ? 'bg-blue-500 animate-pulse' : status === 'error' ? 'bg-red-500' : 'bg-emerald-500'}`} />
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">RTK-Query Engine</span>
                    </div>
                </div>

                <button
                    onClick={refetch}
                    className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:text-blue-600 transition-colors"
                >
                    <RefreshCw size={18} className={status === 'loading' ? 'animate-spin' : ''} />
                </button>
            </div>


            <div className="space-y-3 min-h-[160px]">
                {status === 'idle' ? (
                    <div className="h-40 border-2 border-dashed border-slate-50 rounded-3xl flex flex-col items-center justify-center gap-2 text-slate-300">
                        <Wifi size={24} />
                        <span className="text-[10px] font-bold uppercase">Awaiting Request</span>
                    </div>
                ) : status === 'loading' ? (
                    [1, 2].map(i => (
                        <div key={i} className="h-16 bg-slate-50 rounded-2xl animate-pulse" />
                    ))
                ) : status === 'error' ? (
                    <div className="h-40 flex flex-col items-center justify-center text-red-400 text-[10px] font-bold uppercase">
                        Fetch Failed
                    </div>
                ) : (
                    products.map(p => (
                        <div key={p.id} className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-between group hover:border-blue-200 transition-all">
                            <div className="max-w-[70%]">
                                <p className="text-[10px] font-black text-slate-800 uppercase tracking-tight truncate">{p.name}</p>
                                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{p.category}</p>
                            </div>
                            <div className="flex items-center gap-1 text-amber-400">
                                <Star size={10} fill="currentColor" />
                                <span className="text-[10px] font-black text-slate-600">{p.rating}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>


            <div className="mt-8 flex gap-2">
                <div className={`flex-1 p-2 rounded-xl text-center ${status === 'error' ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'}`}>
                    <p className="text-[8px] font-black opacity-50 uppercase">Status</p>
                    <p className="text-[10px] font-bold">{status.toUpperCase()}</p>
                </div>
                
                <div className="flex-1 bg-emerald-50 p-2 rounded-xl text-center">
                    <p className="text-[8px] font-black text-emerald-400 uppercase">Cached</p>
                    <p className="text-[10px] font-bold text-emerald-700">{status === 'success' ? 'YES' : 'NO'}</p>
                </div>
            </div>
        </div>
    );
}