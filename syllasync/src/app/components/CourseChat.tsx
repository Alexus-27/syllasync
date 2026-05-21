"use client";

import { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { Send, MessageSquare } from "lucide-react";

interface Message {
  id?: string;
  senderId: string;
  senderName: string;
  senderRole: string;
  content: string;
  timestamp: string;
}

interface CourseChatProps {
  courseId: string;
  currentUserId: string;
  currentUserName: string;
  currentUserRole: string;
}

export default function CourseChat({ courseId, currentUserId, currentUserName, currentUserRole }: CourseChatProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Socket.IO connection
    const newSocket = io();
    
    newSocket.on("connect", () => {
      newSocket.emit("join_course", courseId);
    });

    newSocket.on("receive_message", (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [courseId]);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !socket) return;

    const messageData: Message = {
      senderId: currentUserId,
      senderName: currentUserName,
      senderRole: currentUserRole,
      content: newMessage.trim(),
      timestamp: new Date().toISOString(),
    };

    socket.emit("send_message", { ...messageData, courseId });
    setNewMessage("");
    
    // In a full implementation, you would also POST to /api/messages here
    // to persist it in the Prisma database.
  };

  return (
    <div className="flex flex-col h-[500px] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl">
      <div className="p-4 border-b border-neutral-800 bg-neutral-900/80 backdrop-blur flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-indigo-400" />
        <h3 className="font-semibold">Live Course Chat</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-neutral-500 text-sm">
            No messages yet. Be the first to say hello!
          </div>
        ) : (
          messages.map((msg, index) => {
            const isMe = msg.senderId === currentUserId;
            return (
              <div key={index} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                {!isMe && (
                  <span className="text-xs text-neutral-400 mb-1 ml-1">
                    {msg.senderName} {msg.senderRole === "PROFESSOR" && <span className="text-indigo-400 font-medium">(Professor)</span>}
                  </span>
                )}
                <div 
                  className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    isMe 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-neutral-800 text-neutral-100 rounded-tl-none'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
                <span className="text-[10px] text-neutral-500 mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t border-neutral-800 bg-neutral-950/50">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all placeholder:text-neutral-600"
          />
          <button 
            type="submit" 
            disabled={!newMessage.trim()}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white p-2.5 rounded-xl transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}
