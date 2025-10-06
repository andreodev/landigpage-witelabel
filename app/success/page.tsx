import { LeftArrow } from "@/components/Icons";
import Link from "next/link";

export default function SuccessPage() {
    
    return (
        <section className="min-h-screen flex flex-col  items-center justify-center bg-gradient-to-l from-[#6D03F5] to-[#D74B18] text-center px-4">
            <h1 className="text-2xl sm:text-4xl md:text-[64px] font-bold text-white text-center max-w-4xl leading-tight">
                Obrigado por ter <br className="block sm:hidden" />
                enviado o formulário
            </h1>
            <p className="mt-4 text-[20px] sm:text-lg text-white/90 max-w-xl">
                Em breve um de nossos consultores irá entrar em contato via WhatsApp!
            </p>

            <Link href="/" className="mt-8 items-center gap-3 flex rounded-full bg-white text-[#D74B18] px-6 py-3 font-medium hover:bg-gray-200 transition">
                Voltar à página inicial
                    <LeftArrow color="#D74B18" />
            </Link>
        </section>
    );
}