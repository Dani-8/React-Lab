export default function PropsDemo({ data }) {
  return (
    <div className="p-6 bg-orange-50/50 rounded-xl border border-orange-100 shadow-sm transition-all hover:shadow-md">
      <p className="text-sm text-slate-600">
        Welcome,{' '}
        <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-md font-mono font-bold">
          {data.user || 'Guest'}
        </span>
      </p>
    </div>
  );
}