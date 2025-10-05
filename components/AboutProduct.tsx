import Image from "next/image";
import imagem2 from "../public/assets/imagem2.png";
import { HoldCode, ShieldGlobe, TradingGraph, UserChat } from "./Icons";

export default function AboutProduct() {
    return (
        <section className="bg-[#FAFAFA] text-black pb-[80px] sm:pb-[120px] px-4">
            <div
                className="flex justify-center"
            >
            </div>
            <div className="mx-auto w-full max-w-7xl space-y-16 sm:space-y-20 lg:space-y-28">
                <div
                    className="grid grid-cols-1 xl:grid-cols-2 gap-10 sm:gap-14 lg:gap-20"
                    id="API"
                >
                    <div
                        className="order-2 md:order-1 w-full"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-[64px] font-bold leading-tight">
                            API de fácil integração
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-[#000000B2]">
                            Integre a nossa API com a nossa documentação e conte com o suporte
                            ativo da nossa equipe técnica para auxiliar na integração.
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg">
                            <div className="flex items-center gap-3 bg-white border border-[#E3EAF7] rounded-3xl px-4 py-4">
                                <div className="h-10 w-10 grid place-items-center bg-[#E3EAF780] rounded-lg">
                                    <HoldCode />
                                </div>
                                <span className="text-[#0A1519] font-medium text-base">
                                    Integração simplificada
                                </span>
                            </div>

                            <div className="flex items-center gap-3 bg-white border border-[#E3EAF7] rounded-3xl px-4 py-4">
                                <div className="h-10 w-10 grid place-items-center bg-[#E3EAF780] rounded-lg">
                                    <TradingGraph />
                                </div>
                                <span className="text-[#0A1519] font-medium text-base">
                                    Escalabilidade garantida
                                </span>
                            </div>

                            <div className="flex items-center gap-3 bg-white border border-[#E3EAF7] rounded-3xl px-4 py-4">
                                <div className="h-10 w-10 grid place-items-center bg-[#E3EAF780] rounded-lg">
                                    <UserChat />
                                </div>
                                <span className="text-[#0A1519] font-medium text-base">
                                    Suporte técnico especializado
                                </span>
                            </div>

                            <div className="flex items-center gap-3 bg-white border border-[#E3EAF7] rounded-3xl px-4 py-4">
                                <div className="h-10 w-10 grid place-items-center bg-[#E3EAF780] rounded-lg">
                                    <ShieldGlobe />
                                </div>
                                <span className="text-[#0A1519] font-medium text-base">
                                    Segurança e confiabilidade
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="order-1 md:order-2 justify-center hidden md:flex"
                    >
                        <Image
                            src={imagem2}
                            alt="Tela de API e integrações do produto"
                            className="w-full max-w-[620px] h-auto rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}