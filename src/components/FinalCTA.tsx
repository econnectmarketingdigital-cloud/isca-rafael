import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FinalCTA() {
    return (
        <section className="py-20 bg-gradient-to-br from-dark via-primary to-dark text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                Você Está a Um Passo de Mudar Sua Realidade Financeira
                            </h2>

                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                Por apenas <strong className="text-secondary text-xl">R$ 4,97</strong>, você recebe o mapa que eu levei 30 anos para desenhar.
                                O risco é zero, o investimento é simbólico, mas o retorno pode ser a sua liberdade.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    'Acesso Imediato ao Kit Completo',
                                    'Garantia de 7 Dias',
                                    'Método Validado por +1.000 Corretores'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-success" />
                                        <span className="text-white/90">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.a
                                href="https://pay.hotmart.com/XXXXXX?src=lovable"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="block w-full bg-gradient-to-r from-success to-emerald-600 hover:from-emerald-600 hover:to-success text-white text-center text-xl font-heading font-bold py-6 px-8 rounded-xl shadow-lg hover:shadow-success/50 transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                QUERO MEU START 10K AGORA
                                <ArrowRight className="w-6 h-6" />
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative hidden lg:block"
                        >
                            {/* Rafael's Photo - Smiling/Welcoming */}
                            <img
                                src="/uploaded_image_2_1764306153458.png"
                                alt="Rafael Targino"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                                style={{
                                    filter: 'drop-shadow(0 0 40px rgba(201,169,97,0.3))'
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
