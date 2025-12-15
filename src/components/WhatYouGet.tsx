import { motion } from 'framer-motion';
import { Video, Target, MessageSquare, BookOpen } from 'lucide-react';

const items = [
    {
        icon: BookOpen,
        title: 'E-book Completo START 10K',
        description: 'O manual definitivo com o passo a passo para iniciar no mercado imobiliário, começando do absoluto zero até sua primeira venda de 10k.',
        value: 'R$ 97'
    },
    {
        icon: Video,
        title: 'Método de 3 Passos (Vídeo Exclusivo)',
        description: 'Vídeo explicativo detalhando a metodologia: Fazer, Multiplicar e Colher — o sistema que Rafael usa há 30 anos.',
        value: 'R$ 47'
    },
    {
        icon: Target,
        title: 'Autoavaliação de Perfil de Vendedor',
        description: 'Descubra seus pontos fortes e como usá-los para vender mais, identificando o nicho ideal para você.',
        value: 'R$ 27'
    },
    {
        icon: MessageSquare,
        title: 'BÔNUS EXTRA: 10 Scripts Prontos',
        description: 'Mensagens testadas e aprovadas para WhatsApp, ligações e e-mails que convertem.',
        value: 'R$ 47',
        isBonus: true
    }
];

export default function WhatYouGet() {
    return (
        <section className="py-20 bg-texture-paper overflow-hidden border-t border-gold-100/50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                            O Que Você Recebe no Kit
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Não é apenas um e-book. É um <strong className="text-secondary">ecossistema completo</strong> de ferramentas
                            práticas que eu uso no meu dia a dia e que vão acelerar seus resultados.
                        </p>

                        <div className="grid gap-6">
                            {items.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className={`flex gap-4 p-4 rounded-xl transition-colors duration-200 border ${item.isBonus ? 'bg-gold-50 border-gold-300' : 'hover:bg-gold-50 border-transparent hover:border-gold-200'}`}
                                    >
                                        <div className="flex-shrink-0">
                                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-md ${item.isBonus ? 'bg-gradient-to-br from-gold-400 to-gold-600' : 'bg-gradient-gold'}`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-heading font-bold text-primary mb-1">
                                                    {item.title}
                                                </h3>
                                                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                                                    Valor: {item.value}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Total Value Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 bg-gradient-to-r from-primary to-dark p-6 rounded-xl text-white text-center shadow-xl border border-gold-500/30"
                        >
                            <p className="text-gold-200 text-sm font-semibold tracking-wider uppercase mb-1">Valor Total do Kit</p>
                            <p className="text-3xl font-bold line-through opacity-50 mb-2">R$ 218,00</p>
                            <div className="flex items-center justify-center gap-3">
                                <span className="text-lg">🔥 INVESTIMENTO HOJE:</span>
                                <span className="text-4xl font-bold text-gradient-gold">R$ 27,00</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative lg:h-[600px] flex items-center justify-center"
                    >
                        {/* Background Blob */}
                        <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-secondary/20 to-gold-400/20 rounded-full blur-3xl -z-10"></div>

                        {/* Mockup Image Placeholder */}
                        <div className="relative w-full max-w-sm mx-auto">
                            <motion.img
                                src="/ebook-cover.png"
                                alt="Capa do E-book START 10K"
                                className="w-full h-auto rounded-xl shadow-2xl border-4 border-white/5"
                                initial={{ opacity: 0, x: 100, rotate: -15 }}
                                whileInView={{ opacity: 1, x: 0, rotate: -5 }}
                                whileHover={{ rotate: 0, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                                viewport={{ once: true }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
