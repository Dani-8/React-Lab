import { Code2, Zap } from 'lucide-react';


export const REGISTRY = {
  fundamentals: {
    title: 'Fundamentals',
    icon: <Code2 size={14} />,
    examples: {
      'props-pattern': {
        name: 'Props Pattern',
        component: () => import('../pages/Fundamentals/PropsDemo'),
        code: `// standard functional component\nfunction Welcome({ name }) {\n  return (\n    <div className="card">\n      <p>Hello, {name}!</p>\n    </div>\n  );\n}\n\nexport default Welcome;`,
        exportLogic: [
          { file: 'src/components/Welcome.jsx', content: `export default function Welcome({ name }) {\n  return <p>{name}</p>;\n}` },
          { file: 'src/App.jsx', content: `import Welcome from './components/Welcome';\n\nfunction App() {\n  return <Welcome name="Explorer" />;\n}` }
        ],
        initialState: { user: 'Explorer' }
      },
      // ------------------------------------

      'list-keys': {
        name: 'Map & Keys',
        component: () => import('../pages/Fundamentals/MappingDemo'),
        code: `const List = ({ items }) => (\n  <ul>\n    {items.map((item, index) => (\n      <li key={index}>{item}</li>\n    ))}\n  </ul>\n);`,
        exportLogic: [
          { file: 'src/utils/data.js', content: `export const tech = ['React', 'Vite'];` },
          { file: 'src/List.jsx', content: `import { tech } from './utils/data';\n\nexport default () => tech.map(t => <li key={t}>{t}</li>);` }
        ],
        initialState: {}
      }
    }
  },
  // ---------------------------------------------------------------

  hooks: {
    title: 'Core Hooks',
    icon: <Zap size={14} />,
    examples: {
      'use-state': {
        name: 'useState Objects',
        component: () => import('../pages/Hooks/UseStateDemo'),
        code: `const [user, setUser] = useState({ name: 'John', level: 1 });\n\nconst upgrade = () => {\n  setUser(prev => ({\n    ...prev,\n    level: prev.level + 1\n  }));\n};`,
        exportLogic: [
          { file: 'src/hooks/usePlayer.js', content: `import { useState } from 'react';\n\nexport const usePlayer = () => {\n  const [val, set] = useState({ lvl: 1 });\n  return [val, set];\n};` }
        ],
        initialState: { name: 'John Doe', level: 1 }
      }
    }
  }
  // ---------------------------------------------------------------

}