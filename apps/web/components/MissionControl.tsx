"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Activity, Cpu, Database, Globe, Network, Shield, Terminal, Wifi } from "lucide-react";
import { useState } from "react";

export default function MissionControl() {
    const [systemStatus, setSystemStatus] = useState("ONLINE");

    return (
        <div className="min-h-screen p-8 space-y-8">
            {/* Header */}
            <header className="flex justify-between items-center border-b border-cyber-primary/20 pb-6">
                <div>
                    <h1 className="text-4xl font-bold text-cyber-primary text-glow tracking-widest uppercase">
                        Mission Control
                    </h1>
                    <p className="text-cyber-muted font-mono mt-2">
                        System v2.0.4 • <span className="text-cyber-secondary">Connected</span>
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="px-4 py-2 border border-cyber-primary/50 rounded bg-cyber-dark font-mono text-sm flex items-center gap-2">
                        <Wifi className="w-4 h-4 text-cyber-secondary animate-pulse" />
                        NET: STABLE
                    </div>
                    <div className="px-4 py-2 border border-cyber-primary/50 rounded bg-cyber-dark font-mono text-sm flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-cyber-warning" />
                        CPU: 12%
                    </div>
                </div>
            </header>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Status Modules */}
                <Card title="System Integrity" className="col-span-1">
                    <div className="flex items-center justify-between">
                        <Shield className="w-12 h-12 text-cyber-primary opacity-80" />
                        <div className="text-right">
                            <div className="text-3xl font-bold text-cyber-text">98%</div>
                            <div className="text-xs text-cyber-secondary">SECURE</div>
                        </div>
                    </div>
                </Card>

                <Card title="Active Nodes" className="col-span-1">
                    <div className="flex items-center justify-between">
                        <Network className="w-12 h-12 text-cyber-warning opacity-80" />
                        <div className="text-right">
                            <div className="text-3xl font-bold text-cyber-text">14</div>
                            <div className="text-xs text-cyber-warning">RUNNING</div>
                        </div>
                    </div>
                </Card>

                <Card title="Data Stream" className="col-span-1">
                    <div className="flex items-center justify-between">
                        <Database className="w-12 h-12 text-cyber-secondary opacity-80" />
                        <div className="text-right">
                            <div className="text-3xl font-bold text-cyber-text">4.2 TB</div>
                            <div className="text-xs text-cyber-primary">PROCESSING</div>
                        </div>
                    </div>
                </Card>

                <Card title="Global Link" className="col-span-1">
                    <div className="flex items-center justify-between">
                        <Globe className="w-12 h-12 text-cyber-danger opacity-80" />
                        <div className="text-right">
                            <div className="text-3xl font-bold text-cyber-text">85ms</div>
                            <div className="text-xs text-cyber-muted">LATENCY</div>
                        </div>
                    </div>
                </Card>

                {/* Action Center - Large Module */}
                <Card title="Command Center" className="col-span-1 lg:col-span-2 row-span-2">
                    <div className="space-y-4">
                        <div className="p-4 bg-cyber-black/50 rounded border border-cyber-muted/20 font-mono text-sm h-48 overflow-y-auto">
                            <div className="text-cyber-muted">{'>'} System initialized...</div>
                            <div className="text-cyber-muted">{'>'} Checking peripherals... OK</div>
                            <div className="text-cyber-secondary">{'>'} Deployment sequence ready.</div>
                            <div className="text-cyber-primary">{'>'} Waiting for user input_</div>
                            <motion.div
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-2 h-4 bg-cyber-primary ml-1 align-middle"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={async () => {
                                    try {
                                        const res = await fetch('http://localhost:5678/webhook/mission-control', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({ action: 'scan_initiated', user: 'commander' })
                                        });
                                        const data = await res.json();
                                        console.log('Mission Control Response:', data);
                                        alert(`System Response: ${data.message || 'Acknowledged'}`);
                                    } catch (e) {
                                        console.error('Comms Failure:', e);
                                        alert('⚠️ CRITICAL: Uplink Failed');
                                    }
                                }}
                                className="p-3 bg-cyber-primary/10 border border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-cyber-black transition-all font-bold uppercase tracking-wider rounded">
                                Initiate Scan
                            </button>
                            <button className="p-3 bg-cyber-danger/10 border border-cyber-danger text-cyber-danger hover:bg-cyber-danger hover:text-cyber-black transition-all font-bold uppercase tracking-wider rounded">
                                Emergency Stop
                            </button>
                        </div>
                    </div>
                </Card>

                {/* Activity Feed */}
                <Card title="Recent Activity" className="col-span-1 lg:col-span-2">
                    <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-3 p-2 border-b border-cyber-muted/10 last:border-0">
                                <Activity className="w-4 h-4 text-cyber-secondary" />
                                <span className="text-sm font-mono text-cyber-muted">Process ID #{2048 + i} completed successfully</span>
                                <span className="ml-auto text-xs text-cyber-slate opacity-50">12:4{i} PM</span>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Robot Helper Area */}
                <Card className="col-span-1 lg:col-span-2 bg-cyber-primary/5 border-cyber-primary/50">
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-24 h-24 bg-gradient-to-br from-cyber-primary to-cyber-secondary rounded-full flex items-center justify-center shadow-lg shadow-cyber-primary/20">
                                    <div className="w-20 h-20 bg-cyber-black rounded-full flex items-center justify-center relative overflow-hidden">
                                        {/* Robot Face */}
                                        <div className="flex gap-4">
                                            <motion.div
                                                animate={{ scaleY: [1, 0.1, 1] }}
                                                transition={{ delay: 2, duration: 0.2, repeatDelay: 4, repeat: Infinity }}
                                                className="w-4 h-4 bg-cyber-primary rounded-full shadow-[0_0_10px_#00F0FF]"
                                            />
                                            <motion.div
                                                animate={{ scaleY: [1, 0.1, 1] }}
                                                transition={{ delay: 2, duration: 0.2, repeatDelay: 4, repeat: Infinity }}
                                                className="w-4 h-4 bg-cyber-primary rounded-full shadow-[0_0_10px_#00F0FF]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-cyber-text mb-1">Status: Operational</h3>
                            <p className="text-cyber-primary font-mono text-sm max-w-sm">
                                "All systems nominal, Commander! I am ready to process your n8n workflows."
                            </p>
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    );
}
