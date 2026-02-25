const comparisonData = [
    { feature: 'Car Condition', valuePrime: 'Premium & Sanitized', regular: 'Often Unclean' },
    { feature: 'Driver Quality', valuePrime: 'Uniformed & Verified', regular: 'Inconsistent' },
    { feature: 'Pricing Model', valuePrime: 'Transparent & Fixed', regular: 'Surge Pricing' },
    { feature: 'Hidden Fees', valuePrime: 'None', regular: 'Fuel/Driver Extra' },
];

export default function ComparisonTable() {
    return (
        <section className="py-20 bg-surface-light dark:bg-surface-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display text-gray-900 dark:text-white mb-4">
                        Elite Prime vs.{' '}
                        <span className="italic text-gray-400">Standard Rentals</span>
                    </h2>
                    <p className="text-text-sub-light dark:text-text-sub-dark max-w-2xl mx-auto">
                        See why smart travelers are switching to Elite Prime. More value, less compromise.
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <div className="glass-panel-deep rounded-2xl p-2 md:p-6 max-w-4xl mx-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="p-4 text-sm uppercase tracking-wider font-bold text-gray-500 w-1/3">
                                        Feature
                                    </th>
                                    <th className="p-4 text-sm uppercase tracking-wider font-bold text-primary w-1/3 bg-primary/5 rounded-t-lg text-center">
                                        Elite Prime
                                    </th>
                                    <th className="p-4 text-sm uppercase tracking-wider font-bold text-gray-400 w-1/3 text-center">
                                        Regular Taxis
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {comparisonData.map((row, idx) => (
                                    <tr
                                        key={idx}
                                        className={idx < comparisonData.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}
                                    >
                                        <td className="p-4 font-bold text-gray-800 dark:text-white">{row.feature}</td>
                                        <td className="p-4 bg-primary/5 font-medium text-gray-900 dark:text-white">
                                            <div className="flex items-center justify-center">
                                                <div className="flex items-center gap-3 w-[180px]">
                                                    <span className="material-symbols-outlined text-green-500 text-lg flex-shrink-0">
                                                        check_circle
                                                    </span>
                                                    <span className="text-left">{row.valuePrime}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center text-gray-500">{row.regular}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
