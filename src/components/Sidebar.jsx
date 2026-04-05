import { ChevronRight, ChevronDown, Beaker } from 'lucide-react';
import { REGISTRY } from '../utils/registry';
// ---------------------------------------------------------------


export default function Sidebar({
  activeExample, expandedCategories,
  setExpandedCategories, setActiveCategory,
  setActiveExample
}) {

  return (
    <aside className="w-64 bg-white border-r border-slate-100 flex flex-col z-20">
      <div className="p-6 border-b border-slate-50 flex items-center gap-3">
        <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200 hover:rotate-6 transition-transform">
          <Beaker size={20} />
        </div>
        <span className="font-black text-sm tracking-tighter text-slate-800 uppercase">React Lab</span>
      </div>


      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {Object.entries(REGISTRY).map(([catKey, category]) => {
          const isExpanded = expandedCategories.includes(catKey);
          return (
            <div key={catKey} className="mb-3">
              <button
                onClick={() => setExpandedCategories(prev =>
                  prev.includes(catKey)
                    ? prev.filter(k => k !== catKey)
                    : [...prev, catKey]
                )}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 group"
              >
                <div className="flex items-center gap-2.5">
                  <span className={isExpanded ? 'text-orange-500' : 'text-slate-300'}>
                    {category.icon}
                  </span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
                    {category.title}
                  </span>
                </div>
                {isExpanded ? <ChevronDown size={14} className="text-slate-300" /> : <ChevronRight size={14} className="text-slate-300" />}
              </button>

              <div className={`mt-1 space-y-0.5 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                {Object.entries(category.examples).map(([exKey, example]) => (
                  <button
                    key={exKey}
                    onClick={() => {
                      setActiveCategory(catKey);
                      setActiveExample(exKey);
                      onClose?.();
                    }}
                    className={`w-full text-left ml-6 px-3 py-1.5 rounded-md text-[13px] relative group ${activeExample === exKey ? 'text-orange-600 font-bold bg-orange-50/50' : 'text-slate-400 hover:text-slate-900'}`}
                  >
                    {activeExample === exKey && (
                      <span className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    )}
                    {example.name}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
      
    </aside>
  );
}