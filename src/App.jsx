import { REGISTRY } from './utils/registry'
import Sidebar from './components/Sidebar'
import LabHeader from './components/Lab/LabHeader'
import LabCanvas from './components/Lab/LabCanvas'
import StateWatcher from './components/Lab/StateWatcher'

import { useState, useEffect } from 'react'
// ---------------------------------------------------------------

export default function App() {
  const firstCategory = Object.keys(REGISTRY)[2]
  const firstExample = Object.keys(REGISTRY[firstCategory]?.examples || {})[0]

  const [activeCategory, setActiveCategory] = useState(firstCategory)
  const [activeExample, setActiveExample] = useState(firstExample)
  const [expandedCategories, setExpandedCategories] = useState([firstCategory])

  const [viewMode, setViewMode] = useState('preview')
  const [localData, setLocalData] = useState({})
  const [copied, setCopied] = useState(false)
  const [SelectedComponent, setSelectedComponent] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)


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

  return (
    <div className="flex h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-orange-100 overflow-hidden">

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
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden w-full">

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
        <section className="flex-1 overflow-auto p-4 md:p-8 flex justify-between gap-8 xl:flex-row md:flex-col">
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
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                <span className="text-orange-500">Source:</span>
                <span className="text-slate-600 font-mono">
                  {example.sourcePath || `topics/${activeCategory}/${activeExample}.jsx`}
                </span>
              </div>
            </div>
          </div>


          <div className="hidden md:block xl:w-80 md:w-full">
            <StateWatcher localData={localData} />
          </div>
        </section>
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