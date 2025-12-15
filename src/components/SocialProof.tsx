import { motion } from 'framer-motion';
import { Trophy, DollarSign, Users } from 'lucide-react';

const stats = [
    {
        icon: Trophy,
        number: '30 ANOS',
        description: 'de experiência no mercado imobiliário brasileiro'
    },
    {
        icon: DollarSign,
        number: 'R$ 850 MI',
        description: 'em VGV (Valor Geral de Vendas) gerado em projetos'
    },
    {
        icon: Users,
        number: '+1.000',
        description: 'corretores capacitados e transformados'
    }
];

export default function SocialProof() {
    return (
        <section className="py-20 bg-texture-paper border-t border-gold-100/50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-primary"
                >
                    Números Que Comprovam a Autoridade de Rafael Targino
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(201,169,97,0.2)' }}
                                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gold-200"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 shadow-lg">
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-3">
                                    {stat.number}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {stat.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
