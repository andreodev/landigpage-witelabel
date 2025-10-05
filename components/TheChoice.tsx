import { LeftArrow } from "./Icons";

export default function TheChoice() {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="bg-gradient-to-r from-[#6D03F5] to-[#D74B18] rounded-xl p-6 md:p-9 flex flex-col sm:flex-row items-center sm:justify-between gap-6">
                {/* Texto à esquerda */}
                <div className="flex flex-col gap-2 text-white text-center sm:text-left">
                    {/* Badge + Texto pequeno */}
                    <span className="inline-flex items-center rounded-full  text-white text-sm border border-[#FFFFFF80] py-1 max-w-[330px]">
                        <span className="bg-[#FFFFFF4D] text-white text-xs font-medium px-2.5 py-1 rounded-full ml-1 mr-2">
                            A escolha
                        </span>
                        <span className="pr-4 text-base">
                            Esse é o momento de decidir!
                        </span>
                    </span>

                    {/* Título principal */}
                    <h3 className="text-2xl md:text-[32px] font-bold">
                        Uma escolha simples, que te rende muito dinheiro
                    </h3>
                </div>

                {/* Botão à direita */}
                <a
                    href="https://wa.me/message/DI2CNY3P2TWFE1"
                    className="inline-flex items-center justify-between bg-white text-[#6D03F5] py-3 px-6 rounded-full  w-full max-w-[320px]"
                >
                    <span className="pl-1 font-semibold text-base">
                        Começar Agora
                    </span>
                    <span className="inline-flex items-center justify-center bg-[#D74B18] text-[#01AEA4] rounded-full w-[62px] h-[32px]">
                        <LeftArrow />
                    </span>
                </a>
            </div>
        </section>
    );
}