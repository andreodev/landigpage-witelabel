import Image from "next/image";
import phone from "@/public/assets/phone.png";
import { BigEyes, Dashboard, StreamLine, Widget } from "./Icons";

export default function AppSection() {
    return (
        <section
            id="aplicativo"
            className="relative overflow-hidden  my-18"
           
        >
            <div className="relative max-w-6xl mx-auto w-full">
                <div className="text-center flex flex-col justify-center items-center rounded-2xl mb-[20px] sm:mb-[81px]">
                    <h2 className="text-[#52667E] text-4xl sm:text-6xl lg:text-[52px] font-semibold  leading-tight">
                        Tenha seu próprio aplicativo
                    </h2>
                    <p className="text-[#152538]/60 text-base p-3 sm:text-2xl">Recuperação inteligente de vendas com I.A</p>
                </div>
                <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr] items-center bg-gradient-to-l to-[#D74B18] from-[#6D03F5] sm:rounded-2xl sm:my-[40px] px-4 sm:px-6"
                    style={{
                        justifyItems: 'center',
                        alignItems: 'center',
                       
                    }}
                >
                    <div className="w-full order-2 lg:ml-10 lg:order-1 flex justify-center">
                        <div className="rounded-2xl p-4 justify-center text-center text-[#FFFFFF] flex">
                            <div className="flex flex-col gap-8 my-auto w-full">
                                <div className="flex flex-col items-center gap-6">
                                    <div className="p-2 sm:p-4 flex items-center rounded-xl bg-[#FFFFFF33]">
                                        <Dashboard />
                                    </div>
                                    <div className="max-w-[420px] mx-auto text-center text-lg sm:text-xl">
                                        Aplicativo com sua marca, cores e logotipo, reforçando sua autoridade no mercado.
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-6">
                                    <div className="p-2 sm:p-4 flex items-center justify-center rounded-xl bg-[#FFFFFF33]">
                                        <StreamLine />
                                    </div>
                                    <div>
                                        <p className="text-[20px] text-lg sm:text-xl">Ofereça uma jornada personalizada, sem parecer uma solução genérica.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 -mt-3 lg:-mb-12 lg:-mt-14 flex justify-center order-1 lg:order-2">
                        <div className="absolute  rounded-[40px]  opacity-60 pointer-events-none" />
                        <div className="relative transform -rotate-2 w-[363px] sm:w-[360px] md:w-[420px]">
                            <Image
                                src={phone}
                                alt="mockup celular"
                               
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-md order-3 lg:mr-10 lg:order-3 flex justify-center">
                        <div className="rounded-2xl p-4  text-white lg:min-h-[360px] flex">
                            <div className="flex flex-col gap-8 my-auto">
                                <div className="flex flex-col items-center gap-6 ">
                                    <div className="flex flex-col items-center gap-6 text-center">
                                        <div className="p-2 sm:p-4 flex items-center justify-center rounded-xl bg-[#FFFFFF33] ">
                                            <Widget />
                                        </div>
                                        <div>
                                            <p className="text-[20px] text-lg sm:text-xl">Seu app disponível nas lojas oficiais, dando credibilidade e visibilidade.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-6 mb-4">
                                    <div className="flex flex-col items-center gap-6  text-center">
                                        <div className="p-2 sm:p-4 flex items-center justify-center rounded-xl bg-[#FFFFFF33] ">
                                            <BigEyes />
                                        </div>
                                        <div>
                                            <p className="text-[20px] text-lg sm:text-xl">
                                                Clientes percebem segurança e profissionalismo ao usar um app próprio da sua marca.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 h-[260px] sm:h-[320px] lg:h-[380px] pointer-events-none" />
                </div>
            </div>
        </section>
    );
}