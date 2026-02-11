"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, Sparkles, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface Message {
    id: string;
    role: "user" | "bot";
    content: string;
    timestamp: Date;
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "bot",
            content: "Uplink established. I am your Evidence-Based Fitness Coach. How can I assist your physical development protocol today?",
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: input,
                    sessionId: "fitness-coach-session-1",
                }),
            });

            const data = await response.json();

            if (data.success) {
                const botMsg: Message = {
                    id: (Date.now() + 1).toString(),
                    role: "bot",
                    content: data.output,
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, botMsg]);
            } else {
                throw new Error(data.error || "Failed to get response");
            }
        } catch (error) {
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                content: "PROTOCOL ERROR: Unable to synchronize with neural core. Please check your uplink connection.",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl flex flex-col h-[70vh] glass-panel rounded-2xl overflow-hidden relative">
            {/* Visual Accents */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-neon to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-neon/20 to-transparent opacity-30" />

            {/* Chat History */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
            >
                <AnimatePresence initial={false}>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.2 }}
                            className={cn(
                                "flex items-start gap-4",
                                msg.role === "user" ? "flex-row-reverse" : "flex-row"
                            )}
                        >
                            {/* Avatar */}
                            <div className={cn(
                                "p-2 rounded-lg border shrink-0",
                                msg.role === "user"
                                    ? "bg-cyber-steel border-cyber-muted/30"
                                    : "bg-cyber-neon/10 border-cyber-neon/30 neon-glow"
                            )}>
                                {msg.role === "user" ? (
                                    <User className="w-5 h-5 text-cyber-muted" />
                                ) : (
                                    <Bot className="w-5 h-5 text-cyber-neon" />
                                )}
                            </div>

                            {/* Content Bubble */}
                            <div className={cn(
                                "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed",
                                msg.role === "user"
                                    ? "bg-cyber-steel/50 border border-cyber-muted/10 text-white rounded-tr-none"
                                    : "bg-cyber-neon/5 border border-cyber-neon/10 text-cyber-neon/90 rounded-tl-none"
                            )}>
                                {msg.role === "bot" && (
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-cyber-neon/50">
                                            Coach Response
                                        </span>
                                        <Sparkles className="w-3 h-3 text-cyber-neon/30" />
                                    </div>
                                )}
                                <div className="whitespace-pre-wrap">{msg.content}</div>
                                <div className="mt-2 text-[9px] font-mono text-cyber-muted opacity-50 uppercase">
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-3 text-cyber-neon/50 font-mono text-xs italic"
                    >
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing biomechanical data...
                    </motion.div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-cyber-charcoal/50 border-t border-cyber-neon/10">
                <div className="relative group">
                    <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyber-neon/30 group-focus-within:text-cyber-neon transition-colors" />
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Command input (e.g., 'Draft a 3-day split')..."
                        className="w-full bg-cyber-steel/30 border border-cyber-neon/10 rounded-xl py-4 pl-12 pr-16 text-sm text-white focus:outline-none focus:border-cyber-neon/50 focus:ring-1 focus:ring-cyber-neon/20 transition-all placeholder:text-cyber-muted/30"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-cyber-neon text-cyber-charcoal rounded-lg hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed group-active:scale-95 transition-transform"
                    >
                        {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <Send className="w-5 h-5" />
                        )}
                    </button>
                </div>
                <div className="mt-2 flex justify-center">
                    <p className="text-[9px] font-mono text-cyber-muted uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1 h-1 bg-cyber-neon rounded-full animate-ping" />
                        Direct Uplink to AI Core
                    </p>
                </div>
            </div>
        </div>
    );
}
