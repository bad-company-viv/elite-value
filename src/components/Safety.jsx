const safetyPoints = [
    {
        icon: 'car_crash',
        title: 'Mechanical Check',
        desc: 'Brakes, Engine, Lights & Fluid Levels',
    },
    {
        icon: 'cleaning_services',
        title: 'Hygiene Check',
        desc: 'Deep Cleaning & Sanitization',
    },
    {
        icon: 'how_to_reg',
        title: 'Driver Verification',
        desc: 'Background Check & Alcohol Screening',
    },
];

export default function Safety() {
    return (
        <section className="py-20 bg-surface-light dark:bg-surface-dark relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0" />
            <div className="absolute -left-20 bottom-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="glass-panel-deep p-8 md:p-12 rounded-3xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                                Safety First
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
                                50-Point Safety <span className="italic text-primary">Commitment</span>
                            </h2>
                            <p className="text-text-sub-light dark:text-text-sub-dark mb-8 leading-relaxed">
                                Your safety is our priority. Every Elite Prime vehicle undergoes a rigorous 50-point
                                inspection before every single trip. From tire pressure to brake fluid, we check it all
                                so you don't have to.
                            </p>
                            <div className="flex flex-col gap-4">
                                {safetyPoints.map((point) => (
                                    <div key={point.title} className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                            <span className="material-symbols-outlined">{point.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">{point.title}</h4>
                                            <p className="text-xs text-text-sub-light dark:text-text-sub-dark">{point.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative">
                            <img
                                alt="Car mechanic inspecting a white car"
                                className="rounded-2xl shadow-lg relative z-10 w-full"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVGzmqzfpH4P58nwhiPRNNSXKiATZO2off9oMnllztvb-Or-EPdh3RrlHXGFoOBgDieuXgruOVML7DYNK-98wy5BXPeSNlFHgtYO8FIE4qtrEXQaos0gF34Vn9SXhQiIt40g_KCtKFhhCRIf-HVn_XaFqfJVX7BrJ7aw74jfLmH16g15nKuHlIVWPFASnFubzZqLofI2Bn7b9fEYwjShsgKq8QLCYzpMj22Y9OmZP3-DQOhGAZbymfLHcbOEPMrcyf8qRspW9Qw-o"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-xl flex items-center justify-center z-20 shadow-gold">
                                <div className="text-center text-white">
                                    <span className="block text-3xl font-display font-bold">100%</span>
                                    <span className="text-xs uppercase font-bold tracking-wider">Safe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
