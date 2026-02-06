import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function UrgencyBar() {
    return (
        <section className="py-16 bg-gradient-to-r from-orange-100 to-yellow-100 border-t-2 border-b-2 border-secondary">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-6"
                >
                    <div className="flex items-center justify-center gap-2 text-secondary">
                        <AlertTriangle className="w-8 h-8" />
                        <h3 className="text-2xl md:text-3xl font-heading font-bold">
                            ATENÇÃO: OFERTA POR TEMPO LIMITADO
                        </h3>
                    </div>

                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        O preço promocional de <strong>R$ 27,00</strong> é uma oferta de lançamento
                        para os primeiros 500 compradores.
                    </p>

                    <p className="text-gray-600">
                        Após atingirmos este número, o preço volta para <strong className="text-danger">R$ 47,00</strong>.
                    </p>

                    {/* Progress Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-full h-8 overflow-hidden shadow-inner">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '85.4%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: 'easeOut' }}
                                className="bg-gradient-to-r from-secondary to-orange-600 h-full flex items-center justify-center text-white font-semibold text-sm"
                            >
                                427 / 500 kits garantidos
                            </motion.div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                            Restam apenas <strong className="text-danger">73 kits</strong> com este preço
                        </p>
                    </div>

                    <p className="text-gray-700 font-semibold">
                        Não perca esta oportunidade única de ter acesso ao método Rafael Targino por menos que um café.
                    </p>

                    <a
                        href="https://pay.hotmart.com/G103379648S"
                        className="inline-block bg-success hover:bg-green-600 text-white font-heading font-semibold text-lg py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        GARANTIR MEU START 10K POR R$ 27 AGORA
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
