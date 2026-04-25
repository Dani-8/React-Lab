import { REGISTRY } from './utils/registry'
import Sidebar from './components/Sidebar'
import LabHeader from './components/Lab/LabHeader'
import LabCanvas from './components/Lab/LabCanvas'
import StateWatcher from './components/Lab/StateWatcher'

import { useState, useEffect, useMemo } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
// ---------------------------------------------------------------

export default function App() {
  const firstCategory = Object.keys(REGISTRY)[0]
  const firstExample = Object.keys(REGISTRY[firstCategory]?.examples || {})[0]

  const [activeCategory, setActiveCategory] = useState(firstCategory)
  const [activeExample, setActiveExample] = useState(firstExample)
  const [expandedCategories, setExpandedCategories] = useState([firstCategory])

  const [viewMode, setViewMode] = useState('preview') // 'preview', 'theory', 'code', 'export'
  const [localData, setLocalData] = useState({})
  const [copied, setCopied] = useState(false)
  const [SelectedComponent, setSelectedComponent] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const [visitorCount, setVisitorCount] = useState(null);

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const category = REGISTRY[activeCategory]
  const example = category.examples[activeExample]

  // ---------------------------------------------------------------

  useEffect(() => {
    setLocalData(example.initialState || {})
    setViewMode('preview')
  }, [activeExample, activeCategory])



  //  merged (with loading + error)
  useEffect(() => {
    setIsLoading(true)
    setError(null)

    example.component()
      .then((mod) => {
        setSelectedComponent(() => mod.default)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError("Failed to load component. Please try again.")
        setIsLoading(false)
      })
  }, [example])

  // ---------------------------------------------------------------

  const handleCopy = (text) => {
    try {
      const textArea = document.createElement("textarea")
      textArea.value = text
      textArea.style.position = "fixed"
      textArea.style.left = "-999999px"
      textArea.style.top = "-999999px"
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)

      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error(err)
    }
  }

  // ---------------------------------------------------------------
  
  // Visitor count tracking....
  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/dani-react-lab/visits')
      .then(res => res.json())
      .then(data => setVisitorCount(data.value))
      .catch(() => setVisitorCount('---'));
  }, [])

  // ---------------------------------------------------------------


  const navigateTo = (navItem) => {
    if (!navItem) return

    setActiveCategory(navItem.catKey)
    setActiveExample(navItem.exKey)

    if (!expandedCategories.includes(navItem.catKey)) {
      setExpandedCategories([...expandedCategories, navItem.catKey])
    }
  }


  const flatNav = useMemo(() => {
    const list = [];
    Object.entries(REGISTRY).forEach(([catKey, cat]) => {
      Object.entries(cat.examples).forEach(([exKey]) => {
        list.push({ catKey, exKey });
      });
    });
    return list;
  }, []);

  const currentIndex = flatNav.findIndex(item => item.catKey === activeCategory && item.exKey === activeExample);
  const prevItem = flatNav[currentIndex - 1];
  const nextItem = flatNav[currentIndex + 1];

  const prevExampleName = prevItem ? REGISTRY[prevItem.catKey].examples[prevItem.exKey].name : 'Start of Path'
  const nextExampleName = nextItem ? REGISTRY[nextItem.catKey].examples[nextItem.exKey].name : 'End of Path'

  // ---------------------------------------------------------------

  return (
    <div className="flex overflow-hidden h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-orange-100 overflow-auto">

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-100 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <Sidebar
          activeCategory={activeCategory}
          activeExample={activeExample}
          expandedCategories={expandedCategories}
          setExpandedCategories={setExpandedCategories}
          setActiveCategory={setActiveCategory}
          setActiveExample={setActiveExample}
          onClose={() => setIsSidebarOpen(false)}
          visitorCount={visitorCount}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full">

        {/*  header */}
        <LabHeader
          categoryTitle={category.title}
          exampleName={example.name}
          viewMode={viewMode}
          setViewMode={setViewMode}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <section className="p-4 md:p-8 flex justify-between gap-8 xl:flex-row md:flex-col">
            <div className="flex-1 max-w-full space-y-6">

              <LabCanvas
                viewMode={viewMode}
                SelectedComponent={SelectedComponent}
                currentExample={example}
                localData={localData}
                setLocalData={setLocalData}
                handleCopy={handleCopy}
                copied={copied}
                isLoading={isLoading}
                error={error}
              />


              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest whitespace-normal text-slate-400 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                  <span className="text-orange-500">Source:</span>

                  <span className="text-slate-600 font-mono break-all">
                    {example.sourcePath || `topics/${activeCategory}/${activeExample}.jsx`}
                  </span>
                </div>
              </div>


              {/* NAVIGATION FOOTER */}
              <div className="flex justify-between items-center px-4">
                <button disabled={!prevItem} onClick={() => navigateTo(prevItem)}
                  className={`cursor-pointer flex items-center gap-3 px-5 py-3 bg-white border border-slate-100 rounded-2xl shadow-lg transition-all group ${!prevItem ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-md hover:border-orange-200 active:scale-85'}`}
                >
                  <ChevronLeft size={18} className={`text-orange-500 ${prevItem ? 'group-hover:-translate-x-1' : ''} transition-transform`} />

                  <div className="text-left hidden sm:block">
                    <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Previous</div>
                    <div className="text-[11px] font-bold text-slate-700">{prevExampleName}</div>
                  </div>
                </button>

                <button disabled={!nextItem} onClick={() => navigateTo(nextItem)}
                  className={`cursor-pointer flex items-center gap-3 px-5 py-3 bg-white border border-slate-100 rounded-2xl shadow-lg transition-all group ${!nextItem ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-md hover:border-orange-200 active:scale-85'}`}
                >
                  <div className="text-right hidden sm:block">
                    <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Next Topic</div>
                    <div className="text-[11px] font-bold text-slate-700">{nextExampleName}</div>
                  </div>

                  <ChevronRight size={18} className={`text-orange-500 ${nextItem ? 'group-hover:translate-x-1' : ''} transition-transform`} />
                </button>
              </div>

            </div>


            <div className="hidden md:block xl:w-80 md:w-full">
              <StateWatcher localData={localData} />
            </div>
          </section>
        </div>
      </main>


      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}