import { Code2, Zap } from 'lucide-react';

export const REGISTRY = {
  fundamentals: {
    title: 'Fundamentals',
    icon: <Code2 size={14} />,
    examples: {
      'components-jsx': {
        name: 'Components & JSX',
        fileName: 'Header.jsx',
        component: () => import('../pages/Fundamentals/Header'),
        sourcePath: 'src/pages/Fundamentals/Header.jsx',
        initialState: {  },

        code: `export default function Header() {\n  return (\n    <header className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm w-full max-w-md text-center">\n      <h1 className="text-2xl font-black text-slate-900 mb-2">React Application</h1>\n      <p className="text-slate-500 leading-relaxed">Welcome to the fundamentals of components.</p>\n    </header>\n  );\n}`,
        
        exportLogic: [
          {
            file: 'src/pages/Fundamentals/Header.jsx',
            content: `export default function Header() {\n  return (\n    <header>\n      <h1>React Application</h1>\n      <p>Welcome to the fundamentals of components.</p>\n    </header>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import Header from './pages/Fundamentals/Header';\n\nexport default function App() {\n  return (\n    <main>\n      <Header />\n    </main>\n  );\n}`
          }
        ],
      },

      'props-destructuring': {
        name: 'Props & Destructuring',
        fileName: 'UserCard.jsx',
        sourcePath: 'src/components/UserCard.jsx',
        initialState: [
          { name: 'Sarah Connor', role: 'Engineer', status: 'Online' },
          { name: 'John Doe', role: 'Designer', status: 'Away' },
          { name: 'Marcus Wright', role: 'Security', status: 'Offline' }
        ],

        code: `export default function UserCard({ name, role, status }) {\n  return (\n    <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm w-full max-w-xs">\n      <h2 className="text-lg font-bold text-slate-800">{name}</h2>\n      <p className="text-sm text-slate-500 mb-3">{role}</p>\n      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">\n        {status}\n      </span>\n    </div>\n  );\n}`,

        exportLogic: [
          {
            file: 'src/components/UserCard.jsx',
            content: `export default function UserCard({ name, role, status }) {\n  return (\n    <div className="card">\n      <h2>{name}</h2>\n      <p>{role}</p>\n      <span className="badge">{status}</span>\n    </div>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import UserCard from './components/UserCard';\n\nexport default function App() {\n  const userData = {\n    name: "Sarah Connor",\n    role: "Engineer",\n    status: "Online"\n  };\n\n  return (\n    <main>\n      {/* Passing props individually */}\n      <UserCard \n        name={userData.name} \n        role={userData.role} \n        status={userData.status} \n      />\n    </main>\n  );\n}`
          }
        ],

        component: 
        }
      },

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