import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-texture-paper overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-2 bg-gradient-gold text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg"
                        >
                            ✨ Produto Digital - Acesso Imediato
                        </motion.div>

                        {/* Headline */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
                            Fature Seus Primeiros{' '}
                            <span className="text-gradient">R$ 10 Mil Por Mês</span>{' '}
                            no Mercado Imobiliário
                        </h1>

                        {/* Mobile Only: Early CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="block md:hidden"
                        >
                            <a
                                href="https://pay.hotmart.com/G103379648S"
                                className="block w-full bg-gradient-to-r from-success to-emerald-600 text-white text-center text-lg font-heading font-bold py-4 px-6 rounded-xl shadow-lg relative overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    QUERO FATURAR 10K
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </a>
                            <p className="text-center text-xs text-gray-500 mt-2">
                                🔥 De <span className="line-through">R$ 218</span> por apenas <strong>R$ 27</strong>
                            </p>
                        </motion.div>

                        {/* Subheadline */}
                        <p className="text-lg md:text-2xl font-semibold text-gray-800 leading-relaxed">
                            Sem Experiência, Sem CRECI, Começando do Zero
                        </p>

                        <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                            O mesmo método que Rafael Targino usou para gerar{' '}
                            <strong className="text-primary">R$ 850 milhões em VGV</strong>,
                            agora em um kit prático para você dar o primeiro passo.
                        </p>

                        {/* Benefits List */}
                        <div className="space-y-3 pt-2">
                            {[
                                'Acesso Imediato ao Kit Completo',
                                'Método Validado por +1.000 Corretores',
                                'Garantia Incondicional de 7 Dias'
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-success flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="hidden md:block"
                        >
                            <a
                                href="https://pay.hotmart.com/G103379648S"
                                className="block w-full bg-gradient-to-r from-success to-emerald-600 hover:from-emerald-600 hover:to-success text-white text-center text-lg md:text-xl font-heading font-bold py-6 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                            >
                                COMEÇAR MINHA JORNADA PARA 10K AGORA
                            </a>
                            <p className="text-center text-sm text-gray-500 mt-3 flex items-center justify-center gap-2">
                                🛡️ Compra 100% segura via Hotmart | ⏰ Oferta de lançamento
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Rafael's Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            {/* Rafael's Photo - Pointing Up */}
                            <img
                                src={`${import.meta.env.BASE_URL}uploaded_image_0_1764306153458.png`}
                                alt="Rafael Targino - Especialista em Mercado Imobiliário"
                                className="w-full h-auto rounded-3xl shadow-2xl"
                                style={{
                                    filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.25))'
                                }}
                            />

                            {/* Gold glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-gold-400/20 blur-3xl -z-10 rounded-3xl"></div>

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl border-2 border-secondary"
                            >
                                <p className="text-sm text-gray-600 mb-1">Experiência Comprovada</p>
                                <p className="text-2xl font-bold text-primary">30 Anos</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
