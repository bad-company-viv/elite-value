export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div
                        className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <img
                            alt="Elite Prime Logo"
                            className="h-14 w-auto object-contain"
                            src="/logo.png"
                        />

                    </div>
                    <div className="flex items-center">
                        <a
                            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-all shadow-gold font-medium flex items-center gap-2 relative overflow-hidden group"
                            href="#booking-form"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                            <span className="material-symbols-outlined text-sm">calendar_month</span>
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
