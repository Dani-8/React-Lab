// src/App.jsx
import { useState, useEffect } from 'react';
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

  const category = REGISTRY[activeCategory];
  const example = category.examples[activeExample];

  // Update data when example changes
  useEffect(() => {
    setLocalData(example.initialState || {});
    setViewMode('preview');
  }, [activeExample, activeCategory]);

  // Lazy load the demo component
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
    <div className="flex h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-orange-100">
      <Sidebar
        activeCategory={activeCategory}
        activeExample={activeExample}
        expandedCategories={expandedCategories}
        setExpandedCategories={setExpandedCategories}
        setActiveCategory={setActiveCategory}
        setActiveExample={setActiveExample}
      />

      <main className="flex-1 flex flex-col overflow-hidden">
        <LabHeader
          categoryTitle={category.title}
          exampleName={example.name}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        <section className="flex-1 overflow-auto p-8 lg:p-12 flex gap-8">
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

          <StateWatcher localData={localData} />
        </section>
      </main>
    </div>
  );
}