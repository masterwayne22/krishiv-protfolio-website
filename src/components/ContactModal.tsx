import React, { useState, useEffect } from "react";
import { X, Send, Check } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("krishiv_portfolio_messages");
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([
        {
          id: "welcome",
          sender: "bot",
          text: "Hi there! Thanks for visiting my portfolio. Feel free to leave a message, and my simulated AI assistant (or the real me) will get back to you! What are you working on?",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    }
  }, []);

  const saveMessages = (updated: Message[]) => {
    localStorage.setItem("krishiv_portfolio_messages", JSON.stringify(updated));
    setMessages(updated);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    const newMsgs = [...messages, userMsg];
    saveMessages(newMsgs);
    setInputText("");
    setIsSending(true);

    // Simulate smart developer bot response
    setTimeout(() => {
      let botResponse = "Awesome! I've received your message. I am usually quick to respond on email (krishiv180@gmail.com) or LinkedIn!";
      
      const lower = inputText.toLowerCase();
      if (lower.includes("project") || lower.includes("work")) {
        botResponse = "I'd love to collaborate on exciting projects! My primary focus is on secure developer identities and cinematic frontends. If you need a custom engineered stack, let me know.";
      } else if (lower.includes("hire") || lower.includes("internship") || lower.includes("job")) {
        botResponse = "Thanks for the interest! I'm currently seeking internship opportunities for late 2026 or professional developer roles. I'd love to schedule a briefing call!";
      }

      const replyMsg: Message = {
        id: `reply-${Date.now()}`,
        sender: "bot",
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      saveMessages([...newMsgs, replyMsg]);
      setIsSending(false);
    }, 1200);
  };

  const cleanHistory = () => {
    const initial: Message[] = [
      {
        id: "welcome",
        sender: "bot",
        text: "Conversation history reset. Write a message below!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ];
    saveMessages(initial);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="h-full w-full max-w-md bg-gray-950 border-l border-zinc-800 flex flex-col justify-between shadow-2xl relative animate-slide-left p-0">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-zinc-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Connect with Krishiv
            </h3>
            <p className="text-xs text-zinc-400 font-mono mt-1">RESPONSE: ASYNC INBOX</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 px-2.5 text-zinc-400 hover:text-zinc-100 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-md transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messaging Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((m) => (
            <div 
              key={m.id} 
              className={`flex flex-col max-w-[85%] ${m.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"}`}
            >
              <div 
                className={`p-3.5 rounded-xl text-sm leading-relaxed ${
                  m.sender === "user" 
                    ? "bg-zinc-100 text-zinc-950 rounded-br-none" 
                    : "bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-bl-none"
                }`}
              >
                {m.text}
              </div>
              <span className="text-[10px] font-mono text-zinc-500 mt-1 px-1">{m.timestamp}</span>
            </div>
          ))}

          {isSending && (
            <div className="flex items-center gap-2 mr-auto bg-zinc-900 border border-zinc-800 rounded-xl rounded-bl-none p-3.5 text-xs text-zinc-400 max-w-[70%]">
              <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
              <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
              <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
              Krishiv's agent is drafting...
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="p-6 border-t border-zinc-800 bg-zinc-950/80 backdrop-blur">
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Suggest a project, or say hello..."
              className="flex-1 bg-zinc-900 border border-zinc-800 focus:border-zinc-600 rounded-lg text-sm px-4 py-3 outline-none transition text-zinc-200 placeholder:text-zinc-500"
            />
            <button
              type="submit"
              disabled={isSending || !inputText.trim()}
              className="bg-zinc-100 hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-950 font-medium px-4 rounded-lg flex items-center justify-center transition"
            >
              <Send size={16} />
            </button>
          </form>

          <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Direct: krishiv180@gmail.com</span>
            <button 
              type="button" 
              onClick={cleanHistory} 
              className="hover:text-red-400 underline transition cursor-pointer"
            >
              Clear Chat Context
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
