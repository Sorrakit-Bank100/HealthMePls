export default function Footer() {
    const links = [
        { label: "Software", href: "#software-name" },
        { label: "Company", href: "#company" },
        { label: "Architecture", href: "#architecture" },
        { label: "Features", href: "#functionalities" },
        { label: "Interfaces", href: "#user-interfaces" },
        { label: "Screenshots", href: "#screen-results" },
    ];

    return (
        <footer className="gradient-footer text-white/70 pt-12 pb-8 px-6">
            <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center gap-6">
                {/* Logo & Copyright */}
                <div>
                    <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-8 h-8 rounded-lg gradient-logo flex items-center justify-center text-base text-white">
                            ♥
                        </span>
                        <span className="font-bold text-[1.1rem] text-white">
                            HealthMe
                        </span>
                    </div>
                    <p className="text-[0.85rem] m-0">
                        © {new Date().getFullYear()} HealthMe. All rights reserved.
                    </p>
                </div>

                {/* Links */}
                <div className="flex gap-6 flex-wrap">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-white/60 no-underline text-[0.88rem] font-medium transition-colors duration-300 hover:text-primary-light"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
