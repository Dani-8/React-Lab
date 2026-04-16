import { Focus, MousePointer2 } from 'lucide-react'
import { useRef } from 'react'

export default function UseRefDomDemo({ data, setData }) {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
        setData({ ...data, isFocused: true });
    }

    return (
        <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl w-80 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center">
                <Focus size={32} />
            </div>

            <h3 className="text-xl font-black text-slate-900 mb-2">Ref Focus</h3>
            <p className="text-xs text-slate-400 mb-8 font-medium italic">Directly manipulating the DOM input element</p>

            <div className="space-y-4">
                <input
                    ref={inputRef}
                    onBlur={() => setData({ ...data, isFocused: false })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-orange-500 transition-all text-center"
                    placeholder="Click button to focus..."
                />
                <button
                    onClick={handleFocus}
                    className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                    <MousePointer2 size={14} /> Focus Input
                </button>
            </div>
        </div>
    );
}