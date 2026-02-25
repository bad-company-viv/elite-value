export default function CTABanner() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gray-900">
                <img
                    alt="Woman enjoying luxury service"
                    className="w-full h-full object-cover opacity-20"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBrgqN7YzINJQ2RX6NIISrQMOZAZZyNhttD1RCo__selcXyZC8BKLaTMy2dAeqzbDqntdVMjh27N54JavSDssjkteJsaPfDn5BDtSBpJJYdWTzg2E47ea3A8csXj0VxVetdOXmkEMj3YXh27JfjC3kiskacmbja5G0Y1-6_kSecF_s6obztb0sCYmxTzrEbKCr6jUhB2it8AAvBnJKyRDnrtkdS0xQQ1LiK545BHHAmJ-B6ciaAXdd1NEpuMT8mlDeBLO2v0nUYqg"
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
                    Experience Premium <br />
                    <span className="italic text-primary">Without the Premium Price Tag</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                    Join 1000+ satisfied customers who have switched to smart luxury. Clean cars, polite
                    drivers, and transparent billing.
                </p>
                <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold shadow-gold hover:bg-primary hover:text-white transition-all transform hover:scale-105">
                    Book Your Ride Now
                </button>
            </div>
        </section>
    );
}
