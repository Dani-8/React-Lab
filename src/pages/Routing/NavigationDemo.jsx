import { useState } from "react";
import { Navigation, ExternalLink, FastForward, Activity, Info, PieChart, ArrowLeft } from "lucide-react";

export default function NavigationDemo({ data, setData }) {
    const [view, setView] = useState('landing');
    const [status, setStatus] = useState('idle');

    const performRedirect = (target) => {
        setStatus('redirecting');
        setData({ action: 'useNavigate()', target: `/${target}`, status: 'pending' });

        setTimeout(() => {
            setView(target);
            setStatus('idle');
            setData({ action: 'useNavigate()', target: `/${target}`, status: 'completed' });
        }, 1000);
    };

    return (
        <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl w-80 text-center">
            {view === 'landing' && (
                <div className="animate-in fade-in zoom-in-95">
                    <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Navigation size={32} />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Portal Landing</h3>
                    <p className="text-xs text-slate-400 mb-8 font-medium italic">Choose your navigation method</p>

                    <div className="space-y-3">
                        <button
                            onClick={() => {
                                setView('about');
                                setData({ action: 'Link', target: '/about', status: 'completed' });
                            }}
                            className="w-full py-3 border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50"
                        >
                            <ExternalLink size={14} /> Simple Link
                        </button>
                        <button
                            onClick={() => performRedirect('dashboard')}
                            disabled={status === 'redirecting'}
                            className="w-full py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-blue-100 disabled:opacity-50"
                        >
                            {status === 'redirecting' ? <Activity size={14} className="animate-spin" /> : <FastForward size={14} />}
                            Secure Redirect
                        </button>
                    </div>
                </div>
            )}

            {view !== 'landing' && (
                <div className="animate-in slide-in-from-right-4 duration-300">
                    <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 capitalize">
                        {view === 'dashboard' ? <PieChart size={32} /> : <Info size={32} />}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-1 capitalize">{view} View</h3>
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-8">Navigation Success</p>

                    <button
                        onClick={() => {
                            setView('landing');
                            setData({ action: 'none', target: '/', status: 'idle' });
                        }}
                        className="flex items-center gap-2 mx-auto text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900"
                    >
                        <ArrowLeft size={12} /> Back to Start
                    </button>
                </div>
            )}
        </div>
    );
}