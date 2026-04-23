import { useState } from "react";
import { Tag, Trash2, Plus, ShoppingCart,  } from "lucide-react";

export default function CartSliceDemo({ data, setData }) {
    const [items, setItems] = useState([]);

    const addToCart = () => {
        const newItem = { id: Date.now(), name: 'Pro Module', price: 49 };
        const newList = [...items, newItem];
        setItems(newList);
        setData({ action: 'cart/addItem', payload: newItem, totalItems: newList.length });
    };

    const remove = (id) => {
        const newList = items.filter(i => i.id !== id);
        setItems(newList);
        setData({ action: 'cart/removeItem', payload: id, totalItems: newList.length });
    };

    return (
        <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl w-80">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                        <ShoppingCart size={16} />
                    </div>

                    <span className="font-black text-xs uppercase tracking-tight">Checkout</span>
                </div>

                <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{items.length} Items</span>
            </div>

            <div className="space-y-2 mb-6 h-32 overflow-y-auto pr-2 custom-scrollbar">
                {items.length === 0 ? (
                    <div className="h-full flex items-center justify-center border-2 border-dashed border-slate-50 rounded-2xl text-slate-300 text-[10px] font-bold uppercase">
                        Empty Cart
                    </div>
                ) : (
                    items.map(item => (
                        <div key={item.id} className="p-3 bg-slate-50 rounded-xl flex items-center justify-between group">
                            <div className="flex items-center gap-3">
                                <Tag size={12} className="text-slate-400" />
                                <span className="text-[10px] font-bold text-slate-600">{item.name} <span className="text-[9px] text-orange-400">(new item)</span></span>
                            </div>

                            <button onClick={() => remove(item.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                                <Trash2 size={12} />
                            </button>
                        </div>
                    ))
                )}
            </div>


            <button onClick={addToCart}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
                <Plus size={14} /> Add Item ($49)
            </button>
        </div>
    );
}