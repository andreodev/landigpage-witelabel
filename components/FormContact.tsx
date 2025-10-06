"use client"

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import consulto1 from "@/public/assets/consulto1.png";
import consulto2 from "@/public/assets/consulto2.png";
import consulto3 from "@/public/assets/consulto3.png";

import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

export default function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [sending, setSending] = useState(false);
    const [result, setResult] = useState<null | { ok: boolean; msg: string }>(
        null
    );

    // Mover credenciais para variáveis de ambiente.
    // Em Next.js, variáveis disponíveis no cliente devem começar com NEXT_PUBLIC_
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_5kfq4zy';
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_1xz8qqf';
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'bPwOAioU1XVOpAYGh';

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        // Apenas aviso durante o desenvolvimento/build — não interrompe o fluxo.
        if (typeof window !== 'undefined') {
            // cliente
            console.warn('EmailJS: variáveis de ambiente não configuradas. Verifique NEXT_PUBLIC_EMAILJS_*');
        } else {
            // servidor
            console.warn('EmailJS: variáveis de ambiente não configuradas. Verifique NEXT_PUBLIC_EMAILJS_*');
        }
    }

    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!formRef.current) return;

        setResult(null);
        setSending(true);
        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
                publicKey: PUBLIC_KEY,
            });
            formRef.current.reset();
            router.push("/success");
        } catch (err) {
            setResult({ ok: false, msg: "Falha ao enviar. Tente novamente." });
            console.error(err);
        } finally {
            setSending(false);
        }
    }

    return (
        <section className=" bg-[#FAFAFA] my-[120px]  px-4 sm:px-6 lg:px-8" id="form">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-start">
                    {/* ESQUERDA */}
                    <div>
                        <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight text-[#3B4781]">
                            Fale com a nossa 
                            <br />
                            equipe
                        </h1>

                        <p className="mt-4 text-base sm:text-lg text-[#323232] max-w-xl">
                            Nossos especialistas estão preparados para entender as
                            necessidades da sua operação e oferecer as melhores soluções!
                        </p>

                        <div className="mt-10 mb-12 flex items-center gap-3">
                            <div className="flex -space-x-4">
                                <motion.img
                                    className="relative z-10 h-16 w-16 sm:h-24 sm:w-24 lg:h-[105px] lg:w-[105px] rounded-full border-2 border-white object-cover"
                                    src={consulto1.src}
                                    alt="Consultor 1"
                                    initial={{ y: 0 }}
                                    animate={{ y: [0, -10, 0] }} 
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity, 
                                        repeatType: "loop", 
                                        ease: "easeInOut", 
                                    }}
                                />
                                <motion.img
                                    className="relative z-10 h-16 w-16 sm:h-24 sm:w-24 lg:h-[105px] lg:w-[105px] rounded-full border-2 border-white object-cover"
                                    src={consulto2.src}
                                    alt="Consultor 2"
                                    initial={{ y: 0 }} 
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 2, 
                                        repeat: Infinity, 
                                        repeatType: "loop", 
                                        ease: "easeInOut", 
                                        delay: 0.2, 
                                    }}
                                />
                                <motion.img
                                    className="relative z-10 h-16 w-16 sm:h-24 sm:w-24 lg:h-[105px] lg:w-[105px] rounded-full border-2 border-white object-cover"
                                    src={consulto3.src}
                                    alt="Consultor 3"
                                    initial={{ y: 0 }} 
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity, 
                                        repeatType: "loop",
                                        ease: "easeInOut", 
                                        delay: 0.4, 
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div id="form" className="mx-auto w-full max-w-lg mt-12 lg:mt-0">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="rounded-3xl bg-gradient-to-t to-[#6D03F5] from-[#D74B18] text-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                        >
                            <label className="block text-sm mb-1">Nome</label>
                            <input
                                name="user_name"
                                required
                                className="mb-4 w-full rounded-md bg-white text-black placeholder-black/40 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                                placeholder="Seu nome"
                                type="text"
                            />

                            <label className="block text-sm mb-1">
                                DDD + Número de telefone
                            </label>
                            <input
                                name="user_phone"
                                required
                                className="mb-4 w-full rounded-md bg-white text-black placeholder-black/40 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                                placeholder="(00) 00000-0000"
                                type="tel"
                            />

                            <label className="block text-sm mb-1">E-mail corporativo</label>
                            <input
                                name="user_email"
                                required
                                className="mb-4 w-full rounded-md bg-white text-black placeholder-black/40 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                                placeholder="nome@suaempresa.com"
                                type="email"
                            />

                            <label className="block text-sm mb-1">Empresa</label>
                            <input
                                name="user_company"
                                className="mb-4 w-full rounded-md bg-white text-black placeholder-black/40 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                                placeholder="Nome da sua empresa"
                                type="text"
                            />

                            <label className="block text-sm mb-1">Site</label>
                            <input
                                name="user_site"
                                className="mb-4 w-full rounded-md bg-white text-black placeholder-black/40 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                                placeholder="www.suaempresa.com"
                                type="text"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm mb-1">Setor de atuação</label>
                                    <select
                                        name="user_sector"
                                        className="w-full rounded-md bg-white text-black/70 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Selecione o setor
                                        </option>
                                        <option>SaaS</option>
                                        <option>Gateway</option>
                                        <option>iGaming</option>
                                        <option>Serviços</option>
                                        <option>Varejo físico</option>
                                        <option>Mercado financeiro</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm mb-1">
                                        Faturamento anual estimado
                                    </label>
                                    <select
                                        name="user_revenue"
                                        className="w-full rounded-md bg-white text-black/70 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Selecione uma estimativa
                                        </option>
                                        <option>Até R$ 1M</option>
                                        <option>R$ 1M – R$ 10M</option>
                                        <option>R$ 10M – R$ 50M</option>
                                        <option>Acima de R$ 50M</option>
                                    </select>
                                </div>
                            </div>

                            <label className="block text-sm mt-4 mb-1">
                                Descreva a sua necessidade
                            </label>
                            <textarea
                                name="message"
                                rows={4}
                                className="w-full rounded-md bg-white text-black placeholder-black/40 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                                placeholder="Descreva sua necessidade em detalhes..."
                            />

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                disabled={sending}
                                className="mt-6 w-full rounded-xl bg-[#484848] cursor-pointer py-3 font-semibold text-white hover:bg-white/60 transition disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {sending ? "Enviando..." : "Enviar formulário"}
                            </motion.button>

                            {result && (
                                <p
                                    className={`mt-3 text-sm ${result.ok ? "text-emerald-400" : "text-red-300"
                                        }`}
                                >
                                    {result.msg}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}