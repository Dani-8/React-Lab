import { useState } from "react";
import { Info, Home, AlertTriangle,  } from "lucide-react";

export default function NotFoundDemo({ data, setData }) {
    const [currentRoute, setCurrentRoute] = useState('home');

    const navigateTo = (path) => {
        setCurrentRoute(path);
        setData({ resolved: path === 'home' || path === 'about', currentPath: `/${path}` });
    };

    return (
        <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl w-80 text-center relative overflow-hidden">
            <nav className="flex justify-center gap-4 mb-10">
                <button onClick={() => navigateTo('home')} className={`text-[10px] font-black uppercase tracking-widest ${currentRoute === 'home' ? 'text-blue-600' : 'text-slate-300'}`}>Home</button>
                <button onClick={() => navigateTo('about')} className={`text-[10px] font-black uppercase tracking-widest ${currentRoute === 'about' ? 'text-blue-600' : 'text-slate-300'}`}>About</button>
                <button onClick={() => navigateTo('random-xyz')} className="text-[10px] font-black uppercase tracking-widest text-red-400">Broken Link</button>
            </nav>

            {(currentRoute === 'home' || currentRoute === 'about') ? (
                <div className="animate-in fade-in zoom-in-95">
                    <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-3xl mx-auto flex items-center justify-center text-slate-300 mb-4">
                        {currentRoute === 'home' ? <Home size={40} /> : <Info size={40} />}
                    </div>

                    <h3 className="text-xl font-black text-slate-900 capitalize">{currentRoute}</h3>
                    <p className="text-xs text-slate-400 mt-2 font-medium">Valid application route</p>
                </div>
            ) : (
                <div className="animate-in slide-in-from-bottom-8">
                    <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl mx-auto flex items-center justify-center mb-4 border border-red-100">
                        <AlertTriangle size={40} />
                    </div>

                    <h3 className="text-2xl font-black text-slate-900">404</h3>
                    <p className="text-xs text-slate-400 mb-6 font-medium tracking-tight">The path <span className="font-mono text-red-500">/{currentRoute}</span> doesn't exist.</p>
                    
                    <button
                        onClick={() => navigateTo('home')}
                        className="px-6 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest"
                    >
                        Go Back Home
                    </button>
                </div>
            )}
        </div>
    );
}