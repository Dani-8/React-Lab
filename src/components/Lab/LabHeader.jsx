// src/components/Lab/LabHeader.jsx
import { ChevronRight, Eye, FileCode, Share2 } from 'lucide-react';

export default function LabHeader({ categoryTitle, exampleName, viewMode, setViewMode }) {
  return (
    <header className="h-16 bg-white border-b border-slate-100 flex items-center px-8 justify-between z-10">
      <div className="flex items-center gap-3 text-[11px] font-bold text-slate-300 uppercase tracking-widest">
        <span>{categoryTitle}</span>
        <ChevronRight size={12} />
        <span className="text-slate-900 bg-orange-50 px-3 py-1 rounded-full border border-orange-100/50">
          {exampleName}
        </span>
      </div>

      <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
        {[
          { id: 'preview', icon: <Eye size={14} />, label: 'Preview' },
          { id: 'code', icon: <FileCode size={14} />, label: 'JSX' },
          { id: 'export', icon: <Share2 size={14} />, label: 'Architecture' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setViewMode(tab.id)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
              viewMode === tab.id ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>
    </header>
  );
}