import { motion } from 'framer-motion';
import { Award, Globe, Briefcase, GraduationCap } from 'lucide-react';

const badges = [
    { icon: Award, text: '30 Anos de Mercado' },
    { icon: Globe, text: 'Projetos em 7 Estados' },
    { icon: Briefcase, text: 'CEO Sheets Park Group' },
    { icon: GraduationCap, text: '+1.000 Corretores Mentorados' }
];

export default function AboutAuthor() {
    return (
        <section id="sobre" className="py-20 bg-gradient-to-br from-primary via-accent to-dark text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 hidden lg:block"
                    >
                        <div className="relative">
                            {/* Rafael's Photo - Hands Presenting */}
                            <img
                                src={`${import.meta.env.BASE_URL}uploaded_image_1_1764306153458.png`}
                                alt="Rafael Targino - CEO Sheets Park Group"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                                style={{
                                    filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.5))'
                                }}
                            />
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-gold-400/30 blur-3xl -z-10"></div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 glass-dark rounded-2xl p-8 md:p-12"
                    >
                        <div className="inline-block bg-gradient-gold text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                            CEO Sheets Park Group | 30 Anos de Mercado
                        </div>

                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                            Quem é Rafael Targino
                        </h2>

                        <div className="space-y-6 text-white/90 leading-relaxed">
                            <p className="text-lg font-medium">
                                Rafael Targino é <strong>CEO do Sheets Park Group</strong> e uma autoridade com <strong className="text-secondary">30 anos de experiência</strong>.
                            </p>

                            <p>
                                De vendedor de casas populares a líder de operações em 7 estados, ele sistematizou o método exato que gerou mais de <strong>R$ 850 milhões em vendas</strong> para entregar a você o "mapa do tesouro".
                            </p>

                            <div className="bg-white/5 p-5 rounded-xl border border-gold-500/30">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-secondary flex-shrink-0" />
                                        <span>30 Anos de Mercado Imobiliário</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Globe className="w-5 h-5 text-secondary flex-shrink-0" />
                                        <span>Atuação Nacional e Internacional</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-secondary flex-shrink-0" />
                                        <span>+1.000 Corretores Mentorados</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="hidden md:grid grid-cols-2 gap-4 mt-8">
                            {badges.map((badge, index) => {
                                const Icon = badge.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-gold-500/20"
                                    >
                                        <Icon className="w-6 h-6 text-secondary flex-shrink-0" />
                                        <span className="text-sm font-semibold">{badge.text}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
