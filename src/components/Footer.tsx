import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-gradient-gold">
                            RAFAEL TARGINO
                        </h2>
                        <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                            Transformando corretores comuns em profissionais de alta performance através de um método validado por 30 anos de mercado e mais de R$ 850 milhões em vendas.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Instagram, href: '#' },
                                { icon: Facebook, href: '#' },
                                { icon: Linkedin, href: '#' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-heading font-bold mb-6 text-lg">Links Rápidos</h3>
                        <ul className="space-y-3 text-gray-400">
                            {['Sobre', 'O Que Você Recebe', 'Depoimentos', 'Garantia', 'FAQ'].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="hover:text-secondary transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-heading font-bold mb-6 text-lg">Contato</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                                <span>suporte@rafaeltargino.com.br</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                                <span>(11) 99999-9999</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                                <span>São Paulo, SP</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p className="mb-2">
                        &copy; {new Date().getFullYear()} Rafael Targino. Todos os direitos reservados.
                    </p>
                    <p>
                        Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.
                    </p>
                </div>
            </div>
        </footer>
    );
}
