import { useState } from "react";
import { Zap, Monitor, Smartphone } from "lucide-react";

export default function CounterSliceDemo({ data, setData }) {
    const [ui, setUi] = useState({ theme: 'light', sidebar: true });

    const toggle = () => {
        const newTheme = ui.theme === 'light' ? 'dark' : 'light';
        setUi({ ...ui, theme: newTheme });
        setData({ slice: 'ui', currentTheme: newTheme, type: 'TOGGLE_THEME' });
    };

    return (
        <div className={`w-80 h-64 rounded-[2.5rem] border transition-all duration-500 overflow-hidden shadow-xl flex flex-col ${ui.theme === 'dark' ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
            <div className={`h-10 border-b flex items-center justify-between px-6 ${ui.theme === 'dark' ? 'border-slate-800' : 'border-slate-100'}`}>
                <div className={`w-3 h-3 rounded-full ${ui.theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'}`} />
                
                <button onClick={toggle} className="p-1 hover:bg-slate-100 rounded-lg transition-colors">
                    <Zap size={14} className={ui.theme === 'dark' ? 'text-yellow-400' : 'text-slate-400'} />
                </button>
            </div>

            <div className="flex-1 p-6 flex flex-col items-center justify-center gap-4">
                <div className={`text-[10px] font-black uppercase tracking-widest ${ui.theme === 'dark' ? 'text-slate-500' : 'text-slate-300'}`}>
                    System State: {ui.theme}
                </div>

                <div className="flex gap-2">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${ui.theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-900'}`}>
                        <Monitor size={20} />
                    </div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${ui.theme === 'dark' ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-50 text-indigo-600'}`}>
                        <Smartphone size={20} />
                    </div>
                </div>

                <button onClick={toggle} className="mt-2 text-[10px] font-black bg-indigo-600 text-white px-6 py-2 rounded-xl uppercase tracking-tighter">
                    Dispatch Action
                </button>
            </div>
        </div>
    );
}