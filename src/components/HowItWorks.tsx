import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Faça Seu Pedido',
        description: 'Clique no botão, preencha seus dados e efetue o pagamento seguro via Hotmart'
    },
    {
        number: '02',
        title: 'Acesse Imediatamente',
        description: 'Receba o login por email e acesse todo o conteúdo na hora'
    },
    {
        number: '03',
        title: 'Implemente e Cresça',
        description: 'Aplique o método nos próximos 90 dias e veja seus resultados decolarem'
    }
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-gradient-to-br from-primary via-accent to-dark text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Como Funciona
                    </h2>
                    <p className="text-lg text-white/80">
                        3 passos simples para começar sua jornada rumo aos 10K/mês
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="glass-dark rounded-2xl p-8 text-center h-full">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 text-3xl font-bold text-white shadow-lg">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-white/80 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Arrow connector (except last) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-secondary text-3xl z-10">
                                    →
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
