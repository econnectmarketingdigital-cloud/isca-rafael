import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
    return (
        <section className="py-20 bg-texture-paper relative overflow-hidden border-t border-gold-100/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gold-100 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold-50 rounded-full blur-3xl -z-10"></div>

                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex justify-center md:justify-start"
                        >
                            <div className="relative">
                                <ShieldCheck className="w-32 h-32 text-secondary" />
                                <div className="absolute inset-0 bg-secondary/20 blur-2xl -z-10"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 text-center md:text-left"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                                Garantia Incondicional de 7 Dias
                            </h2>

                            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Você tem 7 dias para explorar todo o conteúdo do START 10K.
                                </p>
                                <p>
                                    Se por qualquer motivo você achar que o material não vale{' '}
                                    <strong className="text-primary">pelo menos 10 vezes</strong> o que você pagou,
                                    basta enviar um único email e devolvemos 100% do seu investimento.
                                </p>
                                <p className="font-semibold text-primary text-xl">
                                    Sem perguntas. Sem burocracia. Sem ressentimentos.
                                </p>
                                <p className="text-2xl font-heading font-bold text-secondary">
                                    Simples assim.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
