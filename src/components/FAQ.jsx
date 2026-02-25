const faqs = [
    {
        q: 'Are there any hidden charges like driver allowance?',
        a: 'Absolutely not. Our pricing is all-inclusive. What you see is what you pay. Driver allowance, fuel, and taxes are included in the quote. Tolls and parking are paid as per actuals.',
    },
    {
        q: 'What is your cancellation policy?',
        a: 'We offer free cancellation up to 6 hours before your scheduled pickup time. Plans change, and we understand that.',
    },
    {
        q: 'Do you guarantee the specific car model?',
        a: 'Yes. Unlike other aggregators, if you book a Volkswagen Virtus, you get a Volkswagen Virtus. We own our fleet to ensure quality and reliability.',
    },
    {
        q: 'Is there a night charge for late drives?',
        a: 'Our standard rates apply 24/7. However, for outstation trips that start or end between 11 PM and 6 AM, a nominal night allowance may be applicable for the driver\'s safety and effort.',
    },
];

export default function FAQ() {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                        Common Questions
                    </span>
                    <h2 className="text-3xl font-display text-gray-900 dark:text-white">
                        Frequently Asked <span className="italic text-primary">Questions</span>
                    </h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <details
                            key={faq.q}
                            className="group bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm cursor-pointer border border-gray-100 dark:border-gray-800"
                        >
                            <summary className="flex justify-between items-center font-bold text-gray-900 dark:text-white list-none">
                                <span>{faq.q}</span>
                                <span className="transition group-open:rotate-180">
                                    <span className="material-symbols-outlined text-primary">expand_more</span>
                                </span>
                            </summary>
                            <div className="text-text-sub-light dark:text-text-sub-dark mt-3 text-sm leading-relaxed faq-answer">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
