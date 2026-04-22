export default function MainLayoutDemo({ data, setData }) {
    const [activeTab, setActiveTab] = useState('desktop');
    const [currentPath, setCurrentPath] = useState('dashboard');

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex bg-slate-100 p-1 rounded-xl">
                <button
                    onClick={() => setActiveTab('mobile')}
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${activeTab === 'mobile' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}
                >
                    <Smartphone size={14} className="inline mr-1" /> Mobile
                </button>
                
                <button
                    onClick={() => setActiveTab('desktop')}
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${activeTab === 'desktop' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}
                >
                    <Monitor size={14} className="inline mr-1" /> Desktop
                </button>
            </div>


            <div className={`bg-white border border-slate-200 rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-500 ${activeTab === 'mobile' ? 'w-64 h-[450px]' : 'w-[500px] h-[350px]'}`}>
                {/* Global Navbar */}
                <div className="h-10 bg-white border-b border-slate-100 flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-indigo-600 rounded" />
                        <div className="w-12 h-2 bg-slate-100 rounded" />
                    </div>
                    <div className="flex gap-2">
                        <div onClick={() => setCurrentPath('dashboard')} className={`w-2 h-2 rounded-full cursor-pointer ${currentPath === 'dashboard' ? 'bg-indigo-600' : 'bg-slate-200'}`} />
                        <div onClick={() => setCurrentPath('settings')} className={`w-2 h-2 rounded-full cursor-pointer ${currentPath === 'settings' ? 'bg-indigo-600' : 'bg-slate-200'}`} />
                    </div>
                </div>

                <div className="flex h-full">
                    {/* Global Sidebar (Hidden on mobile for demo) */}
                    {activeTab === 'desktop' && (
                        <div className="w-24 border-r border-slate-100 bg-slate-50/50 p-3 space-y-2">
                            <div className="h-2 bg-slate-200 rounded w-full" />
                            <div className="h-2 bg-slate-200 rounded w-2/3" />
                            <div className="h-2 bg-slate-200 rounded w-full" />
                        </div>
                    )}

                    {/* The Dynamic Content Area (Outlet) */}
                    <div className="flex-1 p-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 text-[8px] font-black uppercase tracking-wider">Active Route</div>
                            <div className="text-[10px] font-mono text-slate-400">/{currentPath}</div>
                        </div>

                        {currentPath === 'dashboard' ? (
                            <div className="space-y-4">
                                <div className="h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl" />
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="h-12 bg-slate-50 rounded-lg border border-slate-100" />
                                    <div className="h-12 bg-slate-50 rounded-lg border border-slate-100" />
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                <div className="h-4 bg-slate-100 rounded w-1/2" />
                                <div className="p-4 border border-slate-100 rounded-xl space-y-2">
                                    <div className="h-2 bg-slate-50 rounded w-full" />
                                    <div className="h-2 bg-slate-50 rounded w-full" />
                                    <div className="h-2 bg-slate-50 rounded w-3/4" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}