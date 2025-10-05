"use client"

import { motion } from "framer-motion";
import { CoachChart, MeetingRemote, MobileApp, Secure, TeamWork, TeamWorkFistBump } from "./Icons";

export default function UserExperience() {
    return (
        <section
            className="bg-gradient-to-t to-[#6D03F5] from-[#D74B18] text-white flex flex-col items-center justify-start min-h-svh py-20 px-6"
            id="tecnologiaPix"
        >
            {/* Texto em cima */}
            <div className="max-w-6xl text-center">
                <h1 className="font-bold text-3xl sm:text-5xl md:text-[64px] leading-tight">
                    Experiência do usuário
                </h1>
                <p className="mt-5">Nossa equipe de UX/UI trabalha constantemente para criar a melhor experiência de pagamento possível, resultando em maiores taxas de conversão.</p>
            </div>

            {/* Grid embaixo */}
            <div className="mt-[72px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl">
                {/* Card 1 */}
                <motion.div
                    className="bg-white/5 rounded-2xl p-10"
                    initial={{ y: 100, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }} 
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="mb-6">
                        <div className="bg-white/7 rounded-xl p-2 inline-flex items-center justify-center">
                            <CoachChart />
                        </div>
                    </div>

                    <h1 className="text-white font-medium text-[20px] w-full ">
                        Experiência de usúario
                        Premium
                    </h1>
                    <p className="mt-2 text-white/80 text-base leading-relaxed whitespace-pre-line">
                        {`Quality guides every project and decision.`}
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    className="bg-white/5 rounded-2xl p-10"
                    initial={{ y: 100, opacity: 0 }} // Começa invisível e fora da tela
                    whileInView={{ y: 0, opacity: 1 }} // Quando entra na tela, a animação começa
                    transition={{
                        duration: 0.6, // Duração da animação
                        ease: "easeOut", // Suaviza a animação
                        delay: 0.1, // Atraso para o card começar um pouco depois
                    }}
                    viewport={{ once: true, amount: 0.3 }} // Executa animação quando 30% do card entra na tela
                >
                    <div className="mb-6">
                        <div className="bg-white/7 rounded-xl p-2 inline-flex items-center justify-center">
                            <TeamWork />
                        </div>
                    </div>

                    <h1 className="text-white font-medium text-[20px]">
                        Personalização total
                    </h1>
                    <p className="mt-2 text-white/80 text-base leading-relaxed whitespace-pre-line">
                        {`Adapte cores, fontes e layout para 
                            combinar perfeitamente com 
                            sua identidade visual. `}
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    className="bg-white/5 rounded-2xl p-10"
                    initial={{ y: 100, opacity: 0 }} // Começa invisível e fora da tela
                    whileInView={{ y: 0, opacity: 1 }} // Quando entra na tela, a animação começa
                    transition={{
                        duration: 0.6, // Duração da animação
                        ease: "easeOut", // Suaviza a animação
                        delay: 0.2, // Atraso para o card começar um pouco depois
                    }}
                    viewport={{ once: true, amount: 0.3 }} // Executa animação quando 30% do card entra na tela
                >
                    <div className="mb-6">
                        <div className="bg-white/7 rounded-xl p-2 inline-flex items-center justify-center">
                            <Secure />
                        </div>
                    </div>

                    <h1 className="text-white font-medium text-[20px]">Segurança máxima</h1>
                    <p className="mt-2 text-white/80 text-base leading-relaxed whitespace-pre-line">
                        {`Certificação PCI-DSS e 
                            criptografia de ponta a ponta 
                            para proteger 
                            seus clientes. `}
                    </p>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                    className="bg-white/5 rounded-2xl p-10"
                    initial={{ y: 100, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }} 
                    transition={{
                        duration: 0.6, 
                        ease: "easeOut",
                        delay: 0.3,
                    }}
                    viewport={{ once: true, amount: 0.3 }} 
                >
                    <div className="mb-6">
                        <div className="bg-white/7 rounded-xl p-2 inline-flex items-center justify-center">
                            <MeetingRemote />
                        </div>
                    </div>

                    <h1 className="text-white font-medium text-[18px]">Performance otimizada</h1>
                    <p className="mt-2 text-white/80 text-base leading-relaxed whitespace-pre-line">
                        {" "}
                        {`Processamento ultra-rápido com 
latência mínima para melhor 
experiência de pagamento. `}
                    </p>
                </motion.div>

                {/* Card 5 */}
                <motion.div
                    className="bg-white/5 rounded-2xl p-10"
                    initial={{ y: 100, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }} 
                    transition={{
                        duration: 0.6, 
                        ease: "easeOut", 
                        delay: 0.4, 
                    }}
                    viewport={{ once: true, amount: 0.3 }} 
                >
                    <div className="mb-6">
                        <div className="bg-white/7 rounded-xl p-2 inline-flex items-center justify-center">
                            <MobileApp />
                        </div>
                    </div>

                    <h1 className="text-white font-medium text-[18px]">Aplicativo mobile</h1>
                    <p className="mt-2 text-white/80 text-base leading-relaxed whitespace-pre-line">
                        {`Ofereça um aplicativo com a sua marca `}
                    </p>
                </motion.div>

                {/* Card 6 */}
                <motion.div
                    className="bg-white/5 rounded-2xl p-10"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }} 
                    transition={{
                        duration: 0.6,
                        ease: "easeOut", 
                        delay: 0.5, 
                    }}
                    viewport={{ once: true, amount: 0.3 }} 
                >
                    <div className="mb-6">
                        <div className="bg-white/7 rounded-xl p-2 inline-flex items-center justify-center">
                            <TeamWorkFistBump />
                        </div>
                    </div>

                    <h1 className="text-white font-medium text-[18px]">Analytics avançado</h1>
                    <p className="mt-2 text-white/80 text-base leading-relaxed whitespace-pre-line">
                        {`Dashboards completos com insights acionáveis sobre suas vendas e performance. `}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}