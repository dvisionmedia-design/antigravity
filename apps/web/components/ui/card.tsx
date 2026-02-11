import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    title?: string;
}

export function Card({ children, className, title }: CardProps) {
    return (
        <div
            className={cn(
                "relative bg-cyber-slate/50 border border-cyber-primary/30 p-6 rounded-lg backdrop-blur-sm overflow-hidden group hover:border-cyber-primary/60 transition-colors duration-300",
                className
            )}
        >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyber-primary rounded-tl-sm" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyber-primary rounded-tr-sm" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyber-primary rounded-bl-sm" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyber-primary rounded-br-sm" />

            {/* Decorative Scanline */}
            <div className="absolute inset-0 bg-cyber-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {title && (
                <h3 className="text-cyber-primary text-sm font-mono tracking-wider mb-4 uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyber-secondary rounded-full animate-pulse" />
                    {title}
                </h3>
            )}

            <div className="relative z-10">{children}</div>
        </div>
    );
}
