import { motion } from 'framer-motion';
import { BookOpen, Video, FileSpreadsheet, CheckSquare, Target, Award } from 'lucide-react';

const items = [
    {
        icon: BookOpen,
        title: 'E-book Completo START 10K',
        description: 'O manual definitivo com o passo a passo para iniciar no mercado imobiliário.'
    },
    {
        icon: Video,
        title: 'Método de 3 Passos',
        description: 'Vídeo explicativo detalhando a metodologia: Fazer, Multiplicar e Colher.'
    },
    {
        icon: Target,
        title: 'Autoavaliação de Perfil',
        description: 'Descubra seus pontos fortes e como usá-los para vender mais.'
    },
    {
        icon: FileSpreadsheet,
        title: 'Planilhas Financeiras',
        description: 'Ferramentas prontas para organizar suas comissões e metas.'
    },
    {
        icon: CheckSquare,
        title: 'Habit Tracker',
        description: 'Rastreador de hábitos para manter a disciplina de um campeão.'
    },
    {
        icon: Award,
        title: 'Checklist do 1º Negócio',
        description: 'Nunca mais esqueça uma etapa importante da venda.'
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
                                        className="flex gap-4 p-4 rounded-xl hover:bg-gold-50 transition-colors duration-200 border border-transparent hover:border-gold-200"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center shadow-md">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-bold text-primary mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
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
                        <div className="relative w-full max-w-md">
                            <div className="aspect-[3/4] bg-gradient-to-br from-primary to-dark rounded-xl shadow-2xl flex items-center justify-center border border-white/10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                                <div className="text-center p-8 text-white">
                                    <BookOpen className="w-20 h-20 mx-auto mb-4 text-secondary" />
                                    <h3 className="text-3xl font-heading font-bold mb-2">START 10K</h3>
                                    <p className="text-white/60">Manual Completo</p>
                                </div>
                            </div>

                            {/* Floating Value Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-10 -right-4 bg-white p-6 rounded-xl shadow-xl border border-gold-100"
                            >
                                <p className="text-sm text-gray-500 mb-1">Valor Total do Kit</p>
                                <p className="text-3xl font-bold text-primary line-through opacity-50">R$ 97,00</p>
                                <p className="text-4xl font-bold text-gradient-gold">R$ 4,97</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
