const fleet = [
    {
        badge: 'Best Value',
        badgeClass: 'bg-primary text-white',
        img: '/images/hyundai-aura.jpg',
        alt: 'Hyundai Aura sedan',
        category: 'Compact Sedan',
        name: 'Hyundai Aura',
        specs: [
            { icon: 'person', label: '4 Pax' },
            { icon: 'ac_unit', label: 'AC' },
            { icon: 'local_gas_station', label: 'Petrol' },
        ],
        price: '₹2,200',
        duration: '/ 8hrs',
        savingLabel: 'Save 45%',
        savingSub: 'vs Luxury',
        savingSubStrike: true,
    },
    {
        badge: 'Best Seller',
        badgeClass: 'bg-primary text-white',
        img: '/images/verna.jpeg',
        alt: 'Hyundai Verna new model side view',
        category: 'Premium Sedan',
        name: 'Hyundai Verna',
        specs: [
            { icon: 'person', label: '4 Pax' },
            { icon: 'ac_unit', label: 'AC' },
            { icon: 'local_gas_station', label: 'Diesel' },
        ],
        price: '₹2,500',
        duration: '/ 8hrs',
        savingLabel: 'Save 40%',
        savingSub: 'vs Luxury',
        savingSubStrike: true,
    },
    {
        badge: 'Top Rated',
        badgeClass: 'bg-white/90 dark:bg-black/80 dark:text-white',
        img: '/images/volkswagen.jpeg',
        alt: 'Volkswagen Virtus white',
        category: 'German Engineering',
        name: 'Volkswagen Virtus',
        specs: [
            { icon: 'person', label: '4 Pax' },
            { icon: 'speed', label: 'TSI' },
            { icon: 'luggage', label: '2 Bags' },
        ],
        price: '₹2,800',
        duration: '/ 8hrs',
        savingLabel: 'Save 35%',
        savingSub: 'vs Luxury',
        savingSubStrike: true,
    },
    {
        badge: 'Family Favorite',
        badgeClass: 'bg-primary text-white',
        img: '/images/ertiga.jpeg',
        alt: 'Maruti Suzuki Ertiga MPV',
        category: 'Compact MPV',
        name: 'Maruti Ertiga',
        specs: [
            { icon: 'person', label: '7 Pax' },
            { icon: 'ac_unit', label: 'AC' },
            { icon: 'luggage', label: '3 Bags' },
        ],
        price: '₹2,900',
        duration: '/ 8hrs',
        savingLabel: 'Save 38%',
        savingSub: 'vs Luxury',
        savingSubStrike: true,
    },
    {
        badge: 'Premium MPV',
        badgeClass: 'bg-white/90 dark:bg-black/80 dark:text-white',
        img: '/images/innova.jpeg',
        alt: 'Toyota Innova Crysta',
        category: 'Premium MPV',
        name: 'Toyota Innova',
        specs: [
            { icon: 'person', label: '7 Pax' },
            { icon: 'ac_unit', label: 'AC' },
            { icon: 'luggage', label: '4 Bags' },
        ],
        price: '₹3,200',
        duration: '/ 8hrs',
        savingLabel: 'Save 40%',
        savingSub: 'vs Luxury',
        savingSubStrike: true,
    },
    {
        badge: 'High Demand',
        badgeClass: 'bg-primary text-white',
        limitedBadge: true,
        img: '/images/fortuner.png',
        alt: 'Toyota Fortuner white SUV',
        category: 'Premium SUV',
        name: 'Toyota Fortuner',
        specs: [
            { icon: 'person', label: '7 Pax' },
            { icon: 'terrain', label: '4x4' },
            { icon: 'luggage', label: '4 Bags' },
        ],
        price: '₹3,500',
        duration: '/ 8hrs',
        savingLabel: 'Unbeatable',
        savingSub: 'Value',
        savingSubStrike: false,
    },
];

export default function Fleet() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-surface-dark" id="fleet">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                            Our Value Collection
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-gray-900 dark:text-white">
                            Premium <span className="italic text-primary">Value Fleet</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 bg-green-50 dark:bg-green-900/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-green-200 dark:border-green-800">
                        <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-base sm:text-lg">
                            verified_user
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-green-800 dark:text-green-300">
                            No Hidden Charges
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {fleet.map((car) => (
                        <div
                            key={car.name}
                            className="bg-white dark:bg-surface-dark rounded-xl sm:rounded-2xl overflow-hidden shadow-soft hover:shadow-card-hover transition-all duration-300 group flex flex-col border border-gray-100 dark:border-gray-800"
                        >
                            <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                                <img
                                    alt={car.alt}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    src={car.img}
                                />
                                <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide shadow-lg ${car.badgeClass}`}>
                                    {car.badge}
                                </div>
                                {car.limitedBadge && (
                                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-red-600 text-white px-2 sm:px-3 py-1 rounded text-[10px] sm:text-xs font-bold uppercase flex items-center gap-1 shadow-md">
                                        <span className="material-symbols-outlined text-xs sm:text-sm">schedule</span>
                                        <span className="hidden xs:inline">Limited Availability</span>
                                        <span className="xs:hidden">Limited</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
                                <p className="text-[10px] sm:text-xs text-text-sub-light dark:text-text-sub-dark font-bold tracking-widest uppercase mb-1">
                                    {car.category}
                                </p>
                                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
                                    {car.name}
                                </h3>
                                <p className="text-text-sub-light dark:text-text-sub-dark text-xs sm:text-sm mb-4 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-4">
                                    {car.specs.map((s) => (
                                        <span key={s.label} className="flex items-center">
                                            <span className="material-symbols-outlined text-xs sm:text-sm align-middle mr-1">
                                                {s.icon}
                                            </span>
                                            {s.label}
                                        </span>
                                    ))}
                                </p>
                                <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-700">
                                    <button 
                                        onClick={() => window.location.href = '#booking-form'}
                                        className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 sm:mt-12 text-center">
                    <p className="text-xs sm:text-sm text-text-sub-light dark:text-text-sub-dark mb-3 sm:mb-4">
                        Looking for something else?
                    </p>
                    <a
                        className="inline-flex items-center gap-2 text-sm sm:text-base text-primary font-bold hover:text-primary-dark transition-colors"
                        href="#contact"
                    >
                        Contact us for custom requirements{' '}
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
