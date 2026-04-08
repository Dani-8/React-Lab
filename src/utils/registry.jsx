import { Code2, Zap } from 'lucide-react';

export const REGISTRY = {
  fundamentals: {
    title: 'Fundamentals',
    icon: <Code2 size={14} />,
    examples: {
      // 'props-pattern': {
      //   name: 'Props Pattern',
      //   fileName: 'PropsDemo.jsx',
      //   component: () => import('../pages/Fundamentals/PropsDemo'),
      //   sourcePath: 'src/pages/Fundamentals/PropsDemo.jsx',
      //   initialState: { user: 'Explorer' },

      //   code: `export default function PropsDemo({ data }) {\n  return (\n    <div className="p-6 bg-orange-50/50 rounded-xl border border-orange-100">\n      <p className="text-sm text-slate-600">\n        Welcome,{' '}\n        <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-md font-mono font-bold">\n           {data.user || 'Guest'}\n        </span>\n      </p>\n    </div>\n  );\n}`,
       
      //   exportLogic: [
      //     {
      //       file: 'src/pages/Fundamentals/PropsDemo.jsx',
      //       content: `export default function PropsDemo({ data }) {\n  return (\n    <div className="p-6 bg-orange-50/50 rounded-xl">\n      Welcome, <span className="font-bold">{data.user}</span>\n    </div>\n  );\n}`
      //     },
      //     {
      //       file: 'src/App.jsx',
      //       content: `import { useState } from 'react';\nimport PropsDemo from './pages/Fundamentals/PropsDemo';\n\nexport default function App() {\n  const [data, setData] = useState({ user: 'Explorer' });\n\n  return (\n    <div>\n      <PropsDemo data={data} setData={setData} />\n    </div>\n  );\n}`
      //     }
      //   ],
      // },

      'list-keys': {
        name: 'Map & Keys',
        fileName: 'MappingDemo.jsx',
        component: () => import('../pages/Fundamentals/MappingDemo'),
        sourcePath: 'src/pages/Fundamentals/MappingDemo.jsx',
        initialState: {},

        code: `export default function MappingDemo() {\n  return (\n    <ul className="space-y-2">\n      {['React', 'Vite', 'Tailwind', 'Lucide'].map((item, i) => (\n        <li\n          key={i}\n          className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm font-bold text-slate-700"\n        >\n          {i + 1}. {item}\n        </li>\n      ))}\n    </ul>\n  );\n}`,
        
        exportLogic: [
          {
            file: 'src/pages/Fundamentals/MappingDemo.jsx',
            content: `export default function MappingDemo() {\n  return (\n    <ul className="space-y-2">\n      {['React', 'Vite', 'Tailwind', 'Lucide'].map((item, i) => (\n        <li key={i}>\n           {i + 1}. {item}\n        </li>\n      ))}\n    </ul>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import MappingDemo from './pages/Fundamentals/MappingDemo';\n\nexport default function App() {\n  return <MappingDemo />;\n}`
          }
        ],
      }
    }
  },
  hooks: {
    title: 'Core Hooks',
    icon: <Zap size={14} />,
    examples: {
      'use-state': {
        name: 'useState Objects',
        fileName: 'UseStateDemo.jsx',
        component: () => import('../pages/Hooks/UseStateDemo'),
        sourcePath: 'src/pages/Hooks/UseStateDemo.jsx',
        initialState: { name: 'John Doe', level: 1 },

        code: `export default function UseStateDemo({ data, setData }) {\n  return (\n    <div className="space-y-4">\n      <div className="p-6 bg-white rounded-xl border border-slate-200 flex flex-col gap-3">\n        <div className="text-sm font-bold text-slate-800">\n          {data.name} — <span className="text-orange-600">Lvl {data.level}</span>\n        </div>\n\n        <button\n          onClick={() => setData(prev => ({ ...prev, level: prev.level + 1 }))}\n          className="w-full py-2.5 bg-orange-500 text-white text-[11px] font-black uppercase tracking-widest rounded-lg hover:bg-orange-600 active:scale-95"\n        >\n          Level Up\n        </button>\n      </div>\n    </div>\n  );\n}`,
        
        exportLogic: [
          {
            file: 'src/pages/Hooks/UseStateDemo.jsx',
            content: `export default function UseStateDemo({ data, setData }) {\n  return (\n    <div>\n      <h2>{data.name} - Level {data.level}</h2>\n \n      <button onClick={() => setData(prev => ({...prev, level: prev.level + 1}))}>\n         Level Up\n      </button>\n    </div>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import { useState } from 'react';\nimport UseStateDemo from './pages/Hooks/UseStateDemo';\n\nexport default function App() {\n  const [data, setData] = useState({ name: "John Doe", level: 1 });\n\n  return <UseStateDemo data={data} setData={setData} />;\n}`
          }
        ],
      }
    }
  }
};