import React from 'react';

export default function MappingDemo() {
  return (
    <ul className="space-y-2">
      {['React', 'Vite', 'Tailwind', 'Lucide'].map((item, i) => (
        <li
          key={i}
          className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm font-bold text-slate-700"
        >
          {i + 1}. {item}
        </li>
      ))}
    </ul>
  );
}