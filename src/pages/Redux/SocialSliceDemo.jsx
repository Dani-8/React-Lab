import { useState } from "react";
import { Bell } from "lucide-react";

export default function CounterSliceDemo({ data, setData }) {
    const [notes, setNotes] = useState([
        { id: 1, text: 'New follower: @lexi', read: false, time: '2m' },
        { id: 2, text: 'Post liked by @dev_m', read: false, time: '5m' },
        { id: 3, text: 'Mentioned in "React Tips"', read: true, time: '1h' }
    ]);

    const unreadCount = notes.filter(n => !n.read).length;

    const handleRead = (id) => {
        const updated = notes.map(n => n.id === id ? { ...n, read: true } : n);
        setNotes(updated);
        setData({
            action: 'social/markAsRead',
            unreadCount: updated.filter(n => !n.read).length,
            lastReadId: id
        });
    };

    return (
        <div className="w-80 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                <h3 className="font-black text-sm tracking-tight">Activity</h3>

                <div className="relative">
                    <Bell size={18} className="text-slate-400" />
                    {unreadCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-white">
                            {unreadCount}
                        </span>
                    )}
                </div>
            </div>


            <div className="p-4 space-y-2 h-48 overflow-y-auto">
                {notes.map(note => (
                    <div
                        key={note.id}
                        onClick={() => handleRead(note.id)}
                        className={`p-3 rounded-2xl cursor-pointer transition-all flex items-start gap-3 ${note.read ? 'bg-white opacity-50' : 'bg-slate-50 hover:bg-slate-100'}`}
                    >
                        <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${note.read ? 'bg-slate-200' : 'bg-blue-500'}`} />
                        <div className="flex-1">
                            <p className="text-[10px] font-bold text-slate-700 leading-tight">{note.text}</p>
                            <span className="text-[8px] text-slate-400 font-medium">{note.time} ago</span>
                        </div>
                    </div>
                ))}
            </div>


            <div className="p-4 bg-slate-50/50 border-t border-slate-100">
                <div className="flex justify-between items-center text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    <span>Selector Result</span>
                    <span className="text-blue-600">{unreadCount} Unread</span>
                </div>
            </div>
        </div>
    );
}