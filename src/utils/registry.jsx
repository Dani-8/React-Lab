import { Code2, Zap } from 'lucide-react';

export const REGISTRY = {
  fundamentals: {
    title: 'Fundamentals',
    icon: <Code2 size={14} />,
    examples: {
      'props-pattern': {
        name: 'Props Pattern',
        component: () => import('../pages/Fundamentals/PropsDemo'),
        code: `export default function PropsDemo({ data }) {\n  return (\n    <div className="p-6 bg-orange-50/50 rounded-xl border border-orange-100">\n      <p className="text-sm text-slate-600">\n        Welcome,{' '}\n        <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-md font-mono font-bold">\n           {data.user || 'Guest'}\n        </span>\n      </p>\n    </div>\n  );\n}`,
        exportLogic: [
          { file: 'src/components/Welcome.jsx', content: `export default function Welcome({ name }) {\n  return <p>{name}</p>;\n}` },
          { file: 'src/App.jsx', content: `import Welcome from './components/Welcome';\n\nfunction App() {\n  return <Welcome name="Explorer" />;\n}` }
        ],
        initialState: { user: 'Explorer' }
      },

      'list-keys': {
        name: 'Map & Keys',
        component: () => import('../pages/Fundamentals/MappingDemo'),
        code: `export default function MappingDemo() {\n  return (\n    <ul className="space-y-2">\n      {['React', 'Vite', 'Tailwind', 'Lucide'].map((item, i) => (\n        <li\n          key={i}\n          className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm font-bold text-slate-700"\n        >\n          {i + 1}. {item}\n        </li>\n      ))}\n    </ul>\n  );\n}`,
        exportLogic: [
          { file: 'src/utils/data.js', content: `export const tech = ['React', 'Vite'];` },
          { file: 'src/List.jsx', content: `import { tech } from './utils/data';\n\nexport default () => tech.map(t => <li key={t}>{t}</li>);` }
        ],
        initialState: {}
      }
    }
  },
  hooks: {
    title: 'Core Hooks',
    icon: <Zap size={14} />,
    examples: {
      'use-state': {
        name: 'useState Objects',
        component: () => import('../pages/Hooks/UseStateDemo'),
        code: `export default function UseStateDemo({ data, setData }) {\n  return (\n    <div className="space-y-4">\n      <div className="p-6 bg-white rounded-xl border border-slate-200 flex flex-col gap-3">\n        <div className="text-sm font-bold text-slate-800">\n          {data.name} — <span className="text-orange-600">Lvl {data.level}</span>\n        </div>\n\n        <button\n          onClick={() => setData(prev => ({ ...prev, level: prev.level + 1 }))}\n          className="w-full py-2.5 bg-orange-500 text-white text-[11px] font-black uppercase tracking-widest rounded-lg hover:bg-orange-600 active:scale-95"\n        >\n          Level Up\n        </button>\n      </div>\n    </div>\n  );\n}`,
        exportLogic: [
          { file: 'src/hooks/usePlayer.js', content: `import { useState } from 'react';\n\nexport const usePlayer = () => {\n  const [val, set] = useState({ lvl: 1 });\n  return [val, set];\n};` }
        ],
        initialState: { name: 'John Doe', level: 1 }
      }
    }
  }
};