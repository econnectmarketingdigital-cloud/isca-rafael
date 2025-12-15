import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function RiskZero() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <div className="inline-block p-4 bg-green-50 rounded-full mb-6">
                            <ShieldCheck className="w-12 h-12 text-green-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
                            Por Que Você Não Tem NADA a Perder
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-6">
                            {[
                                'Investimento de apenas R$ 27 (menos que um combo de fast food)',
                                'Acesso imediato — comece a estudar agora mesmo',
                                'Garantia incondicional de 7 dias',
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="space-y-6">
                            {[
                                'Método validado por 30 anos de mercado',
                                '+1.000 corretores já foram treinados por Rafael',
                                'Pagamento 100% seguro via Hotmart'
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center bg-gray-900 text-white p-8 rounded-2xl shadow-xl">
                        <p className="text-lg md:text-xl font-medium">
                            O único risco que você corre é <span className="text-red-400 font-bold">NÃO</span> aproveitar esta oportunidade e continuar sem uma direção clara no mercado imobiliário.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
