import { User, Mail, Save } from 'lucide-react'

export default function UseStateObjectDemo({ data, setData }) {
    return (
        <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm w-72">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                    <User size={24} />
                </div>

                <div>
                    <h3 className="font-black text-slate-800">{data.name}</h3>
                    <p className="text-xs text-slate-400">{data.email}</p>
                </div>
            </div>


            <div className="space-y-3">
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input type="text" value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-orange-300 rounded-lg text-xs focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    />
                </div>

                <button className="w-full py-2 bg-slate-900 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
                    <Save size={14} /> SAVE PROFILE
                </button>
            </div>
        </div>
    )
}