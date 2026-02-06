import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'O START 10K serve para quem nunca vendeu imóveis?',
        answer: 'Sim! O método foi desenhado para te levar do zero absoluto até suas primeiras vendas. Você vai aprender desde a postura profissional até o fechamento.'
    },
    {
        question: 'Preciso ter CRECI para começar?',
        answer: 'Não para estudar e aprender. O método funciona tanto para quem ainda não tem CRECI quanto para quem já tem registro mas nunca vendeu ou quer aumentar resultados.'
    },
    {
        question: 'Por que o valor é tão baixo (R$ 27,00)?',
        answer: 'Esta é uma estratégia de "isca digital" para democratizar o acesso. Quero que você conheça a qualidade do meu material sem barreira de entrada. O valor real é inestimável.'
    },
    {
        question: 'Quanto tempo leva para eu faturar meus primeiros 10k?',
        answer: 'Isso depende da sua dedicação e consistência. Mas com aplicação correta do método, a maioria dos nossos alunos fecha a primeira venda de 5-10k entre 30 a 90 dias.'
    },
    {
        question: 'Este e-book substitui uma mentoria?',
        answer: 'Não. O START 10K é o primeiro passo — uma base sólida para você entender o mercado e começar a vender. Para quem quer aceleração máxima, temos mentorias individuais e em grupo.'
    },
    {
        question: 'Vou receber suporte ou é só o e-book?',
        answer: 'Este é um produto digital informativo. Você recebe todo o conteúdo para estudar no seu ritmo. Para suporte direto, recomendamos nossas mentorias.'
    },
    {
        question: 'Como funciona a garantia de 7 dias?',
        answer: 'Simples: você tem 7 dias para explorar todo o conteúdo. Se por qualquer motivo não ficar satisfeito, basta enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.'
    },
    {
        question: 'O pagamento é seguro?',
        answer: 'Sim! Todo processamento é feito pela Hotmart, a maior plataforma de produtos digitais da América Latina, com certificado SSL e máxima segurança.'
    },
    {
        question: 'Tenho acesso imediato ao conteúdo?',
        answer: 'Sim! Assim que o pagamento for aprovado, você recebe o acesso por e-mail automaticamente. Pode começar a estudar em 2 minutos.'
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:border-gold-200 transition-colors duration-300"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gold-50/30 transition-colors"
            >
                <span className="font-heading font-semibold text-primary pr-4 text-lg">
                    {question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                className="overflow-hidden"
            >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                    {answer}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function FAQ() {
    return (
        <section id="faq" className="py-20 bg-texture-paper border-t border-gold-100/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-lg text-gray-600">
                        Tire suas dúvidas e comece sua jornada com segurança
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
