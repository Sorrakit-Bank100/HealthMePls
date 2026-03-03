"use client";

import { useState, useEffect } from "react";

const navLinks = [
    { label: "Software", href: "#software-name" },
    { label: "Company", href: "#company" },
    { label: "Architecture", href: "#architecture" },
    { label: "Features", href: "#functionalities" },
    { label: "Interfaces", href: "#user-interfaces" },
    { label: "Screenshots", href: "#screen-results" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map((l) => l.href.replace("#", ""));
            let current = "";
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        current = id;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[1000] px-6 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${scrolled
                    ? "py-3 bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
                    : "py-[18px] bg-transparent"
                }`}
        >
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#software-name"
                    className={`flex items-center gap-2.5 no-underline font-extrabold text-[1.35rem] tracking-tight transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"
                        }`}
                >
                    <span className="w-9 h-9 rounded-[10px] gradient-logo flex items-center justify-center text-lg text-white">
                        ♥
                    </span>
                    HealthMe
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`no-underline py-2 px-4 rounded-full text-[0.9rem] font-semibold transition-all duration-300 ${isActive
                                        ? "text-white gradient-primary"
                                        : scrolled
                                            ? "text-gray-600 hover:text-primary"
                                            : "text-white/85 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden bg-transparent border-none cursor-pointer p-2"
                    aria-label="Toggle menu"
                >
                    <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={scrolled ? "#1a1a2e" : "#fff"}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    >
                        {menuOpen ? (
                            <>
                                <line x1="6" y1="6" x2="18" y2="18" />
                                <line x1="6" y1="18" x2="18" y2="6" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white/[0.98] backdrop-blur-2xl py-4 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col gap-1">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`no-underline py-3 px-4 rounded-xl text-[0.95rem] font-semibold transition-all duration-200 ${isActive
                                        ? "text-primary bg-bg-section"
                                        : "text-gray-600 hover:bg-gray-50"
                                    }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}
