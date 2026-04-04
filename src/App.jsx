// src/App.jsx
import { ChevronRight, Eye, FileCode, Share2 } from 'lucide-react';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { REGISTRY } from './utils/registry';
import Sidebar from './components/Sidebar';
import LabHeader from './components/Lab/LabHeader';
import LabCanvas from './components/Lab/LabCanvas';
import StateWatcher from './components/Lab/StateWatcher';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('fundamentals');
  const [activeExample, setActiveExample] = useState('props-pattern');
  const [expandedCategories, setExpandedCategories] = useState(['fundamentals', 'hooks']);
  const [viewMode, setViewMode] = useState('preview');
  const [localData, setLocalData] = useState({});
  const [copied, setCopied] = useState(false);
  const [SelectedComponent, setSelectedComponent] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);   // ← New

  const category = REGISTRY[activeCategory];
  const example = category.examples[activeExample];

  useEffect(() => {
    setLocalData(example.initialState || {});
    setViewMode('preview');
  }, [activeExample, activeCategory]);

  useEffect(() => {
    example.component().then((mod) => setSelectedComponent(() => mod.default));
  }, [example]);

  const handleCopy = (text) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-orange-100 overflow-hidden">
      {/* Sidebar - Responsive */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-100 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <Sidebar
          activeCategory={activeCategory}
          activeExample={activeExample}
          expandedCategories={expandedCategories}
          setExpandedCategories={setExpandedCategories}
          setActiveCategory={setActiveCategory}
          setActiveExample={setActiveExample}
          onClose={() => setIsSidebarOpen(false)}   // ← New
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Header with Hamburger */}
        <header className="h-16 bg-white border-b border-slate-100 flex items-center px-4 lg:px-8 justify-between z-40">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-xl"
            >
              {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div className="flex items-center gap-3 text-[11px] font-bold text-slate-300 uppercase tracking-widest">
              <span>{category.title}</span>
              <ChevronRight size={12} className="hidden sm:block" />
              <span className="text-slate-900 bg-orange-50 px-3 py-1 rounded-full border border-orange-100/50">
                {example.name}
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
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                  viewMode === tab.id ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab.icon} <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </header>

        {/* Content Area */}
        <section className="flex-1 overflow-auto p-4 lg:p-8 lg:p-12 flex gap-8">
          <div className="flex-1 max-w-4xl space-y-6">
            <LabCanvas
              viewMode={viewMode}
              SelectedComponent={SelectedComponent}
              currentExample={example}
              localData={localData}
              setLocalData={setLocalData}
              handleCopy={handleCopy}
              copied={copied}
            />

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                <span className="text-orange-500">Source:</span>
                <span className="text-slate-600 font-mono tracking-tighter">
                  topics/{activeCategory}/{activeExample}.jsx
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel - Hide on small screens */}
          <div className="hidden xl:block w-80">
            <StateWatcher localData={localData} />
          </div>
        </section>
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}