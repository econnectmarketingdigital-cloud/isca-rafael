import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Bruno Silva",
        role: "Sub Lider Sheets Park",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bruno&backgroundColor=b6e3f4",
        messages: [
            "Antes do método eu era vendedor",
            "Seguindo o Metodo, no meu primeiro mês eu ganhei 6 mil reais",
            "No meu segundo mês eu ganhei 10 mil reais",
            "No meu terceiro mês eu ganhei 38 mil reais",
            "No meu melhor mês com o método eu ganhei 39 mil reais"
        ],
        time: "06:42"
    },
    {
        name: "Karem Cunha Sá",
        role: "Sheets Park Cunha Sá",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karem&backgroundColor=ffdfbf",
        messages: [
            "Quando me falaram do Método eu não acreditei que era possível!",
            "Antes do método eu trabalhava com vendas",
            "Seguindo o Metodo, no meu primeiro mês eu ganhei 1,5k",
            "No meu segundo mês eu ganhei 3k",
            "No meu melhor mês seguindo o método eu ganhei 6.500,00"
        ],
        time: "06:41"
    },
    {
        name: "Denner",
        role: "Promotor de Marketing",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Denner&backgroundColor=c0aede",
        messages: [
            "Quando me falaram do Método, eu não acreditei que fosse possível.",
            "Antes de conhecer o Método, eu trabalhava com vendas de produtos digitais e, à noite, atuava como CLT.",
            "Depois que comecei a aplicar o Método, minha realidade começou a mudar:",
            "No meu primeiro mês, eu fechei com R$ 2.000.",
            "No segundo mês, eu já alcancei R$ 10.000."
        ],
        time: "06:45"
    }
];

export default function SocialProof() {
    return (
        <section className="py-16 bg-dark border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-secondary font-bold tracking-wider text-sm uppercase">Resultados Reais</span>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mt-2">
                        Quem Aplica o Método <span className="text-gradient-gold">Tem Resultado</span>
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="flex overflow-x-auto pb-8 gap-4 px-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gold-500/30 scrollbar-track-transparent -mx-4 md:mx-0 md:justify-center">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex-shrink-0 w-[85vw] md:w-[350px] snap-center bg-[#0b141a] rounded-xl overflow-hidden border border-white/5 shadow-xl relative"
                        >
                            {/* WhatsApp Header Style */}
                            <div className="bg-[#202c33] p-3 flex items-center gap-3 border-b border-white/5">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full bg-white/10"
                                />
                                <div>
                                    <p className="text-white font-semibold text-sm leading-tight">{testimonial.name}</p>
                                    <p className="text-xs text-secondary">{testimonial.role}</p>
                                </div>
                            </div>

                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                            </div>

                            {/* Messages Body */}
                            <div className="p-4 space-y-2 relative z-10">
                                {testimonial.messages.map((msg, idx) => (
                                    <div key={idx} className="bg-[#202c33] rounded-lg p-2 rounded-tl-none inline-block max-w-[95%]">
                                        <p className="text-gray-200 text-sm leading-relaxed">
                                            {msg}
                                        </p>
                                    </div>
                                ))}
                                <div className="flex justify-end mt-1">
                                    <span className="text-[10px] text-gray-500 flex items-center gap-1">
                                        {testimonial.time} <span className="text-secondary">✓✓</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                    Deslize para ver mais depoimentos
                </p>
            </div>
        </section>
    );
}
