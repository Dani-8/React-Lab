import { Code2, Form, Zap } from 'lucide-react';

// FUNDAMENTALS
import Header from '../pages/Fundamentals/Header?raw'
import PropsDemo from '../pages/Fundamentals/PropsDemo?raw'
import MappingDemo from '../pages/Fundamentals/MappingDemo?raw'

// HOOKS
import UseStateBasicDemo from '../pages/Hooks/UseStateBasicDemo?raw'
import UseStateObjectDemo from '../pages/Hooks/UseStateObjectDemo?raw'
import ConditionalDemo from '../pages/Hooks/ConditionalDemo?raw'
import UseEffectMountDemo from '../pages/Hooks/UseEffectMountDemo?raw'
import UseEffectDepsDemo from '../pages/Hooks/UseEffectDepsDemo?raw'
import UseRefDomDemo from '../pages/Hooks/UseRefDomDemo?raw'
import UseContextDemo from '../pages/Hooks/UseContextDemo?raw'
import UseMemoDemo from '../pages/Hooks/UseMemoDemo?raw'
import UseCallbackDemo from '../pages/Hooks/UseCallbackDemo?raw'

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
      },

      'conditional-rendering': {
        name: 'Conditional Rendering',
        fileName: 'ConditionalDemo.jsx',
        code: ConditionalDemo,
        component: () => import('../pages/Hooks/ConditionalDemo'),
        sourcePath: 'src/pages/Hooks/ConditionalDemo.jsx',
        initialState: { isVisible: false },

        exportLogic: [
          {
            file: 'src/pages/Hooks/ConditionalDemo.jsx',
            content: `import { useState } from 'react';\n\nexport default function ConditionalDemo() {\n  const [isVisible, setIsVisible] = useState(false);\n\n  return (\n    <div className="container">\n      <button onClick={() => setIsVisible(!isVisible)}>\n        {isVisible ? 'Hide' : 'Show'} Secret\n      </button>\n\n      {isVisible && (\n        <div className="secret-box">\n          <p>SECRET_KEY: R34CT_1S_AW350M3</p>\n        </div>\n      )}\n    </div>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import ConditionalDemo from './pages/Hooks/ConditionalDemo';\n\nexport default function App() {\n  return <ConditionalDemo />;\n}`
          }
        ]
      },

      'useeffect-mounting': {
        name: 'useEffect (Mounting)',
        fileName: 'UseEffectMountDemo.jsx',
        code: UseEffectMountDemo,
        component: () => import('../pages/Hooks/UseEffectMountDemo'),
        sourcePath: 'src/pages/Hooks/UseEffectMountDemo.jsx',
        initialState: { status: 'Connecting...', connected: false },

        exportLogic: [
          {
            file: 'src/pages/Hooks/UseEffectMountDemo.jsx',
            content: `import { useState, useEffect } from 'react';\n\nexport default function UseEffectMountDemo() {\n  const [status, setStatus] = useState('Loading...');\n\n  useEffect(() => {\n    // This runs once when component mounts\n    const timer = setTimeout(() => setStatus('Ready!'), 2000);\n    return () => clearTimeout(timer);\n  }, []);\n\n  return <div className="p-8 shadow-lg rounded-2xl bg-white">{status}</div>;\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import UseEffectMountDemo from './pages/Hooks/UseEffectMountDemo';\n\nexport default function App() {\n  return (\n    <div className="min-h-screen bg-gray-50 flex items-center justify-center">\n      <UseEffectMountDemo />\n    </div>\n  );\n}`
          }
        ]
      },

      'useeffect-deps': {
        name: 'useEffect (Deps)',
        fileName: 'UseEffectDepsDemo.jsx',
        code: UseEffectDepsDemo,
        component: () => import('../pages/Hooks/UseEffectDepsDemo'),
        sourcePath: 'src/pages/Hooks/UseEffectDepsDemo.jsx',
        initialState: { userId: 1, loading: false, lastFetch: 'None' },

        exportLogic: [
          {
            file: 'src/pages/Hooks/UseEffectDepsDemo.jsx',
            content: `import { useState, useEffect } from 'react';\n\nexport default function UseEffectDepsDemo() {\n  const [userId, setUserId] = useState(1);\n  const [log, setLog] = useState('');\n\n  useEffect(() => {\n    setLog(\`Started fetch for ID: \${userId}\`);\n    // Dependent on userId state\n  }, [userId]);\n\n  return (\n    <div className="p-6">\n       <button \n         className="px-4 py-2 bg-blue-600 text-white rounded"\n         onClick={() => setUserId(p => p + 1)}\n       >\n         Next User (\${userId})\n       </button>\n       <p className="mt-4 font-mono text-sm">{log}</p>\n    </div>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import UseEffectDepsDemo from './pages/Hooks/UseEffectDepsDemo';\n\nexport default function App() {\n  return (\n    <div className="min-h-screen bg-gray-100 p-12">\n      <UseEffectDepsDemo />\n    </div>\n  );\n}`
          }
        ]
      },

      'useref-dom': {
        name: 'useRef: DOM Access',
        fileName: 'UseRefDomDemo.jsx',
        code: UseRefDomDemo,
        component: () => import('../pages/Hooks/UseRefDomDemo'),
        sourcePath: 'src/pages/Hooks/UseRefDomDemo.jsx',
        initialState: { isFocused: false },

        exportLogic: [
          {
            file: 'src/pages/Hooks/UseRefDomDemo.jsx',
            content: `import { useRef } from 'react';\n\nexport default function UseRefDomDemo() {\n  const inputRef = useRef(null);\n\n  const handleFocus = () => {\n    inputRef.current.focus();\n  };\n\n  return (\n    <div className="p-8">\n      <input ref={inputRef} placeholder="Enter name..." className="border p-2" />\n      <button onClick={handleFocus}>Focus Now</button>\n    </div>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import UseRefDomDemo from './pages/Hooks/UseRefDomDemo';\n\nexport default function App() {\n  return (\n    <div className="h-screen flex items-center justify-center">\n      <UseRefDomDemo />\n    </div>\n  );\n}`
          }
        ]
      },

      'usecontext-global': {
        name: 'useContext: Global State',
        fileName: 'UseContextDemo.jsx',
        code: UseContextDemo,
        component: () => import('../pages/Hooks/UseContextDemo'),
        sourcePath: 'src/pages/Hooks/UseContextDemo.jsx',
        initialState: { theme: 'light' },

        exportLogic: [
          {
            file: 'src/pages/hooks/ThemeContext.js',
            content: `import { createContext } from 'react';\n\nexport const ThemeContext = createContext();`
          },
          {
            file: 'src/pages/hooks/ThemeDisplay.jsx',
            content: `import { useContext } from 'react';\nimport { ThemeContext } from '../context/ThemeContext';\n\nexport default function ThemeDisplay() {\n  const { theme } = useContext(ThemeContext);\n  return (\n    <div className="p-4 rounded-lg border">\n      Current Mode: <b className="uppercase">{theme}</b>\n    </div>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import { useState } from 'react';\nimport { ThemeContext } from './pages/hooks/ThemeContext';\nimport ThemeDisplay from './pages/hooks/ThemeDisplay';\n\nexport default function App() {\n  const [theme, setTheme] = useState('light');\n\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      <div className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white'}>\n        <ThemeDisplay />\n        <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>\n          Toggle Theme\n        </button>\n      </div>\n    </ThemeContext.Provider>\n  );\n}`
          }
        ]
      },

      'usememo-search': {
        name: 'useMemo: Data Filtering',
        fileName: 'UseMemoDemo.jsx',
        code: UseMemoDemo,
        component: () => import('../pages/Hooks/UseMemoDemo'),
        sourcePath: 'src/pages/Hooks/UseMemoDemo.jsx',
        initialState: { query: '' },

        exportLogic: [
          {
            file: 'src/pages/Hooks/UseMemoDemo.jsx',
            content: `import { useState, useMemo } from 'react';\n\nconst MOCK_DATA = [\n  { id: 1, name: 'System' },\n  { id: 2, name: 'Security' }\n];\n\nexport default function UseMemoDemo() {\n  const [query, setQuery] = useState('');\n\n  const results = useMemo(() => {\n    console.log('Filtering...');\n    return MOCK_DATA.filter(i => i.name.includes(query));\n  }, [query]);\n\n  return (\n    <div>\n      <input onChange={e => setQuery(e.target.value)} placeholder="Search" />\n      {results.map(r => <div key={r.id}>{r.name}</div>)}\n    </div>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import UseMemoDemo from './pages/Hooks/UseMemoDemo';\n\nexport default function App() {\n  return (\n    <div className="p-10">\n      <UseMemoDemo />\n    </div>\n  );\n}`
          }
        ]
      },

      'usecallback-form': {
        name: 'useCallback: Form Handler',
        fileName: 'UseCallbackDemo.jsx',
        code: UseCallbackDemo,
        component: () => import('../pages/Hooks/UseCallbackDemo'),
        sourcePath: 'src/pages/Hooks/UseCallbackDemo.jsx',
        initialState: { loading: false, success: false },
        
        exportLogic: [
          {
            file: 'src/pages/Hooks/UseCallbackDemo.jsx',
            content: `import React from 'react';\n\nconst SubmitButton = React.memo(({ onAction }) => {\n  console.log('Button Rendered');\n  return <button onClick={onAction}>Submit</button>;\n});\n\nexport default SubmitButton;`
          },
          {
            file: 'src/App.jsx',
            content: `import { useState, useCallback } from 'react';\nimport SubmitButton from './components/SubmitButton';\n\nexport default function App() {\n  const [text, setText] = useState('');\n\n  const handleAction = useCallback(() => {\n    alert('Action performed: ' + text);\n  }, [text]);\n\n  return (\n    <div>\n      <input onChange={e => setText(e.target.value)} />\n      <SubmitButton onAction={handleAction} />\n    </div>\n  );\n}`
          }
        ]
      }

    }
  }
};