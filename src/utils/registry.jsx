import { Code2, Form, Zap } from 'lucide-react';

// FUNDAMENTALS
import Header from '../pages/Fundamentals/Header?raw'
import PropsDemo from '../pages/Fundamentals/PropsDemo?raw'
import MappingDemo from '../pages/Fundamentals/MappingDemo?raw'

// HOOKS
import UseStateDemo from '../pages/Hooks/UseStateDemo?raw'
import UseStateBasicDemo from '../pages/Hooks/UseStateBasicDemo?raw'
import UseStateObjectDemo from '../pages/Hooks/UseStateObjectDemo?raw'

// =================================================================
// =================================================================
// =================================================================
// =================================================================


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

        code: Header,

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
        fileName: 'PropsDemo.jsx',
        component: () => import('../pages/Fundamentals/PropsDemo'),
        sourcePath: 'src/pages/Fundamentals/PropsDemo.jsx',
        initialState: [
          { name: 'Sarah Connor', role: 'System Engineer', status: 'Online' },
          { name: 'John Doe', role: 'UI Designer', status: 'Away' },
          { name: 'Marcus Wright', role: 'Security lead', status: 'Offline' }
        ],

        code: PropsDemo, 

        exportLogic: [
          {
            file: 'src/pages/Fundamentals/PropsDemo.jsx',
            content: `export default function PropsDemo({ name, role, status }) {\n  return (\n    <div className="p-6 border rounded-xl text-center shadow-sm">\n      <div className="avatar">{name.charAt(0)}</div>\n      <h2>{name}</h2>\n      <p>{role}</p>\n      <span className="badge">{status}</span>\n    </div>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import PropsDemo from './pages/Fundamentals/PropsDemo';\n\nexport default function App() {\n  const userData = [\n    { name: "Sarah Connor", role: "System Engineer", status: "Online" },\n    { name: "John Doe", role: "UI Designer", status: "Away" },\n    { name: "Marcus Wright", role: "Security lead", status: "Offline" }\n  ];\n\n  return (\n    <main className="p-10 flex justify-center">\n      {/* Individual prop passing for the first user */}\n\n      <PropsDemo\n        name={userData.name} \n        role={userData.role} \n        status={userData.status} \n      />\n\n    </main>\n  );\n}`
          }
        ],
      },

      'list-keys': {
        name: 'Dynamic Data (Mapping & Keys)',
        fileName: 'MappingDemo.jsx',
        component: () => import('../pages/Fundamentals/MappingDemo'),
        sourcePath: 'src/pages/Fundamentals/MappingDemo.jsx',
        initialState: [
            { id: '1', label: 'React' },
            { id: '2', label: 'Vite' },
            { id: '3', label: 'TailwindCSS' },
        ],

        code: MappingDemo, 

        exportLogic: [
          {
            file: 'src/pages/Fundamentals/MappingDemo.jsx',
            content: `export default function MappingDemo({ items }) {\n\n  return (\n    <div className="list-container">\n      {items.map((item) => (\n        <div key={item.id} className="list-item">\n          <small>{item.id}: </small>\n          <span>{item.label}</span>\n        </div>\n      ))}\n    </div>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import MappingDemo from './pages/Fundamentals/MappingDemo';\n\n export default function App() {\n  const techStack = [\n    { id: '1', label: 'React' },\n    { id: '2', label: 'Vite' }\n  ];\n\n  return <MappingDemo items={techStack} />;\n}`
          }
        ],
      },
      
    }
  },

  // -------------------------------------

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
      },

      'usestate-basic': {
        name: 'useState (Basic)',
        fileName: 'UseStateBasicDemo.jsx',
        code: UseStateBasicDemo,
        component: () => import('../pages/Hooks/UseStateBasicDemo'),
        sourcePath: 'src/pages/Hooks/UseStateBasicDemo.jsx',
        initialState: { count: 0 },
        exportLogic: [
          {
            file: 'src/pages/Hooks/UseStateBasicDemo.jsx',
            content: `import { useState } from 'react';\n\nexport default function UseStateBasicDemo() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <h1>Count: {count}</h1>\n      <button onClick={() => setCount(count - 1)}>-</button>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import UseStateBasicDemo from './pages/Hooks/UseStateBasicDemo';\n\nexport default function App() {\n  return <UseStateBasicDemo />;\n}`
          }
        ]
      },

      'usestate-object': {
        name: 'useState (Object)',
        fileName: 'UseStateObjectDemo.jsx',
        code: UseStateObjectDemo,
        component: () => import('../pages/Hooks/UseStateObjectDemo'),
        sourcePath: 'src/pages/Hooks/UseStateObjectDemo.jsx',
        initialState: { name: 'Alex Doe', email: 'alex@demo.com' },
        exportLogic: [
          {
            file: 'src/pages/Hooks/UseStateObjectDemo.jsx',
            content: `import { useState } from 'react';\n\nexport default function UseStateObjectDemo() {\n  const [user, setUser] = useState({ name: 'Alex', email: 'alex@example.com' });\n\n  return (\n    <div>\n      <p>Name: {user.name}</p>\n      <input class value={user.email} \n        onChange={(e) => setUser({ ...user, email: e.target.value })} \n      />\n    </div>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import UseStateObjectDemo from './pages/Hooks/UseStateObjectDemo';\n\nexport default function App() {\n  return <UseStateObjectDemo />;\n}`
          }
        ]
      }

    }
  }
};