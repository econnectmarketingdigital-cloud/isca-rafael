import { motion } from 'framer-motion';
import { Zap, Lock, CheckCircle2 } from 'lucide-react';

export default function InvestmentSection() {
    return (
        <section id="investimento" className="py-20 bg-dark text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gold-500/30 relative overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gold-400/10 blur-3xl"></div>

                        <div className="relative z-10">
                            <p className="text-gray-400 text-lg mb-2">Valor Real do Kit Completo: <span className="line-through text-red-400">R$ 218,00</span></p>

                            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                                Mas como este é um produto de lançamento e queremos impactar o máximo de vidas possível, você não vai pagar nem R$ 218, nem R$ 97...
                            </p>

                            <div className="inline-block bg-red-500/20 text-red-300 border border-red-500/30 px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
                                🔥 95% de desconto - Oferta de Lançamento
                            </div>

                            <div className="mb-8">
                                <p className="text-xl font-semibold mb-2 text-gold-200">Investimento Simbólico:</p>
                                <p className="text-7xl md:text-8xl font-bold text-gradient-gold tracking-tight">R$ 27</p>
                                <p className="text-gray-400 text-sm mt-2">Menos que um combo no McDonald's</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 mb-10 text-left max-w-2xl mx-auto">
                                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                                    <Zap className="w-5 h-5 text-gold-400" />
                                    <span className="text-sm font-medium">Acesso 100% imediato após pagamento</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                                    <Lock className="w-5 h-5 text-gold-400" />
                                    <span className="text-sm font-medium">Compra 100% segura via Hotmart</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-gold-400" />
                                    <span className="text-sm font-medium">Garantia incondicional de 7 dias</span>
                                </div>
                            </div>

                            <a
                                href="https://pay.hotmart.com/XXXXXX?src=lovable"
                                className="block w-full md:max-w-lg mx-auto bg-gradient-to-r from-success to-emerald-600 hover:from-emerald-600 hover:to-success text-white text-center text-xl md:text-2xl font-heading font-bold py-6 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                            >
                                COMEÇAR MINHA JORNADA PARA 10K AGORA
                            </a>

                            <p className="text-red-300 font-semibold mt-6 flex items-center justify-center gap-2">
                                ⏰ ATENÇÃO: O preço voltará para R$ 97,00 em breve. Garanta agora!
                            </p>

                            <p className="text-gray-500 text-xs mt-4">
                                Pagamento processado pela Hotmart | Garantia de 7 dias
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
