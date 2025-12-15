import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const forYou = [
    'Quer iniciar no mercado imobiliário do jeito certo, sem cometer erros de iniciante',
    'Deseja faturar seus primeiros 10k/mês nos próximos 90 dias',
    'Não tem CRECI ainda (ou tem, mas nunca vendeu nada)',
    'Está cansado de depender de salário fixo e quer empreender com propósito',
    'Quer um método VALIDADO por quem já gerou R$ 850 milhões em vendas'
];

const notForYou = [
    'Procura fórmulas mágicas de enriquecimento sem esforço',
    'Não está disposto a aplicar o método nos próximos 90 dias',
    'Quer apenas "consumir conteúdo" sem colocar em prática',
    'Já fatura mais de 20k/mês consistentemente no mercado imobiliário',
    'Não acredita que é possível mudar de vida com conhecimento e ação'
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
                    {/* For You - Green */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-success/5 rounded-2xl p-8 border-2 border-success/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
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

                    {/* Not For You - Red */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-danger/5 rounded-2xl p-8 border-2 border-danger/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
