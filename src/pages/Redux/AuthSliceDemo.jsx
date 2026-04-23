import { useState } from "react";
import { RefreshCw, ShieldCheck, AlertCircle, User, Globe } from 'lucide-react';

export default function AuthSliceDemo({ data, setData }) {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleLogin = () => {
        setStatus('loading');
        setData({ type: 'auth/login/pending', loading: true });

        setTimeout(() => {
            const success = Math.random() > 0.3;
            if (success) {
                setStatus('success');
                setData({
                    type: 'auth/login/fulfilled',
                    user: { name: 'Alex Rivera', role: 'Security Lead' },
                    loading: false
                });
            } else {
                setStatus('error');
                setData({
                    type: 'auth/login/rejected',
                    error: 'Invalid biometric signature',
                    loading: false
                });
            }
        }, 2000);
    };

    return (
        <div className="w-80 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl overflow-hidden p-8">
            <div className="flex flex-col items-center text-center mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors ${status === 'error' ? 'bg-red-50 text-red-500' :
                        status === 'success' ? 'bg-emerald-50 text-emerald-500' : 'bg-slate-50 text-slate-400'
                    }`}>
                    {status === 'loading' ? <RefreshCw className="animate-spin" size={28} /> :
                        status === 'success' ? <ShieldCheck size={28} /> :
                            status === 'error' ? <AlertCircle size={28} /> : <User size={28} />}
                </div>

                <h3 className="text-lg font-black text-slate-900 tracking-tight">Thunk Auth</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Manual Promise Lifecycle</p>
                
                <p className="text-xs text-slate-500 mt-2">Try again & again</p>
            </div>


            <div className="space-y-4">
                {status === 'success' ? (
                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 animate-in zoom-in-95 duration-300">
                        <p className="text-[10px] font-black text-emerald-600 uppercase tracking-tighter">Session Active</p>
                        <p className="text-xs font-bold text-slate-700 mt-1">Welcome, Alex Rivera</p>
                    </div>
                ) : (
                    <div className="space-y-2">
                        <div className="h-10 bg-slate-50 rounded-xl border border-slate-100 flex items-center px-4 text-slate-300">
                            <Globe size={14} className="mr-2" /> <span className="text-[10px] font-medium">nexus_gateway_alpha</span>
                        </div>

                        {status === 'error' && (
                            <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-xl animate-in slide-in-from-top-2">
                                <AlertCircle size={14} />
                                <span className="text-[10px] font-bold">Verification Failed</span>
                            </div>
                        )}
                    </div>
                )}

                <button
                    onClick={status === 'success' ? () => setStatus('idle') : handleLogin}
                    disabled={status === 'loading'}
                    className={`w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 ${status === 'success' ? 'bg-slate-100 text-slate-600' : 'bg-slate-900 text-white shadow-lg shadow-slate-200'
                        }`}
                >
                    {status === 'loading' ? 'Verifying...' : status === 'success' ? 'Logout' : 'Initialize Login'}
                </button>
            </div>
        </div>
    );
}