export default function PropsDemo({ data }) => {
  const activeUser = data[0]
  
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm w-full max-w-xs text-center">
      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-xl">
        {activeUser.name.charAt(0)}
      </div>
      <h2 className="text-lg font-bold text-slate-800">{activeUser.name}</h2>
      <p className="text-sm text-slate-500 mb-4">{activeUser.role}</p>
      <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full">
        {activeUser.status}
      </span>
    </div>
  )
};