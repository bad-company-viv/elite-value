import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const routes = [
        { name: 'Mumbai Airport Transfer', href: '#booking-form' },
        { name: 'Pune Airport Transfer', href: '#booking-form' },
        {
            name: 'Mumbai → Pune Airport Transfer',
            href: '#booking-form',
            desc: 'Daily pick and drop with doorstep services',
        },
    ];

    return (
        <nav
            className={`fixed w-full z-[60] transition-all duration-500 py-4 sm:py-6 ${isScrolled ? 'bg-[#121212] py-3 shadow-2xl' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="bg-[#1c1c1e] border border-white/10 rounded-[24px] px-6 py-3 sm:py-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 shadow-2xl">
                    {/* Logo Area */}
                    <div
                        className="flex-shrink-0 cursor-pointer group"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="bg-white/5 px-4 py-2 rounded-2xl border border-white/5 group-hover:border-primary transition-all duration-500 flex items-center justify-center">
                            <img
                                alt="Elite Prime Logo"
                                className="h-10 sm:h-12 md:h-14 w-auto object-contain brightness-110"
                                src="/logo.png"
                            />
                        </div>
                    </div>

                    {/* Navigation Items - Centered */}
                    <div className="hidden lg:flex flex-grow items-center justify-center gap-8 xl:gap-16">
                        {routes.map((route, idx) => (
                            <a
                                key={route.name}
                                href={route.href}
                                className="group flex flex-col items-start lg:items-center transition-all duration-300"
                            >
                                <span className="text-white font-bold text-sm xl:text-[16px] tracking-tight group-hover:text-primary transition-colors">
                                    {route.name}
                                </span>
                                {route.desc && (
                                    <span className="text-[#a1a1a6] text-[10px] xl:text-[11px] font-medium leading-tight group-hover:text-[#f5f5f7] transition-colors mt-0.5">
                                        {route.desc}
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex-shrink-0">
                        <a
                            href="#booking-form"
                            className="bg-[#ffcc00] hover:bg-[#e6b800] text-black font-black px-6 xl:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl shadow-[#ffcc00]/10 hover:shadow-[#ffcc00]/25 uppercase text-[11px] sm:text-xs tracking-widest"
                        >
                            Book Now
                        </a>
                    </div>
                </div>

                {/* Mobile Navigation (Visible only on small screens) */}
                <div className="md:hidden mt-4 flex flex-wrap justify-center gap-4">
                    {routes.map((route) => (
                        <a
                            key={route.name}
                            href={route.href}
                            className="text-white/60 hover:text-primary text-[11px] font-medium transition-colors border border-white/10 px-3 py-1.5 rounded-full bg-white/5"
                        >
                            {route.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
