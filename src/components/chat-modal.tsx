import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Modl } from '../types/type';
import { useChatStore } from '../store.ts/chatstore';
import { X, Send, Trash2, Edit2, Check, XCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const ChatModal: React.FC<Modl> = ({ isOpen, onClose, roomId = "default-room" }) => {
  const { messages, fetchMessages, addMessage, deleteMessage, editMessage, currentUserId, currentUserName } = useChatStore();
  const [newMessage, setNewMessage] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      fetchMessages();
    }
  }, [isOpen, roomId, fetchMessages]);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    addMessage(newMessage.trim());
    setNewMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const startEdit = (id: string, currentText: string) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const saveEdit = (id: string) => {
    if (editText.trim()) {
      editMessage(id, editText.trim());
    }
    setEditingId(null);
    setEditText("");
  };

    const modalContent = (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => onClose(false)}
        />
      )}

      {/* Sidebar Panel */}
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[400px] bg-surface-1/95 border-l border-ui-border shadow-2xl backdrop-blur-xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-ui-border bg-surface-0/50">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Live Chat
          </h2>
          <Button 
            variant="ghost" 
            size="icon-sm"
            onClick={() => onClose(false)}
            className="text-zinc-400 hover:text-white rounded-full h-8 w-8 transition-colors"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-6 no-scrollbar bg-surface-1">
          <div className="flex flex-col justify-end min-h-full space-y-4">
            {messages.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-zinc-500 space-y-3">
                <div className="w-16 h-16 rounded-full bg-surface-2 flex items-center justify-center border border-ui-border">
                  <span className="text-2xl">💬</span>
                </div>
                <p className="text-sm">No messages yet. Start the conversation!</p>
              </div>
            ) : (
              messages.map((msg) => {
                const isMe = currentUserId ? msg.senderId === currentUserId : false;
                
                // Determine what name to show. Use currentUserName if it's my message, otherwise msg.senderName. If none, fallback to "Unknown User".
                const displayName = isMe ? (currentUserName || msg.senderName || "Me") : (msg.senderName || "Unknown User");

                return (
                <div key={msg.id} className={`group flex flex-col gap-1 ${isMe ? 'items-end' : 'items-start'}`}>
                  <div className={`flex items-center justify-between w-full ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
                    <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
                      {displayName}
                    </span>
                  </div>
                  
                  <div className={`relative max-w-[85%] p-3 rounded-2xl text-sm break-words shadow-sm ${
                    isMe 
                      ? 'bg-indigo-600/20 border border-indigo-500/30 text-zinc-100 rounded-tr-sm' 
                      : 'bg-surface-2 border border-ui-border text-zinc-200 rounded-tl-sm'
                  }`}>
                    {editingId === msg.id ? (
                      <div className="flex items-center gap-2">
                        <Input 
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className={`h-8 text-sm ${isMe ? 'bg-surface-2 border-indigo-500/50' : 'bg-surface-0 border-ui-border'}`}
                          autoFocus
                        />
                        <Button size="icon-sm" variant="ghost" onClick={() => saveEdit(msg.id)} className="h-6 w-6 text-green-400 hover:text-green-300">
                          <Check className="w-4 h-4" />
                        </Button>
                        <Button size="icon-sm" variant="ghost" onClick={() => setEditingId(null)} className="h-6 w-6 text-zinc-400 hover:text-zinc-300">
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <span>{msg.text}</span>
                    )}

                    {/* Actions hover menu */}
                    {editingId !== msg.id && isMe && (
                      <div className="absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 -left-16">
                        <Button 
                          size="icon-sm" 
                          variant="ghost" 
                          onClick={() => startEdit(msg.id, msg.text)}
                          className="h-6 w-6 rounded-full text-zinc-400 hover:text-white bg-surface-2/80 backdrop-blur"
                          title="Edit"
                        >
                          <Edit2 className="w-3 h-3" />
                        </Button>
                        <Button 
                          size="icon-sm" 
                          variant="ghost" 
                          onClick={() => deleteMessage(msg.id)}
                          className="h-6 w-6 rounded-full text-zinc-400 hover:text-red-400 hover:bg-red-500/10 bg-surface-2/80 backdrop-blur"
                          title="Delete"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )})
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-surface-0/80 border-t border-ui-border">
          <div className="relative flex items-center gap-2 bg-surface-2 border border-ui-border rounded-full p-1 pl-4 focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all">
            <input 
              type="text" 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..." 
              className="flex-1 bg-transparent border-none text-white text-sm focus:outline-none placeholder:text-zinc-500"
            />
            <Button 
              onClick={handleSend}
              disabled={!newMessage.trim()}
              className="h-9 w-9 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center p-0 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </Button>
          </div>
        </div>
      </div>
    </>
    );
    
    return createPortal(modalContent, document.body);
};
