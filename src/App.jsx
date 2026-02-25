import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComparisonTable from './components/ComparisonTable';
import HowItWorks from './components/HowItWorks';
import ServiceCategories from './components/ServiceCategories';
import Fleet from './components/Fleet';
import Safety from './components/Safety';
import CTABanner from './components/CTABanner';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark transition-colors duration-300 antialiased">
            <Navbar />
            <Hero />
            <ComparisonTable />
            <HowItWorks />
            <ServiceCategories />
            <Fleet />
            <Safety />
            <CTABanner />
            <FAQ />
            <Testimonials />
            <Footer />
            <WhatsAppFAB />
        </div>
    );
}
