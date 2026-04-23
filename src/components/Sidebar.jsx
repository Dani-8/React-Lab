import { useState } from 'react';
import { ChevronRight, ChevronDown, Beaker, Search } from 'lucide-react';
import { REGISTRY } from '../utils/registry';

export default function Sidebar({
  activeExample, expandedCategories,
  setExpandedCategories, setActiveCategory,
  setActiveExample, onClose
}) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-100 flex flex-col z-20 sticky top-0">
      <div className="p-6 border-b border-slate-50 flex items-center gap-3 shrink-0">
        <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200 hover:rotate-6 transition-transform">
          <Beaker size={20} />
        </div>

        <span className="font-black text-sm tracking-tighter text-slate-800 uppercase">React Lab</span>
      </div>


      <div className="px-4 py-4 shrink-0">
        <div className="relative group">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-500 transition-colors" />

          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 pl-9 pr-4 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-orange-100 focus:bg-white transition-all"
          />
        </div>
      </div>


      <nav className="flex-1 overflow-y-auto p-4 pt-2 space-y-1">
        {Object.entries(REGISTRY).map(([catKey, category]) => {
          const filteredExamples = Object.entries(category.examples).filter(([_, ex]) =>
            ex.name.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (searchQuery && filteredExamples.length === 0) return null;

          const isExpanded = expandedCategories.includes(catKey) || searchQuery;

          return (
            <div key={catKey} className="mb-3">
              <button
                onClick={() => setExpandedCategories(prev =>
                  prev.includes(catKey) ? prev.filter(k => k !== catKey) : [...prev, catKey]
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



              <div className={`mt-1 space-y-0.5 overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {filteredExamples.map(([exKey, example]) => (
                  <button
                    key={exKey}
                    onClick={() => {
                      setActiveCategory(catKey);
                      setActiveExample(exKey);
                      onClose?.();
                    }}
                    className={`cursor-pointer w-full text-left ml-6 px-3 py-1.5 rounded-md text-[13px] active:scale-95 transition-all duration-300 relative group ${activeExample === exKey ? 'text-orange-600 font-bold bg-orange-50/50' : 'text-slate-400 hover:text-slate-900'}`}
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