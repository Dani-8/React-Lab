import { useState } from 'react';
import { Layout, Users, Settings, PieChart } from 'lucide-react';

export default function NestedRoutesDemo({ data, setData }) {
    const [view, setView] = useState('overview')

    const updateView = (v) => {
        setView(v);
        setData({ path: `/dashboard/${v}`, layout: 'DashboardLayout' });
    };

    return (
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-[2.5rem] shadow-xl overflow-hidden flex h-80">
            <div className="w-16 bg-slate-900 flex flex-col items-center py-6 gap-6">
                <div className="w-8 h-8 bg-blue-500 rounded-xl mb-2 flex items-center justify-center text-white font-black text-xs">L</div>
                
                <button onClick={() => updateView('overview')} className={`cursor-pointer ${view === 'overview' ? 'text-white' : 'text-slate-600'}`}><Layout size={20} /></button>
                <button onClick={() => updateView('team')} className={`cursor-pointer ${view === 'team' ? 'text-white' : 'text-slate-600'}`}><Users size={20} /></button>
                <button onClick={() => updateView('settings')} className={`cursor-pointer ${view === 'settings' ? 'text-white' : 'text-slate-600'}`}><Settings size={20} /></button>
            </div>

            <div className="flex-1 flex flex-col">
                <header className="h-14 border-b border-slate-100 px-6 flex items-center justify-between bg-slate-50/50">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Dashboard / {view}</span>
                    <div className="w-6 h-6 bg-slate-200 rounded-full" />
                </header>

                <div className="p-6 flex-1 overflow-y-auto">
                    {view === 'overview' && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                                    <div className="text-[9px] font-bold text-blue-400 uppercase">Growth</div>
                                    <div className="text-lg font-black text-blue-600">+12%</div>
                                </div>

                                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                                    <div className="text-[9px] font-bold text-emerald-400 uppercase">Active</div>
                                    <div className="text-lg font-black text-emerald-600">842</div>
                                </div>
                            </div>
                            <div className="h-20 bg-slate-50 border border-dashed border-slate-200 rounded-xl flex items-center justify-center"><PieChart size={24} className="text-slate-300" /></div>
                        </div>
                    )}
                    {view === 'team' && (
                        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2">
                            {['Alex', 'Jordan', 'Sam'].map(name => (
                                <div key={name} className="flex items-center gap-3 p-2 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-[10px] font-bold">{name[0]}</div>
                                    <div className="text-xs font-bold text-slate-700">{name}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}