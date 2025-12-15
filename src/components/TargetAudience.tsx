import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const forYou = [
    'Quer iniciar no mercado imobiliário do jeito certo',
    'Já é corretor mas está estagnado nas vendas',
    'Busca uma renda extra com alto potencial de escala',
    'Quer aprender a vender imóveis de alto padrão',
    'Precisa de um método validado e passo a passo'
];

const notForYou = [
    'Procura fórmulas mágicas de enriquecimento rápido',
    'Não está disposto a estudar e aplicar o método',
    'Acha que vender imóveis é apenas sorte',
    'Não tem compromisso com resultados de longo prazo'
];

export default function TargetAudience() {
    return (
        <section className="py-20 bg-texture-paper border-t border-gold-100/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                        Para Quem é o START 10K?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Este kit foi desenhado especificamente para quem tem ambição e quer resultados reais.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* For You - Green/Gold */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 border-2 border-success/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="text-2xl font-heading font-bold text-success mb-6 flex items-center gap-2">
                            <div className="bg-success/10 p-2 rounded-full">
                                <Check className="w-6 h-6" />
                            </div>
                            É PARA VOCÊ SE:
                        </h3>
                        <ul className="space-y-4">
                            {forYou.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Not For You - Red/Dark */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 border-2 border-danger/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="text-2xl font-heading font-bold text-danger mb-6 flex items-center gap-2">
                            <div className="bg-danger/10 p-2 rounded-full">
                                <X className="w-6 h-6" />
                            </div>
                            NÃO É PARA VOCÊ SE:
                        </h3>
                        <ul className="space-y-4">
                            {notForYou.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <X className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
