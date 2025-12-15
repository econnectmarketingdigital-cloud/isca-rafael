import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight } from 'lucide-react';

export default function UrgencySection() {
    return (
        <section className="py-16 bg-yellow-50 border-y border-yellow-200">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <AlertTriangle className="w-8 h-8 text-yellow-600 animate-pulse" />
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">
                            Atenção: Oferta de Lançamento
                        </h2>
                    </div>

                    <div className="space-y-4 text-lg text-gray-700 mb-8">
                        <p>
                            O preço promocional de <strong className="text-green-600">R$ 27,00</strong> é válido apenas para os primeiros
                            <strong className="bg-yellow-200 px-2 py-0.5 rounded mx-1">500 alunos</strong>
                            ou até o final desta semana.
                        </p>
                        <p>
                            Após isso, o investimento voltará para <span className="line-through text-gray-400">R$ 97,00</span> (o valor justo do conteúdo).
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-yellow-100 inline-block w-full max-w-2xl">
                        <p className="font-semibold text-gray-800 mb-6 flex items-center justify-center gap-2">
                            👉 Não perca esta oportunidade de começar sua jornada rumo aos 10k por menos que um almoço.
                        </p>

                        <a
                            href="#investimento"
                            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto"
                        >
                            GARANTIR MINHA VAGA AGORA
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
