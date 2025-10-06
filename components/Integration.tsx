import React from "react";
import { Flash, WalletCheck, ShoppingCard } from "./Icons";

type Feature = {
    title: string;
    description: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const FEATURES: Feature[] = [
    {
        title: "Implantação Rápida",
        description:
            "Coloque sua operação no ar em poucos dias, sem burocracia ou processos demorados.",
        Icon: Flash,
    },
    {
        title: "Integração com a Wite Recuperation",
        description:
            "Tenha nativamente a inteligência de recuperação de vendas, aumentando a sua receita.",
        Icon: ShoppingCard,
    },
    {
        title: "Controle total da receita",
        description:
            "Defina taxas e condições do seu jeito para maximizar ganhos.",
        Icon: WalletCheck,
    },
];

export default function Integration() {
    return (
        <section className="w-full bg-[#FAFAFA] my-18 p-5 sm:p-0" id="integracao">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
                <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-3 md:gap-x-12 ">
                    {FEATURES.map(({ title, description, Icon }) => (
                        <article key={title} className="flex items-center gap-5 md:gap-6">
                            <div className="shrink-0">
                                <div className="grid     ">
                                    <Icon className=" text-[#01AEA4]" aria-hidden="true" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[18px] font-medium text-[#3B4781]">
                                    {title}
                                </h3>
                                <p className="mt-2  text-base leading-relaxed text-[#3B4781]">
                                    {description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}