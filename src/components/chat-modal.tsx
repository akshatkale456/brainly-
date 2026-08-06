import React, { ModifierKey } from 'react';
import { Modl } from '../types/type';



export const ChatModal: React.FC<Modl> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-surface-0 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Chat</h2>
          <button 
            onClick={()=>{
              onClose(!open)
            }}
            className="text-zinc-400 hover:text-white"
          >
            Close
          </button>
        </div>
        <div className="h-64 overflow-y-auto mb-4 border border-zinc-700 rounded p-2">
          {/* Chat messages will go here */}
        </div>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="flex-1 bg-surface-container border-none text-white px-3 py-2 rounded"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
