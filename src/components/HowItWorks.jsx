const steps = [
    {
        icon: 'directions_car',
        title: '1. Select Ride',
        desc: 'Choose from our premium value fleet of Vernas, Virtus, or Fortuners.',
    },
    {
        icon: 'check_circle',
        title: '2. Confirm Detail',
        desc: 'Enter your pickup details and get an instant confirmation.',
    },
    {
        icon: 'sentiment_satisfied',
        title: '3. Enjoy Ride',
        desc: 'Sit back and relax. Our professional driver will handle the rest.',
    },
];

export default function HowItWorks() {
    return (
        <section className="py-16 bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display text-gray-900 dark:text-white">
                        3 Easy Steps to <span className="italic text-primary">Book</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 z-0" />
                    {steps.map((step) => (
                        <div key={step.title} className="relative z-10 group">
                            <div className="w-24 h-24 mx-auto bg-background-light dark:bg-background-dark rounded-full flex items-center justify-center border-4 border-white dark:border-surface-dark shadow-soft mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-4xl text-primary">{step.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 dark:text-white">{step.title}</h3>
                            <p className="text-sm text-text-sub-light dark:text-text-sub-dark px-4">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
