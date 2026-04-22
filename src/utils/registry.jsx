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
import UseFetchDemo from '../pages/Hooks/UseFetchDemo?raw'


// ROUTE
import BasicRoutingDemo from '../pages/Routing/BasicRoutingDemo?raw'
import NestedRoutesDemo from '../pages/Routing/NestedRoutesDemo?raw'
import DynamicRoutesDemo from '../pages/Routing/DynamicRoutesDemo?raw'
import NavigationDemo from '../pages/Routing/NavigationDemo?raw'
import NotFoundDemo from '../pages/Routing/NotFoundDemo?raw'
// import DynamicRoutesDemo from '../pages/Routing/DynamicRoutesDemo?raw'
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
      },

      'custom-hook-fetch': {
        name: 'Custom Hook: useFetch',
        fileName: 'useFetchDemo.jsx',
        code: UseFetchDemo,
        component: () => import('../pages/Hooks/UseFetchDemo'),
        sourcePath: 'src/hooks/useFetchDemo.jsx',
        initialState: { lastFetched: 'None', userId: 1, email: 'Sincere@april.biz' },

        exportLogic: [
          {
            file: 'src/hooks/useFetchDemo.jsx',
            content: `import { useState, useEffect } from 'react';\n\nexport function useFetchDemo(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch(url)\n      .then(res => res.json())\n      .then(json => {\n        setData(json);\n        setLoading(false);\n      });\n  }, [url]);\n\n  return { data, loading };\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import { useFetchDemo } from './hooks/useFetchDemo';\n\nexport default function App() {\n  const { data, loading } = useFetchDemo('https://api.example.com/data');\n\n  if (loading) return <div>Loading...</div>;\n\n  return (\n    <pre>{JSON.stringify(data, null, 2)}</pre>\n  );\n}`
          }
        ]
      }

    }
  },

  // -------------------------------------

  route: {
    title: 'Routing',
    icon: <Form size={14} />,
    examples: {
      'basic-routing': {
        name: 'Basic Routing',
        fileName: 'BasicRoutingDemo.jsx',
        code: BasicRoutingDemo,
        component: () => import('../pages/Routing/BasicRoutingDemo'),
        sourcePath: 'src/pages/Routing/BasicRoutingDemo.jsx',
        initialState: { activeRoute: '/home', timestamp: '--' },

        exportLogic: [
          {
            file: 'src/pages/Home.jsx',
            content: `import React from 'react';\n\nexport default function Home() {\n  return (\n    <div>\n      <h2 className="text-xl font-bold text-slate-900">Homepage</h2>\n      <p className="text-sm text-slate-500">Welcome to the home screen.</p>\n    </div>\n  );\n}`
          },
          {
            file: 'src/pages/About.jsx',
            content: `import React from 'react';\n\nexport default function About() {\n  return (\n    <div>\n      <h2 className="text-xl font-bold text-slate-900">About Page</h2>\n      <p className="text-sm text-slate-500">Details about our team.</p>\n    </div>\n  );\n}`
          },
          {
            file: 'src/pages/Settings.jsx',
            content: `import React from 'react';\n\nexport default function Settings() {\n  return (\n    <div>\n      <h2 className="text-xl font-bold text-slate-900">Settings</h2>\n      <p className="text-sm text-slate-500">App configuration settings.</p>\n    </div>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import React from 'react';\nimport { Link, Outlet } from "react-router-dom";\n\nexport default function App() {\n\n  return (\n    <div className="p-8 text-center min-h-screen bg-slate-50">\n      <nav className='flex items-center justify-center gap-6 mb-10 bg-white p-4 rounded-2xl shadow-sm border border-slate-200 max-w-fit mx-auto'>\n        <Link to="/" className="font-bold text-slate-600 hover:text-blue-600 transition-colors">Home</Link>\n        <Link to="/about" className="font-bold text-slate-600 hover:text-blue-600 transition-colors">About</Link>\n        <Link to="/setting" className="font-bold text-slate-600 hover:text-blue-600 transition-colors">Settings</Link>\n      </nav>\n\n      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">\n        <Outlet />\n      </div>\n    </div>\n  );\n}`
          },
          {
            file: 'src/main.jsx',
            content: `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { createBrowserRouter, RouterProvider } from 'react-router-dom';\nimport App from './App';\nimport Home from './pages/Home';\nimport About from './pages/About';\nimport Settings from './pages/Setting';\n\nconst router = createBrowserRouter([\n  {\n    path: '/',\n    element: <App />,\n    children: [\n      {\n        index: true,\n        element: <Home />\n      },\n      {\n        path: "about",\n        element: <About />\n      },\n      {\n        path: "setting",\n        element: <Settings />\n      },\n    ]\n  },\n]);\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <RouterProvider router={router} />\n  </React.StrictMode>\n);`
          }
        ]
      },

      'nested-routes': {
        name: 'Nested Routes (Dashboard)',
        fileName: 'NestedRoutesDemo.jsx',
        sourcePath: 'src/pages/Routing/NestedRoutesDemo.jsx',
        code: NestedRoutesDemo,
        component: () => import('../pages/Routing/NestedRoutesDemo'),
        initialState: { path: '/dashboard/overview', layout: 'DashboardLayout' },

        exportLogic: [
          {
            file: 'src/components/Sidebar.jsx',
            content: `import React from 'react';\nimport { NavLink } from 'react-router-dom';\nimport { Layout, Users, Settings, LogOut } from 'lucide-react';\n\nexport default function Sidebar() {\n  const menu = [\n    { path: '/', icon: <Layout size={20} />, label: 'Overview' },\n    { path: '/team', icon: <Users size={20} />, label: 'Team' },\n  ];\n\n  return (\n    <aside className="w-64 bg-slate-900 text-white flex flex-col p-6">\n      <div className="text-xl font-black mb-10 text-blue-500">LAB.IO</div>\n      <nav className="flex-1 space-y-2">\n        {menu.map(item => (\n          <NavLink\n            key={item.path}\n            to={item.path}\n            className={({ isActive }) => \`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all \${\n              isActive ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'\n            }\`}\n          >\n            {item.icon}\n            <span className="font-bold text-sm">{item.label}</span>\n          </NavLink>\n        ))}\n      </nav>\n    </aside>\n  );\n}`
          },
          {
            file: 'src/layouts/DashboardLayout.jsx',
            content: `import React from 'react';\nimport { Outlet, useLocation } from 'react-router-dom';\nimport Sidebar from '../components/Sidebar';\n\nexport default function DashboardLayout() {\n  const { pathname } = useLocation();\n  const title = pathname === '/' ? 'Overview' : pathname.replace('/', '');\n\n  return (\n    <div className="flex min-h-screen bg-slate-50">\n      <Sidebar />\n      <main className="flex-1 flex flex-col">\n        <header className="h-20 bg-white border-b border-slate-200 px-10 flex items-center justify-between">\n          <h2 className="text-lg font-black text-slate-800 capitalize">{title}</h2>\n        </header>\n        <div className="p-10">\n          <Outlet />\n        </div>\n      </main>\n    </div>\n  );\n}`
          },
          {
            file: 'src/pages/Overview.jsx',
            content: `import React from 'react';\nimport { Activity, PieChart } from 'lucide-react';\n\nexport default function Overview() {\n  return (\n    <div className="space-y-6">\n      <div className="grid grid-cols-3 gap-6">\n        {[1, 2, 3].map(i => (\n          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200">\n            <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-4"><Activity size={20}/></div>\n            <div className="text-2xl font-black">2,40{i}</div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n}`
          },
          {
            file: 'src/pages/Team.jsx',
            content: `import React from 'react';\nimport { Users } from 'lucide-react';\n\nexport default function Team() {\n  return (\n    <div className="grid grid-cols-3 gap-6">\n      {['Alice', 'Bob', 'Charlie'].map(name => (\n        <div key={name} className="bg-white p-6 rounded-lg border border-slate-200 flex items-center gap-3">\n          <Users size={20} />\n          <span className="font-bold">{name}</span>\n        </div>\n      ))}\n    </div>\n  );\n}`  },
          {
            file: 'src/App.jsx',
            content: `// App.jsx is now just a pass-through or can be deleted\nimport { Outlet } from 'react-router-dom';\nexport default function App() {\n  return <Outlet />;\n}`
          },
          {
            file: "src/main.jsx",
            content: `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { createBrowserRouter, RouterProvider } from 'react-router-dom';\nimport DashboardLayout from './layouts/DashboardLayout';\nimport Overview from './pages/Overview';\nimport Team from './pages/Team';\n\nconst router = createBrowserRouter([\n  {\n    path: '/',\n    element: <DashboardLayout />,\n    children: [\n      { index: true, element: <Overview /> },\n      { path: 'team', element: <Team /> }\n    ]\n  }\n]);\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <RouterProvider router={router} />\n);`
          }
        ]
      },

      'dynamic-routes': {
        name: 'Dynamic Routes',
        fileName: 'DynamicRoutesDemo.jsx',
        sourcePath: 'src/pages/Routing/DynamicRoutesDemo.jsx',
        code: DynamicRoutesDemo,
        component: () => import('../pages/Routing/DynamicRoutesDemo'),
        initialState: { currentParams: { id: '101' }, url: '/users/101' },

        exportLogic: [
          {
            file: 'src/components/UserHeader.jsx',
            content: `import React from 'react';\nimport { User } from 'lucide-react';\n\nexport default function UserHeader({ id }) {\n  return (\n    <div className="text-center mb-10">\n      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">\n        <User size={40} className="text-blue-500" />\n      </div>\n\n      <h1 className="text-3xl font-black text-slate-900">User Profile</h1>\n      <p className="text-slate-400 font-mono text-sm">UID: {id}</p>\n    </div>\n  );\n}`
          },
          {
            file: 'src/components/UserStats.jsx',
            content: `import React from 'react';\n\nexport default function UserStats() {\n  return (\n    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">\n      <div className="grid grid-cols-2 gap-4 text-center">\n        <div>\n          <div className="text-2xl font-black">124</div>\n          <div className="text-[10px] font-bold text-slate-400 uppercase">Posts</div>\n        </div>\n\n        <div>\n          <div className="text-2xl font-black">4.2k</div>\n          <div className="text-[10px] font-bold text-slate-400 uppercase">Followers</div>\n        </div>\n      </div>\n    </div>\n  );\n}`
          },
          {
            file: 'src/pages/UserDetail.jsx',
            content: `import React from 'react';\nimport { useParams } from 'react-router-dom';\nimport UserHeader from '../components/UserHeader';\nimport UserStats from '../components/UserStats';\n\nexport default function UserDetail() {\n  const { id } = useParams();\n\n  return (\n    <div className="p-10">\n      <UserHeader id={id} />\n      <UserStats />\n    </div>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import { Outlet } from 'react-router-dom';\n\nexport default function App() {\n  return (\n    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">\n      <div className="max-w-md w-full">\n        <Outlet />\n      </div>\n    </main>\n  );\n}`
          },
          {
            file: 'src/main.jsx',
            content: `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { createBrowserRouter, RouterProvider } from 'react-router-dom';\nimport App from './App';\nimport UserDetail from './pages/UserDetail';\n\nconst router = createBrowserRouter([\n  {\n    path: '/',\n    element: <App />,\n    children: [\n      {\n        index: true,\n        element: <div className="p-10 text-center">Home Page - Navigate to /user/1</div>\n      },\n      {\n        path: 'user',\n        element: <div className="p-10 text-center">Please provide a User ID - /user/1</div>\n      },\n      {\n        path: 'user/:id',\n        element: <UserDetail />\n      }\n    ]\n  }\n]);\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <RouterProvider router={router} />\n  </React.StrictMode>\n);`
          }
        ]
      },

      'navigation-logic': {
        name: 'Navigation & Redirects',
        fileName: 'NavigationDemo.jsx',
        code: NavigationDemo,
        component: () => import("../pages/Routing/NavigationDemo"),
        initialState: { action: 'none', target: '/', status: 'idle' },

        exportLogic: [
          {
            file: 'src/pages/Landing.jsx',
            content: `import React from 'react';\nimport { Link, useNavigate } from 'react-router-dom';\n\nexport default function Landing() {\n  const navigate = useNavigate();\n\n  return (\n    <div className="p-10">\n      <h1>Welcome</h1>\n      <Link to="/about" className="btn">About (Link)</Link>\n      <button onClick={() => navigate('/dashboard')} className="btn">Dashboard (useNavigate)</button>\n    </div>\n  );\n}`
          },
          {
            file: 'src/pages/Dashboard.jsx',
            content: `import React from 'react';\n\nexport default function Dashboard() {\n  return <h1>Dashboard - Private Access</h1>;\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport Landing from './pages/Landing';\nimport Dashboard from './pages/Dashboard';\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<Landing />} />\n        <Route path="/dashboard" element={<Dashboard />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}`
          }
        ]
      },

      'not-found-pattern': {
        name: '404 Catch-All Route',
        fileName: 'NotFoundDemo.jsx',
        code: NotFoundDemo,
        component: () => import('../pages/Routing/NotFoundDemo'),
        initialState: { resolved: true, currentPath: '/home' },

        exportLogic: [
          {
            file: 'src/pages/NotFound.jsx',
            content: `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nexport default function NotFound() {\n  return (\n    <div className="error-page">\n      <h1>404 - Page Not Found</h1>\n      <p>Sorry, the page you're looking for doesn't exist.</p>\n      <Link to="/">Return to Home</Link>\n    </div>\n  );\n}`
          },
          {
            file: 'src/App.jsx',
            content: `import { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport Home from './pages/Home';\nimport About from './pages/About';\nimport NotFound from './pages/NotFound';\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n        {/* The asterisk (*) catches everything else */}\n        <Route path="*" element={<NotFound />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}`
          }
        ]
      }    

    }
  }
};