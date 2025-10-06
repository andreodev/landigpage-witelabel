import Image from "next/image";
import { Templates, Link, Monitor, CoddingApps, LeftArrow } from "./Icons";
import coins from "@/public/assets/coins.png"


export default function Gateway() {


    const CARDS = [
        {
            id: 1, title: 'Diversos Templates',
            description: 'Personalize seu gateway com diferentes layouts prontos, mantendo a identidade da sua marca sem precisar começar do zero ou com identidade genêrica', icon: <Templates />
        },
        {
            id: 2, title: 'Integração Rápida',
            description: 'Conecte sua solução em poucos cliques com plataformas como Shopify, WooCommerce e muito mais, acelerando seu go-to-market.', icon: <Link />
        },
        {
            id: 3, title: 'Segurança de ponta',
            description: 'Infraestrutura robusta com padrões internacionais de segurança para proteger transações e manter a confiança dos seus clientes.', icon: <Monitor />
        },
    ]

    return (
        <div className="my-24" id="vantagens">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl  justify-items-center mx-auto items-stretch">

                <div className="space-y-6">
                    {CARDS.map((card) => (
                        <div key={card.id} className="bg-white p-10 rounded-2xl w-full h-auto">
                            <div className="flex items-center gap-4">
                                {card.icon}
                                <h1 className="text-[#3B4781] font-medium text-base">{card.title}</h1>
                            </div>
                            <p className="mt-4 sm:mt-6 text-[#3B4781] text-[14px] w-full">{card.description}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-6 bg-white w-full h-full rounded-2xl">
                    <div className="w-full h-full bg-white rounded-2xl items-center flex flex-col ">
                        <div className="mt-14">
                            <CoddingApps />
                        </div>
                        <div className="items-center text-center max-w-sm mx-auto">
                            <h1 className=" text-[#3B4781] font-medium text-[32px] mt-4 ">Um gateway que não parece genérico</h1>
                            <p className="text-base text-[#3B4781] mt-4">Cada detalhe do sistema foi pensado para maximizar conversão, segurança e simplicidade</p>
                            <div className="my-8">

                                <a
                                    href="https://painel.witerecuperation.com/login"
                                    className="inline-flex gap-5  items-center justify-between transition-transform duration-200 hover:scale-105 bg-[#6D03F5] text-white py-4  rounded-full  w-full max-w-[240px]"
                                >
                                    <a href="#form" className="ml-5 font-semibold text-base ">
                                        Começar Agora
                                    </a>
                                    <span className="inline-flex items-center justify-center mr-3.5 bg-white text-[#01AEA4] rounded-full w-[62px] h-[32px]">
                                        <LeftArrow color='#6D03F5' />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="relative mt-6">
                            <div className="absolute sm:left-1/6 sm:-translate-x-1/4  sm:z-10">
                                <Image
                                    alt="coins image"
                                    src={coins}
                                    
                                    className="  sm:max-w-none h-auto"
                                />
                            </div>
                            <div className="border border-[#C0D3F2] rounded-2xl pt-36 ">
                                <p className="pt-6 text-center text-base text-[#3B4781] px-4 pb-3.5">Venda com <span className="font-medium text-[#6D03F5]">+100 Criptomoedas diferentes</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}