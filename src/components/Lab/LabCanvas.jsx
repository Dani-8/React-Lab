import { Copy, Check, FolderTree, FileCode, Loader2, AlertCircle } from 'lucide-react';

export default function LabCanvas({
    viewMode,
    SelectedComponent,
    currentExample,
    localData,
    setLocalData,
    handleCopy,
    copied,
    isLoading,
    error
}) {
    return (
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden min-h-[480px] flex flex-col transition-all">

            {/* PREVIEW MODE */}
            {viewMode === 'preview' && (
                <div className="p-10 flex-1 animate-in fade-in duration-300 flex items-center justify-center">

                    {/* ✅ Loading State (AI) */}
                    {isLoading && (
                        <div className="flex flex-col items-center gap-3">
                            <Loader2 size={32} className="animate-spin text-orange-500" />
                            <p className="text-sm text-slate-500">Loading component...</p>
                        </div>
                    )}

                    {/* ✅ Error State (AI) */}
                    {error && (
                        <div className="flex flex-col items-center gap-3 text-center max-w-xs">
                            <AlertCircle size={40} className="text-red-500" />
                            <p className="text-red-600 font-medium">{error}</p>
                        </div>
                    )}

                    {/* ✅ Your original render logic (kept) */}
                    {!isLoading && !error && SelectedComponent && (
                        <SelectedComponent data={localData} setData={setLocalData} />
                    )}
                </div>
            )}

            {/* CODE MODE (UNCHANGED - YOUR VERSION) */}
            {viewMode === 'code' && (
                <div className="flex-1 flex flex-col animate-in zoom-in-95 duration-200">
                    <div className="bg-slate-900 px-6 py-3 flex items-center justify-between border-b border-slate-800">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <div className="w-2 h-2 rounded-full bg-amber-400" />
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="ml-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                                {currentExample.fileName}
                            </span>
                        </div>
                        <button
                            onClick={() => handleCopy(currentExample.code)}
                            className="cursor-pointer flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-orange-400 transition-colors uppercase tracking-widest"
                        >
                            {copied ? <Check size={14} /> : <Copy size={14} />}
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </div>

                    <div className="flex-1 bg-slate-900 p-6 overflow-auto font-mono text-[13px] relative">
                        <div className="absolute left-0 top-6 w-10 flex flex-col items-center text-slate-700 select-none border-r border-slate-800/50">
                            {currentExample.code.split('\n').map((_, i) => (
                                <span key={i} className="leading-[1.7]">{i + 1}</span>
                            ))}
                        </div>
                        <pre className="ml-8 text-orange-300 leading-relaxed whitespace-pre-wrap">
                            {currentExample.code}
                        </pre>
                    </div>
                </div>
            )}

            {/* EXPORT MODE (MOSTLY YOUR VERSION + SAFE FALLBACK ADDED) */}
            {viewMode === 'export' && (
                <div className="flex-1 flex animate-in slide-in-from-right-4 duration-300 bg-slate-50">
                    
                    {/* Sidebar */}
                    <div className="w-56 border-r border-slate-200 p-4 space-y-4 bg-white">
                        <div className="flex items-center gap-2 text-indigo-600">
                            <FolderTree size={14} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Project Tree</span>
                        </div>
                        <div className="space-y-1 text-sm">
                            {currentExample.exportLogic?.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-600 py-1 hover:text-indigo-600">
                                    <FileCode size={12} className="text-slate-400" />
                                    {item.file.split('/').pop()}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Files */}
                    <div className="flex-1 flex flex-col p-6 overflow-auto gap-6">
                        {currentExample.exportLogic?.map((item, idx) => (
                            <div key={idx} className="space-y-2">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                    {item.file}
                                </div>
                                <pre className="p-5 bg-white border border-slate-200 rounded-2xl text-indigo-700 font-mono text-[12.5px] leading-relaxed shadow-sm overflow-auto">
                                    {item.content}
                                </pre>
                            </div>
                        ))}

                        {/* ✅ Your fallback kept */}
                        {(!currentExample.exportLogic || currentExample.exportLogic.length === 0) && (
                            <div className="text-center py-20 text-slate-400">
                                No architecture data for this example yet.
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}