const fleet = [
    {
        badge: 'Best Seller',
        badgeClass: 'bg-primary text-white',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuu9qHC-BdaAH1Cemxn9hY61EsXoxbmWyscmJcnQ1WF89-RBwyODST8oDqiT2zx2hA4G8JB9b8kRgcXmYdVAA6vJ9YHB0Gap9H7QuwSP0yOD11vs3xpd9trUbkzD8H4NgdcGvgd8mtvP51c4_Fqak6OM0bdEHkuMcBPiefo5qxaGxPM4bQ-dP1_J1o8NFSarlr1q96SzIqCLU5BYDDhd3nJfcol4sUlVOXEL8lBHUbY5mD32mTZ5zHAy4FBEjnhwayltVakzq4C5A',
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
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmb6U29mz70zobJnRzOZR_iZ0cjUe802KBNFz3OcM0t_SjoZXs3C32gVPVIjq6E6E_-spnGSJPUJsENdT7ZiDS9UFz4Jw60l9KP3n3M9aAmSG3M6F8B0jo4QTmPJ9y29LzqW1FJEUxnFPSDTAuTqCCk3XUscVtn-tHfui6XPgIdln-U6KifuVeQYaMbR3D5bfp1NyE6WhzDxnOjZcIpl8s8lbUARjZphJG2prAfpWTbtgZE25AhaozEOW58QbkyhNaOaioBmPZVWc',
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
        badge: 'High Demand',
        badgeClass: 'bg-primary text-white',
        limitedBadge: true,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMeT0r2ssgRuQANhvOvADMs9SGg4YbH7iss51JQvTZp8gv7QQ3H2dMfb75txg28TkDnLeATfZOZ4Nzw2xzIGlsPfZwM-AVrWLghHJUqJd4sMkkEQTeHK0GFCdzbWyvqGuDRdS53fCXddq15ylSHzr-w4e2hvjlagmFfh93b0rcqE3PXE7eshKqUekvm0n_l0N05cwAZF2U_1fpOuOwToYx_Tz7grTVqpvxQMTOXvpBbWWkRHrj5ZIOnqL2Hjl6fumvc1q0RVGyarI',
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
        <section className="py-24 bg-white dark:bg-surface-dark" id="fleet">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                            Our Value Collection
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display text-gray-900 dark:text-white">
                            Premium <span className="italic text-primary">Value Fleet</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800">
                        <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-lg">
                            verified_user
                        </span>
                        <span className="text-sm font-bold text-green-800 dark:text-green-300">
                            No Hidden Charges Guaranteed
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fleet.map((car) => (
                        <div
                            key={car.name}
                            className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-soft hover:shadow-card-hover transition-all duration-300 group flex flex-col border border-gray-100 dark:border-gray-800"
                        >
                            <div className="relative overflow-hidden h-64">
                                <img
                                    alt={car.alt}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    src={car.img}
                                />
                                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg ${car.badgeClass}`}>
                                    {car.badge}
                                </div>
                                {car.limitedBadge && (
                                    <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold uppercase flex items-center gap-1 shadow-md">
                                        <span className="material-symbols-outlined text-sm">schedule</span>
                                        Limited Availability
                                    </div>
                                )}
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <p className="text-xs text-text-sub-light dark:text-text-sub-dark font-bold tracking-widest uppercase mb-1">
                                    {car.category}
                                </p>
                                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
                                    {car.name}
                                </h3>
                                <p className="text-text-sub-light dark:text-text-sub-dark text-sm mb-6 flex items-center gap-4">
                                    {car.specs.map((s) => (
                                        <span key={s.label}>
                                            <span className="material-symbols-outlined text-sm align-middle mr-1">
                                                {s.icon}
                                            </span>
                                            {s.label}
                                        </span>
                                    ))}
                                </p>
                                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <p className="text-xs text-text-sub-light dark:text-text-sub-dark">
                                                All Inclusive Price
                                            </p>
                                            <p className="text-xl font-bold text-gray-900 dark:text-white">
                                                {car.price}{' '}
                                                <span className="text-xs font-normal text-text-sub-light dark:text-text-sub-dark">
                                                    {car.duration}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-green-600 font-bold">{car.savingLabel}</p>
                                            <p className={`text-xs text-text-sub-light ${car.savingSubStrike ? 'line-through' : ''}`}>
                                                {car.savingSub}
                                            </p>
                                        </div>
                                    </div>
                                    <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-sm text-text-sub-light dark:text-text-sub-dark mb-4">
                        Looking for something else?
                    </p>
                    <a
                        className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors"
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
