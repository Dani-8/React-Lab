import { Search, Cpu } from 'lucide-react';
import { useMemo } from 'react';

export default function UseMemoDemo({ data, setData }) {
    const items = [
        { id: 1, name: 'Analytics Dashboard', type: 'Pro' },
        { id: 2, name: 'User Management', type: 'Core' },
        { id: 3, name: 'Payment Gateway', type: 'Pro' },
        { id: 4, name: 'Auth Service', type: 'Core' },
        { id: 5, name: 'Messaging API', type: 'Edge' },
    ]

    const filtered = useMemo(() => {
        if (!data.query) return items;
        return items.filter(i => i.name.toLowerCase().includes(data.query.toLowerCase()));
    }, [data.query])


    return (
        <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl w-96">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-50 text-orange-500 rounded-xl"><Cpu size={24} /></div>
                
                <div>
                    <h3 className="font-black text-slate-900 leading-tight">Data Processor</h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider text-left">Optimized Search</p>
                </div>
            </div>

            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />

                <input
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:bg-white focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                    placeholder="Search modules..."
                    onChange={(e) => setData({ ...data, query: e.target.value })}
                />
            </div>

            <div className="space-y-2">
                {filtered.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-slate-50/50 rounded-xl border border-slate-100 animate-in fade-in slide-in-from-bottom-2">
                        <span className="text-xs font-bold text-slate-700">{item.name}</span>
                        <span className="text-[9px] font-black px-2 py-1 bg-white rounded-md text-slate-400 border border-slate-100 uppercase">{item.type}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}