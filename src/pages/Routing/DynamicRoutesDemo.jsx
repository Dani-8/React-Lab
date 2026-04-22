import React, { useState } from 'react';
import { User } from 'lucide-react';

export default function DynamicRoutesDemo({ data, setData }) {
    const [id, setId] = useState('101')

    const navigate = (newId) => {
        setId(newId);
        setData({ currentParams: { id: newId }, url: `/users/${newId}` });
    };

    return (
        <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl w-80 text-center">
            <div className="mb-8">
                <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-[2rem] mx-auto flex items-center justify-center text-slate-300 mb-4 relative overflow-hidden">
                    <User size={40} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1 tracking-tight">Profile Viewer</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Dynamic Parameter Pattern</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left mb-6">
                <div className="text-[9px] font-black text-blue-500 uppercase mb-2 tracking-widest">Active Profile ID</div>
                
                <div className="flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-slate-700">ID: {id}</span>

                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <button onClick={() => navigate('204')} className="py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all">Visit 204</button>
                <button onClick={() => navigate('509')} className="py-3 bg-slate-100 text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all">Visit 509</button>
            </div>
        </div>
    );
}