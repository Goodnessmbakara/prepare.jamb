import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive", size?: "sm" | "md" | "lg" | "icon" }
>(({ className, variant = "primary", size = "md", ...props }, ref) => {
  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 border-transparent",
    secondary: "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 border-transparent",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5",
    ghost: "bg-transparent border-transparent text-foreground hover:bg-muted",
    destructive: "bg-destructive text-destructive-foreground shadow-lg shadow-destructive/25 hover:shadow-xl hover:shadow-destructive/30 border-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
    icon: "w-12 h-12 rounded-xl flex items-center justify-center",
  };

  return (
    <button
      ref={ref}
      className={cn(
        "font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});
Button.displayName = "Button";

export const Card = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn(
      "bg-card rounded-2xl p-6 shadow-xl shadow-black/[0.03] border border-border/60",
      className
    )} 
    {...props}
  >
    {children}
  </div>
);

export const LoadingSpinner = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col items-center justify-center p-12 gap-4 text-primary", className)}>
    <Loader2 className="w-10 h-10 animate-spin" />
    <p className="font-medium animate-pulse">Loading amazing content...</p>
  </div>
);

export const AnimatedTab = ({ 
  tabs, 
  activeTab, 
  onChange 
}: { 
  tabs: string[], 
  activeTab: string, 
  onChange: (tab: string) => void 
}) => {
  return (
    <div className="flex p-1.5 space-x-1 bg-muted/50 rounded-2xl backdrop-blur-sm border border-border/50 w-full md:w-auto overflow-x-auto hide-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={cn(
            "relative px-6 py-3 text-sm font-semibold rounded-xl transition-colors whitespace-nowrap",
            activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-white rounded-xl shadow-sm border border-border/50"
              initial={false}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
};
