const categories = [
    {
        icon: 'map',
        title: 'Outstation',
        desc: 'Perfect for weekend getaways and intercity business trips. Flat per-km rates.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMbC4BxOqU6Mkexxuo_MMZ-eVVU-8xL2AKyb5CL0-4dc8HDbeojMMoDDNfap5TZu2I3R3CHHS3dW4g0lRxEHP-ZVy7pD46t2MsriRj3diAJTAAlHys2sYIt7MIztgrega04cIWte0DcSM3rFAjjEo9WACjQYaw4DfqYh8jwPPYoJz8JpICQFpUIU18gXK5_BlKTlPFWXzVXWKmXkHUhWny6A4Cp9b3HKKYDmIEunz7pwQPl6Sy-zyWdUBVlW28KftgiTms4aKUqdg',
        alt: 'Scenic highway road for outstation travel',
    },
    {
        icon: 'watch_later',
        title: 'Local Rentals',
        desc: 'Flexible hourly packages (4hr/40km, 8hr/80km) for city errands and meetings.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOXNLjOyslTBP3Zb1j4yRDUw_wmi73UkUbenOq9Ai43us1SCRkTCE_IF999LJrrU2ba_2z8nZwUG_I9pmKt5NGffJmekriaE8LeCJsy7aRD3js5OvndWWoS-Myb_ZdWlvaIJ-8Pevf2MnsjYe4QL_goTQaYi_jme9IwHCo-XsVvKkh_2B1uoUCaywOBiibp0ygUlhuYm-XA9veR554L0jiM-GNEz2vMicLIGRIUpLXkqTEzVP-TojslDqZmk-Ufp2FP2sWQuRckXw',
        alt: 'Cityscape view for local rentals',
    },
    {
        icon: 'flight_takeoff',
        title: 'Airport Transfers',
        desc: 'Reliable, on-time pickups and drops to ensure you never miss a flight.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8609DgIRnHnsV2XV_jBQL6Dbps9JcfWhJqD5lzAQ2OiC_F_cpqCVo6xpPtMCkW1ODK3BmIUjL4X-a2D_pFnNfJQoj0wrepALXVuP7NJlkqZH0t37RBZdsXPw5NNDr_QKGg7xhIr45OaV6Hog721zU1jQNm2hWs9MacdaqC3lu9S0OUSdkzBSX_POtZJLGaebgGaxH0JmQpoZ_fRkahusIwfEpIU_cYAUARRCPAHJd9N2TR0woryKYJ5JgxM4oIzlEf1IKXUKAXTc',
        alt: 'Modern airport terminal architecture',
    },
];

export default function ServiceCategories() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                        Tailored For You
                    </span>
                    <h2 className="text-4xl font-display text-gray-900 dark:text-white">
                        Our Service <span className="italic text-primary">Categories</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <div
                            key={cat.title}
                            className="group relative rounded-2xl overflow-hidden h-96 shadow-lg cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/30 transition-colors z-10" />
                            <img
                                alt={cat.alt}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                src={cat.img}
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="material-symbols-outlined text-primary text-3xl mb-3">{cat.icon}</span>
                                <h3 className="text-2xl font-display font-bold text-white mb-2">{cat.title}</h3>
                                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {cat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
