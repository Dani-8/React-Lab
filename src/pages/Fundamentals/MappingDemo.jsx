import { Cpu } from 'lucide-react';

export default function MappingDemo({ data }) {

  return (
    <div className="w-full max-w-sm space-y-5">

      {data.map((item) => (
        <div key={item.id} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm transition-all duration-400 hover:border-orange-300 hover:bg-white/80 hover:shadow-lg">

          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <Cpu size={18} />
            </div>
            
            <span className="font-bold text-slate-700">{item.label}</span>
          </div>

          <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">#{item.id}</span>

        </div>
      ))}
      
    </div>
  )
}