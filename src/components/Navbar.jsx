export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    <div
                        className="flex-shrink-0 flex items-center gap-2 sm:gap-3 cursor-pointer"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <img
                            alt="Elite Prime Logo"
                            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                            src="/logo.png"
                        />
                    </div>
                    <div className="flex items-center">
                        <a
                            className="bg-primary hover:bg-primary-dark text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full transition-all shadow-gold font-medium flex items-center gap-1 sm:gap-2 relative overflow-hidden group text-xs sm:text-sm md:text-base"
                            href="#booking-form"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                            <span className="material-symbols-outlined text-sm sm:text-base">calendar_month</span>
                            <span className="hidden xs:inline">Book Now</span>
                            <span className="xs:hidden">Book</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
