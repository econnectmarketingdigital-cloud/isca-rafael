import { motion } from 'framer-motion';
import { CheckCircle2, Lock, Zap } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-texture-paper overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
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
                            className="inline-flex items-center gap-2 bg-gradient-gold text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                        >
                            🎯 Produto Digital - Acesso Imediato
                        </motion.div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
                            Fature Seus Primeiros{' '}
                            <span className="text-gradient">R$ 10 Mil Por Mês</span>{' '}
                            no Mercado Imobiliário
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
                            Sem Experiência, Sem CRECI, Começando do Zero
                        </p>

                        <p className="text-base md:text-lg text-gray-600">
                            O mesmo método que Rafael Targino usou para gerar{' '}
                            <strong className="text-primary">R$ 850 milhões em VGV</strong> ao longo de 30 anos,
                            agora condensado em um kit prático para você dar o primeiro passo
                        </p>

                        {/* Price Box - MOVED UP */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-gradient-to-br from-primary via-accent to-primary rounded-2xl p-8 text-white shadow-2xl border border-gold-500/20"
                        >
                            <div className="text-center space-y-4">
                                <p className="text-sm opacity-90 line-through">De: R$ 97,00</p>
                                <div>
                                    <p className="text-lg font-semibold mb-2">Investimento Simbólico:</p>
                                    <p className="text-6xl md:text-7xl font-bold text-gradient-gold">R$ 4,97</p>
                                </div>

                                <div className="space-y-2 text-sm">
                                    <p className="flex items-center justify-center gap-2">
                                        🔥 <strong>95% de desconto</strong> - Oferta de Lançamento
                                    </p>
                                    <p className="flex items-center justify-center gap-2">
                                        <Zap className="w-4 h-4" />
                                        Acesso 100% imediato após pagamento
                                    </p>
                                    <p className="flex items-center justify-center gap-2">
                                        <Lock className="w-4 h-4" />
                                        Compra 100% segura via Hotmart
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <a
                                href="https://pay.hotmart.com/XXXXXX?src=lovable"
                                className="block w-full bg-gradient-to-r from-success to-emerald-600 hover:from-emerald-600 hover:to-success text-white text-center text-lg md:text-xl font-heading font-bold py-6 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                            >
                                COMEÇAR MINHA JORNADA PARA 10K AGORA
                            </a>
                            <p className="text-center text-sm text-gray-500 mt-3">
                                Pagamento processado pela Hotmart | Garantia de 7 dias
                            </p>
                        </motion.div>

                        {/* Bullets - MOVED DOWN */}
                        <div className="space-y-4 pt-4">
                            {[
                                'Aprenda os 12 pilares da alta performance aplicados às vendas',
                                'Sistema completo: fazer, multiplicar e colher dinheiro no imobiliário',
                                'Ferramentas práticas para implementar nos próximos 90 dias'
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">{item}</span>
                                </motion.div>
                            ))}
                        </div>
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
                                src="/uploaded_image_0_1764306153458.png"
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
