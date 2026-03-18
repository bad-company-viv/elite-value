export default function Footer() {
    return (
        <footer
            className="bg-background-dark text-white pt-20 pb-10 border-t border-gray-800"
            id="contact"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                alt="Elite Prime Logo"
                                className="h-14 w-40 object-contain bg-white/10  p-1"
                                src="/elite-logo.png"
                            />

                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                            Pune's premier value car rental service. We bridge the gap between expensive luxury
                            rentals and standard cabs. Experience automotive excellence at a price you deserve.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-display">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">call</span>
                                <span>+91 9920053379</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">email</span>
                                <span>care@eliteprimecars.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">location_on</span>
                                <span>Phoenix Market City, Viman Nagar, Pune, Maharashtra 411014</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-display">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 Elite Prime Cars. All rights reserved.</p>
                    
                    {/* Credit Section */}
                    <div className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-white/30 bg-white/15 shadow-sm hover:shadow-md hover:bg-white/20 transition-all duration-300 mt-4 md:mt-0">
                        <a
                            href="https://fabulousmedia.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                            aria-label="FabulousMedia"
                        >
                            <img
                                src="/sitecredits/fabulous.png"
                                alt="FabulousMedia"
                                className="h-3 w-auto"
                                loading="lazy"
                                width="80"
                                height="12"
                            />
                        </a>
                        <div className="h-3 w-px bg-white/30 transition-colors duration-300"></div>
                        <a
                            href="https://gocommercially.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                            aria-label="GoCommercially"
                        >
                            <img
                                src="/sitecredits/gocomercially.svg"
                                alt="GoCommercially"
                                className="h-3 w-auto"
                                loading="lazy"
                                width="80"
                                height="12"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
