const testimonials = [
    {
        name: 'Rajesh Khanna',
        role: 'Business Traveler',
        text: '"I used to book expensive luxury cars for my clients, but Elite Prime\'s Virtus and Fortuner fleet offers the same comfort at half the price. The cars were spotless."',
    },
    {
        name: 'Meera Joshi',
        role: 'Family Trip',
        text: '"The Fortuner was perfect for our family trip to Lonavala. Spacious, powerful, and very affordable compared to other rentals. Highly recommended!"',
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white dark:bg-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                        Client Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display text-gray-900 dark:text-white">
                        Trusted by <span className="italic text-primary">Many</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800 relative hover:shadow-lg transition-shadow"
                        >
                            <span className="material-symbols-outlined absolute top-8 right-8 text-gray-200 dark:text-gray-700 text-5xl">
                                format_quote
                            </span>
                            <div className="flex gap-1 text-primary mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-sm fill-current">
                                        star
                                    </span>
                                ))}
                            </div>
                            <p className="text-text-sub-light dark:text-text-sub-dark italic mb-6 leading-relaxed relative z-10">
                                {t.text}
                            </p>
                            <div>
                                <h5 className="font-bold text-gray-900 dark:text-white">{t.name}</h5>
                                <p className="text-xs text-text-sub-light dark:text-text-sub-dark uppercase tracking-wider">
                                    {t.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
