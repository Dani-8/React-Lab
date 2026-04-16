import { Minus, Plus } from 'lucide-react'

export default function UseStateBasicDemo({ data, setData }) {
  return (
    <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm w-64 text-center">
        <h5 className='font-black text-slate-900'>Count</h5>
        <h2 className="text-5xl font-black text-slate-900 mb-6">{data.count}</h2>

        <div className="flex gap-3 justify-center">
            <button
                onClick={() => setData({ count: data.count - 1 })}
                className="p-4 bg-slate-100 text-slate-600 rounded-2xl hover:bg-slate-200 active:scale-90 transition-all"
            >
                <Minus size={24} />
            </button>
            <button
                onClick={() => setData({ count: data.count + 1 })}
                className="p-4 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 active:scale-90 transition-all shadow-lg shadow-orange-200"
            >
                <Plus size={24} />
            </button>
        </div>
    </div>
  )
}