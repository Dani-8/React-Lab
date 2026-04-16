import { Globe, Sparkles } from 'lucide-react'


export default function UseContextDemo({ data, setData }) {
    return (
        <div className={`p-10 border border-slate-200 rounded-[2.5rem] shadow-xl w-80 text-center transition-colors duration-500 ${data.theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white'}`}>
            <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-colors ${data.theme === 'dark' ? 'bg-slate-800 text-orange-400' : 'bg-orange-50 text-orange-500'}`}>
                <Globe size={32} />
            </div>

            <h3 className={`text-xl font-black mb-2 ${data.theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Global Context</h3>
            <p className={`text-xs mb-8 font-medium italic ${data.theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Passing state without prop drilling</p>

            <div className="flex flex-col gap-3">
                <div className={`py-4 px-6 rounded-2xl border transition-all flex items-center justify-between ${data.theme === 'dark' ? 'bg-slate-800/50 border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-100 text-slate-600'}`}>
                    <span className="text-[10px] font-black uppercase">Theme Mode</span>
                    <span className="font-mono text-xs font-bold uppercase">{data.theme}</span>
                </div>

                <button
                    onClick={() => setData({ ...data, theme: data.theme === 'light' ? 'dark' : 'light' })}
                    className={`w-full py-4 bg-orange-500 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em]hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl ${data.theme === 'dark' ? 'shadow-orange-800' : 'shadow-orange-100'}`}
                >
                    <Sparkles size={14} /> Switch Theme
                </button>
            </div>
        </div>
    );
}