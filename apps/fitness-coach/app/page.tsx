import ChatInterface from "@/components/ChatInterface";
import { Activity, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
            {/* Header */}
            <div className="w-full max-w-4xl mb-8 flex items-center justify-between animate-pulse">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyber-neon/10 rounded-lg border border-cyber-neon/30">
                        <Activity className="w-6 h-6 text-cyber-neon" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-widest text-cyber-neon uppercase">
                            Fitness Coach Terminal
                        </h1>
                        <p className="text-xs text-cyber-muted font-mono">
                            STATUS: UPLINK ACTIVE | PROTOCOL: EVIDENCE-BASED
                        </p>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-6 text-[10px] font-mono text-cyber-muted uppercase tracking-tighter">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-3 h-3 text-cyber-neon" />
                        Bio-Secure
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="w-3 h-3 text-yellow-400" />
                        Neural-Sync
                    </div>
                </div>
            </div>

            {/* Main Chat Interface */}
            <ChatInterface />

            {/* Footer Info */}
            <div className="w-full max-w-4xl mt-6 flex justify-between items-center text-[10px] font-mono text-cyber-muted/50 uppercase">
                <p>© 2026 ANTIGRAVITY MISSION CONTROL</p>
                <p>COORDINATES: DEEP-GYM-01</p>
            </div>
        </main>
    );
}
