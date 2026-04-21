import { useState } from 'react';
import { User, Database, RefreshCcw } from 'lucide-react';

export default function UseFetchDemo({ data, setData }) {
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ name: 'Leanne Graham', email: 'Sincere@april.biz' });

  const triggerFetch = () => {
    setLoading(true);
    const nextId = id >= 10 ? 1 : id + 1;
    setId(nextId);

    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${nextId}`)
        .then(res => res.json())
        .then(json => {
          setUser(json);
          setLoading(false)

          setData({
            lastFetched: json.name,
            userId: nextId,
            email: json.email
          });
        });
    }, 800);
  };

  return (
    <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl w-96 text-center">
      <div className="w-20 h-20 mx-auto mb-6 bg-blue-50 text-blue-500 rounded-3xl flex items-center justify-center relative">
        {loading ? <RefreshCcw size={40} className="animate-spin text-blue-300" /> : <User size={40} />}
        {!loading && <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white" />}
      </div>

      <h3 className="text-xl font-black text-slate-900 mb-1">API Integrator</h3>
      <p className="text-xs text-slate-400 mb-8 font-medium italic">Logic hidden inside useFetch()</p>

      <div className="space-y-4">
        <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl text-left">
          <div className="text-[9px] font-black uppercase text-blue-500 mb-2 tracking-widest flex justify-between">
            <span>Live Response</span>
            {loading && <span className="animate-pulse">Loading...</span>}
          </div>

          <div className={`transition-opacity duration-300 ${loading ? 'opacity-30' : 'opacity-100'}`}>
            <div className="text-sm font-bold text-slate-700">{user.name}</div>
            <div className="text-[11px] text-slate-400 font-mono">{user.email}</div>
          </div>
        </div>
        

        <button
          onClick={triggerFetch}
          disabled={loading}
          className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <Database size={14} /> Fetch Next User
        </button>
      </div>
    </div>
  );
}