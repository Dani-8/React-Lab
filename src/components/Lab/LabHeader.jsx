import { ChevronRight, Eye, FileCode, Share2, Menu, X } from 'lucide-react';

export default function LabHeader({ categoryTitle, exampleName, viewMode, setViewMode, isSidebarOpen, setIsSidebarOpen }) {
    return (
        <header className="h-16 bg-white border-b border-slate-100 flex items-center px-4 lg:px-8 justify-between z-40">
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="lg:hidden p-2 hover:bg-slate-100 rounded-xl"
                >
                    {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

                <div className="flex items-center gap-3 text-[11px] text-slate-300 font-bold uppercase tracking-widest">
                    <span className='text-slate-400/70'>{categoryTitle}</span>
                    <ChevronRight size={12} className="hidden sm:block" />
                    <span className="text-orange-600 bg-orange-100/70 px-3 py-1 rounded-full border border-orange-100/50">
                        {exampleName}
                    </span>
                </div>
            </div>

            {/* View Tabs */}
            <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
                {[
                    { id: 'preview', icon: <Eye size={14} />, label: 'Preview' },
                    { id: 'code', icon: <FileCode size={14} />, label: 'JSX' },
                    { id: 'export', icon: <Share2 size={14} />, label: 'Architecture' }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setViewMode(tab.id)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === tab.id ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                            }`}
                    >
                        {tab.icon} <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                ))}
            </div>
        </header>
    );
}