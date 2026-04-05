import { REGISTRY } from './utils/registry'
import Sidebar from './components/Sidebar'
import LabHeader from './components/Lab/LabHeader'
import LabCanvas from './components/Lab/LabCanvas'
import StateWatcher from './components/Lab/StateWatcher'

import { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'

// ---------------------------------------------------------------

export default function App() {
  const [activeCategory, setActiveCategory] = useState('fundamentals')
  const [activeExample, setActiveExample] = useState('props-pattern')
  const [expandedCategories, setExpandedCategories] = useState(['fundamentals', 'hooks'])
  const [viewMode, setViewMode] = useState('preview')
  const [localData, setLocalData] = useState({})
  const [copied, setCopied] = useState(false)
  const [SelectedComponent, setSelectedComponent] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // ✅ AI additions (kept)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const category = REGISTRY[activeCategory]
  const example = category.examples[activeExample]

  // ---------------------------------------------------------------

  useEffect(() => {
    setLocalData(example.initialState || {})
    setViewMode('preview')
  }, [activeExample, activeCategory])

  // ✅ merged version (with loading + error)
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

  return (
    <div className="flex h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-orange-100 overflow-hidden">
      
      {/* Sidebar - Responsive (your version kept) */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-100 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <Sidebar
          activeCategory={activeCategory}
          activeExample={activeExample}
          expandedCategories={expandedCategories}
          setExpandedCategories={setExpandedCategories}
          setActiveCategory={setActiveCategory}
          setActiveExample={setActiveExample}
          onClose={() => setIsSidebarOpen(false)} // ✅ fixed bug from your version
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        
        {/* ✅ your header version (kept hamburger support) */}
        <LabHeader
          categoryTitle={category.title}
          exampleName={example.name}
          viewMode={viewMode}
          setViewMode={setViewMode}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Content Area */}
        <section className="flex-1 overflow-auto p-4 lg:p-8 lg:p-12 flex gap-8 lg:flex-row md:flex-col">
          <div className="flex-1 max-w-4xl space-y-6">

            <LabCanvas
              viewMode={viewMode}
              SelectedComponent={SelectedComponent}
              currentExample={example}
              localData={localData}
              setLocalData={setLocalData}
              handleCopy={handleCopy}
              copied={copied}
              isLoading={isLoading}   // ✅ added
              error={error}           // ✅ added
            />

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                <span className="text-orange-500">Source:</span>
                <span className="text-slate-600 font-mono">
                  {example.sourcePath || `topics/${activeCategory}/${activeExample}.jsx`}
                </span>
              </div>
            </div>
          </div>

          {/* ✅ your responsive panel (kept) */}
          <div className="hidden md:block lg:w-80 md:w-full">
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
  )
}