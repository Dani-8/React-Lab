import { useState } from 'react';
import { Home, Info, Settings, Globe } from 'lucide-react';

export default function BasicRoutingDemo({ data, setData }) {
    const [route, setRoute] = useState('home');

    const updateRoute = (newRoute) => {
        setRoute(newRoute);
        setData({ activeRoute: `/${newRoute}`, timestamp: new Date().toLocaleTimeString() });
    };

    return (
        <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl w-96 text-center">
            {/* Navbar - Can be COMPONENT as well */}
            <nav className="flex justify-center gap-2 mb-10 p-1.5 bg-slate-100 rounded-2xl">
                <button onClick={() => updateRoute('home')} 
                 className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${route === 'home' ? 'bg-white text-orange-500 shadow-sm' : 'text-slate-400'}`}>
                    Home
                </button>

                <button onClick={() => updateRoute('about')} 
                 className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${route === 'about' ? 'bg-white text-orange-500 shadow-sm' : 'text-slate-400'}`}>
                    About
                </button>

                <button onClick={() => updateRoute('settings')} 
                 className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${route === 'settings' ? 'bg-white text-orange-500 shadow-sm' : 'text-slate-400'}`}>
                    Settings
                </button>
            </nav>


            <div className="min-h-[120px] flex flex-col items-center justify-center space-y-4">
                {route === 'home' && (
                    <div className="animate-in fade-in zoom-in-95 duration-300">
                        <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4"><Home size={24} /></div>
                        <h2 className="text-xl font-black text-slate-900">Homepage</h2>
                        <p className="text-[11px] text-slate-400 font-medium">Welcome to the main dashboard.</p>
                    </div>
                )}
                {route === 'about' && (
                    <div className="animate-in fade-in zoom-in-95 duration-300">
                        <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4"><Info size={24} /></div>
                        <h2 className="text-xl font-black text-slate-900">About Us</h2>
                        <p className="text-[11px] text-slate-400 font-medium">Learning React patterns daily.</p>
                    </div>
                )}
                {route === 'settings' && (
                    <div className="animate-in fade-in zoom-in-95 duration-300">
                        <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4"><Settings size={24} /></div>
                        <h2 className="text-xl font-black text-slate-900">Settings</h2>
                        <p className="text-[11px] text-slate-400 font-medium">Manage your app configuration.</p>
                    </div>
                )}
            </div>


            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Active Path</span>
                <div className="flex items-center gap-1 text-[10px] font-mono text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-bold">
                    <Globe size={10} /> /{route}
                </div>
            </div>
        </div>
    );
}