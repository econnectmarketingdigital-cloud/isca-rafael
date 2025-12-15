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
        <section className="py-20 bg-gradient-to-br from-primary via-accent to-dark text-white relative overflow-hidden">
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
                        className="lg:col-span-2"
                    >
                        <div className="relative">
                            {/* Rafael's Photo - Hands Presenting */}
                            <img
                                src="/uploaded_image_1_1764306153458.png"
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

                        <div className="space-y-4 text-white/90 leading-relaxed">
                            <p>
                                Rafael Targino não é apenas um nome no mercado imobiliário — é uma trajetória construída
                                ao longo de três décadas com resultados concretos e impacto real na vida de milhares de pessoas.
                            </p>

                            <p>
                                Nascido no Rio de Janeiro em 1977, Rafael começou sua jornada em 1995, quando aceitou um
                                convite inusitado da mãe para atuar na venda de casas populares no Rio Grande do Norte.
                                O que era para ser temporário se tornou uma vocação que o levaria a transformar não apenas
                                sua própria vida, mas a de mais de 1.000 corretores ao longo dos anos.
                            </p>

                            <p className="font-semibold text-white">
                                Ao longo de 30 anos, Rafael:
                            </p>

                            <ul className="space-y-2 ml-4">
                                <li>• Gerou mais de R$ 850 milhões em VGV (Valor Geral de Vendas)</li>
                                <li>• Coordenou operações imobiliárias em 7 estados brasileiros</li>
                                <li>• Viveu nos Estados Unidos e Espanha, expandindo sua visão global de negócios</li>
                                <li>• Especializou-se no nicho de loteamentos — o mercado de maior retorno e menor concorrência</li>
                                <li>• Fundou e lidera o Sheets Park Group, empresa com atuação nacional</li>
                            </ul>

                            <p>
                                Mas Rafael não se contentou apenas com o próprio sucesso. Sua missão é clara:{' '}
                                <strong className="text-secondary">democratizar o conhecimento que o levou ao topo</strong>{' '}
                                e provar que qualquer pessoa, com método, disciplina e os pilares certos, pode prosperar
                                no mercado imobiliário.
                            </p>

                            <p>
                                O START 10K é o primeiro passo dessa jornada transformadora. O mesmo conteúdo que Rafael
                                usa para mentorar corretores de elite, agora acessível para você por um valor simbólico.
                            </p>

                            <blockquote className="border-l-4 border-secondary pl-4 italic text-white/80 my-6">
                                "Não basta ter experiência. É preciso sistematizar o conhecimento e passar adiante.
                                Esse é meu legado." — Rafael Targino
                            </blockquote>

                            <div className="bg-white/5 p-6 rounded-xl border border-gold-500/30 mt-8">
                                <p className="text-lg font-medium text-white mb-2">
                                    Agora, pela primeira vez, Rafael está disponibilizando o método que ele levou 30 anos para aperfeiçoar em um formato acessível para quem está começando.
                                </p>
                                <p className="text-gold-300 font-bold">
                                    Esta é sua oportunidade de aprender com quem JÁ FEZ, sem precisar cometer os mesmos erros.
                                </p>
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
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
