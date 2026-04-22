import { Copy, Check, FolderTree, FileCode, Loader2, AlertCircle, Info } from 'lucide-react';


function buildTree(paths) {
    const tree = {}

    paths.forEach(({ file }) => {
        const parts = file.replace('src/', '').split('/')
        let current = tree

        parts.forEach((part, i) => {
            if (!current[part]) {
                current[part] = {}
            }
            current = current[part]
        })
    })

    return tree
}

function renderTree(node, depth = 0) {
    return Object.entries(node).map(([key, value], idx, arr) => {
        const isLast = idx === arr.length - 1
        const isFile = Object.keys(value).length === 0

        return (
            <div key={key}>
                <span>
                    {'│  '.repeat(depth)}
                    {isLast ? '└─ ' : '├─ '}
                    <span className={`${isFile
                        ? key.includes("App") || key.includes("main") ? 'text-orange-600' : 'text-indigo-600 font-medium inline-block md:max-w-[125px]  overflow-hidden text-ellipsis whitespace-nowrap align-bottom '
                        : 'text-slate-500'
                        }`}>
                        {key}
                    </span>
                </span>

                {!isFile && renderTree(value, depth + 1)}
            </div>
        )
    })
}




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
    const tree = buildTree(currentExample.exportLogic)
    return (
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden h-[550px] flex flex-col transition-all">

            {/* PREVIEW MODE */}
            {viewMode === 'preview' && (
                <div className="p-10 flex-1 animate-in fade-in duration-300 flex items-center justify-center">


                    {isLoading && (
                        <div className="flex flex-col items-center gap-3">
                            <Loader2 size={32} className="animate-spin text-orange-500" />
                            <p className="text-sm text-slate-500">Loading component...</p>
                        </div>
                    )}


                    {error && (
                        <div className="flex flex-col items-center gap-3 text-center max-w-xs">
                            <AlertCircle size={40} className="text-red-500" />
                            <p className="text-red-600 font-medium">{error}</p>
                        </div>
                    )}


                    {!isLoading && !error && SelectedComponent && (
                        <SelectedComponent data={localData} setData={setLocalData} />
                    )}
                </div>
            )}


            {/* CODE MODE */}
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

                    <div className="flex-1 bg-slate-900 p-4 overflow-auto font-mono text-[13px] relative">
                        <div className="absolute left-0 top-3 w-10 flex flex-col items-center text-slate-700 select-none border-r border-slate-800/50">
                            {currentExample.code.split('\n').map((_, i) => (
                                <span key={i} className="leading-[1.55]">{i + 1}</span>
                            ))}
                        </div>
                        <pre className="ml-8 text-orange-300 text-xs leading-relaxed absolute overflow-x-auto whitespace-pre">
                            {currentExample.code}
                        </pre>
                    </div>
                </div>
            )}


            {/* EXPORT MODE*/}
            {viewMode === 'export' && (
                <div className="flex-1 flex flex-col md:flex-row animate-in slide-in-from-right-4 duration-300 bg-slate-50 min-h-0 overflow-hidden">

                    {/* Sidebar */}
                    <div className="w-full md:w-60 border-r border-slate-200 p-5 bg-white">
                        <div className="flex items-center gap-2 mb-4 text-indigo-600">
                            <FolderTree size={16} />
                            <span className="text-xs font-black uppercase tracking-widest">Project Structure</span>
                        </div>


                        <div className="font-mono text-[13px] leading-[1.6] text-slate-600">
                            src/
                            {renderTree(tree)}
                        </div>
                    </div>


                    {/* Files */}
                    <div className="flex-1 flex flex-col p-6 overflow-y-auto min-h-0 gap-6 max-w-full w-lg">
                        {currentExample.exportLogic?.map((item, idx) => (
                            <div key={idx} className="space-y-2">
                                <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                    <span>{item.file}</span>

                                    <div className="flex items-center gap-3">
                                        {/* Copy Button */}
                                        <button  onClick={() => handleCopy(item.content)} title="Copy Code"
                                            className="hover:text-orange-500 focus:scale-75 transform-all duration-400 cursor-pointer flex items-center gap-1"
                                        >
                                            <Copy size={14} />
                                        </button>

                                        {/* Info Icon */}
                                        <span className='info-icon hover:text-orange-500 cursor-pointer flex items-center gap-1 relative group text-slate-400 transition-all duration-400'>
                                            <Info size={16} />

                                            <span className='z-50 absolute top-7 -left-45 p-2 border-l-3 border border-orange-400 bg-white text-slate-600 font-black text-[9px] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl w-50'>
                                                Create files and folders as shown.<br /><br /> 
                                                Then copy the code into the respective files to replicate the result.<br /><br /> 
                                                And apply CSS/TailwindCSS as you see fit!
                                            </span>
                                        </span>
                                    </div>
                                </div>


                                <div className='overflow-hidden rounded-xl border border-slate-200 shadow-sm'>
                                    <pre className="p-5 bg-white text-indigo-700 font-mono text-[12.5px] leading-relaxed overflow-auto">
                                        {item.content}
                                    </pre>
                                </div>
                            </div>
                        ))}
                        

                        {(!currentExample.exportLogic || currentExample.exportLogic.length === 0) && (
                            <div className="text-center py-20 text-orange-600">
                                No architecture data for this example yet.
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}