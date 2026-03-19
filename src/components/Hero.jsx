export default function Hero() {
    return (
        <header className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    alt="White premium sedan parked outside a modern minimalist hotel in daylight"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_P__b_yEvUQ4sAtAAlJ-whNtBerC7uUyDqhFK7I-Xh0w-qZrk734ptepClOrN_nJpiET3CTiMXg0v-uLeKk02LbDX4Bz4SwVKtaPMdzpz0AI0PUjnomboFzYu-NK8Qi3yz_R4CUe7BsCr6YghHtKx_b736EpzFI6ETBfJqI9XPL6DRycXdsvzBBPqYN1ZvnEJiszUExWug6Lj3_Rg1qa8YosZar86ZFmDm7wnE2wmpX9tBT1zGPAhSemW9ufDiMGQyFHZIYiSM6E"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background-light via-background-light/80 to-transparent dark:from-background-dark dark:via-background-dark/80 dark:to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="w-full md:w-1/2 space-y-6 pt-10 md:pt-0">
                    <div className="mb-6">
                        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 px-4 py-3 rounded-2xl shadow-2xl overflow-hidden relative group inline-flex items-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <img
                                src="/elite-logo.png"
                                alt="Elite Prime Cars"
                                className="h-12 md:h-14 w-auto object-contain relative z-10 brightness-110 drop-shadow-sm"
                            />
                        </div>
                    </div>
                    <div className="inline-block px-3 py-1 border border-primary/30 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-white/80 dark:bg-black/50 backdrop-blur-md shadow-sm">
                        Premium Value. Unmatched Service.
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight drop-shadow-sm">
                        Travel like a star in a value{' '}
                        <span className="italic text-primary relative inline-block">
                            car.
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full" />
                        </span>
                    </h1>
                    <p className="text-lg text-text-sub-light dark:text-text-sub-dark max-w-md font-light leading-relaxed">
                        Why overpay for luxury? Drive premium sedans like the Verna, Virtus, and SUVs like the
                        Fortuner at unbeatable rates.
                    </p>
                    <div className="bg-white/80 dark:bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-4 flex flex-wrap gap-4 items-center mt-6 shadow-soft">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-xl">sanitizer</span>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
                                Sanitized Cars
                            </span>
                        </div>
                        <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-xl">badge</span>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
                                Pro Drivers
                            </span>
                        </div>
                        <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-xl">support_agent</span>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
                                24/7 Support
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <a
                            className="px-8 py-3.5 bg-primary text-white font-medium rounded-full shadow-gold hover:bg-primary-dark transition-all text-center flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                            href="#fleet"
                        >
                            View Value Fleet{' '}
                            <span className="material-symbols-outlined text-sm">arrow_downward</span>
                        </a>
                    </div>
                </div>

                {/* Booking Form */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end" id="booking-form">
                    <div className="bg-black/70 backdrop-blur-xl rounded-2xl w-full max-w-[420px] shadow-2xl border border-white/10 relative overflow-hidden">
                        {/* Form Header */}
                        <div className="px-6 lg:px-8 pt-6 lg:pt-8 pb-3">
                            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-red-500/20 text-red-400 px-2 py-1 rounded text-[10px] font-bold border border-red-500/20 animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                Real-time Booking Active
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-2 text-white">
                                Book Your Ride
                            </h3>
                            <p className="text-sm text-gray-300">
                                Best rates guaranteed. No hidden fees.
                            </p>
                        </div>
                        
                        {/* Embedded Form */}
                        <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                            <iframe
                                src="https://link.on.bingo/widget/form/f7kGu7G4YdSqDp4wjwIg"
                                style={{ width: '100%', height: '580px', border: 'none' }}
                                id="inline-f7kGu7G4YdSqDp4wjwIg"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Value Car"
                                data-height="580"
                                data-layout-iframe-id="inline-f7kGu7G4YdSqDp4wjwIg"
                                data-form-id="f7kGu7G4YdSqDp4wjwIg"
                                title="Value Car"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
