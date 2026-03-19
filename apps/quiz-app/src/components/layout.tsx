import { Link, useLocation } from "wouter";
import { BookOpen, Home, Trophy, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { label: "Dashboard", href: "/", icon: Home },
    { label: "Progress", href: "/progress", icon: Trophy },
  ];

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Focus trap for mobile menu
      const focusableElements = mobileMenuRef.current?.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Skip to main content - for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none" aria-hidden="true" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 glass-panel border-b border-border/50" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
              aria-label="JAMB Prep - Go to home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary p-0.5 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                JAMB Prep
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary relative py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-2",
                    location === item.href ? "text-primary" : "text-muted-foreground"
                  )}
                  aria-current={location === item.href ? "page" : undefined}
                >
                  <item.icon className="w-4 h-4" aria-hidden="true" />
                  {item.label}
                  {location === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full shadow-[0_-2px_8px_rgba(0,135,81,0.5)]" aria-hidden="true" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              ref={mobileMenuButtonRef}
              className="md:hidden p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-border shadow-xl py-4 px-4 flex flex-col gap-2"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary",
                  location === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                )}
                aria-current={location === item.href ? "page" : undefined}
              >
                <item.icon className="w-5 h-5" aria-hidden="true" />
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main
        id="main-content"
        className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"
        role="main"
      >
        {children}
      </main>
    </div>
  );
}
