import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 30% of the page
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

            if (scrollPercentage > 30) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
                >
                    <a
                        href="https://pay.hotmart.com/G103379648S"
                        onClick={() => (window as any).fbq('track', 'InitiateCheckout')}
                        className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-2xl animate-pulse"
                    >
                        GARANTIR POR R$ 27 AGORA
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
