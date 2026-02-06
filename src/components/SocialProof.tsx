import { motion } from 'framer-motion';

const testimonials = [
    { image: `${import.meta.env.BASE_URL}proof-1.jpg`, alt: "Depoimento aluno Start 10k - 1" },
    { image: `${import.meta.env.BASE_URL}proof-2.jpg`, alt: "Depoimento aluno Start 10k - 2" },
    { image: `${import.meta.env.BASE_URL}proof-3.jpg`, alt: "Depoimento aluno Start 10k - 3" },
];

export default function SocialProof() {
    return (
        <section className="py-12 bg-dark border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 mb-8">
                <div className="text-center">
                    <span className="text-secondary font-bold tracking-wider text-sm uppercase">Resultados Reais</span>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mt-2">
                        Quem Aplica o Método <span className="text-gradient-gold">Tem Resultado</span>
                    </h2>
                </div>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 z-10 bg-gradient-to-r from-dark to-transparent font-medium"></div>
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 z-10 bg-gradient-to-l from-dark to-transparent font-medium"></div>

                <div className="flex">
                    <MarqueeContent />
                </div>
            </div>
        </section>
    );
}

function MarqueeContent() {
    return (
        <motion.div
            className="flex gap-4 md:gap-8 pr-4 md:pr-8"
            animate={{ x: "-50%" }}
            transition={{
                ease: "linear",
                duration: 30,
                repeat: Infinity,
            }}
            style={{ display: "flex", width: "fit-content" }}
        >
            {/* Render items multiple times for seamless loop */}
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                <div
                    key={index}
                    className="flex-shrink-0 w-[280px] md:w-[350px] relative rounded-xl overflow-hidden border border-gold-500/20 shadow-lg"
                >
                    <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                </div>
            ))}
        </motion.div>
    );
}
