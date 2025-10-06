import { ActionSquare, SupportHuman, TableDraw } from "./Icons";
import { Fragment } from 'react';


export default function Steps() {
    const CARDS = [
        { id: 1, title: "Conheça a Solução", points: ["Entenda como funciona a WiteLabel", "Veja como transformar sua marca em referência no setor"], icon: ActionSquare },
        { id: 2, title: "Personalização da Plataforma", points: ["Seu gateway com nome, logo e identidade visual da sua empresa", "Painel administrativo com a sua marca"], icon: TableDraw },
        { id: 3, title: "Conecte e Ative os Pagamentos", points: ["Integração simples via API", "Pix, cartão, boleto e carteiras digitais prontos para uso"], icon: ActionSquare },
        { id: 4, title: "Escalabilidade e Suporte Dedicado", points: ["Estrutura robusta para alto volume de transações", "Time especializado para suporte técnico e operacional"], icon: SupportHuman },
        ]

    return (
        <section className="mb-24" id="primeiros-passos">
            <div className="text-center max-w-3xl mx-auto  mb-10">
                <h1 className="text-4xl sm:text-6xl font-semibold text-[#52667E]">Os primeiros passos para conectar sua marca</h1>
                <p className="text-base sm:text-lg text-[#52667EB2] mt-4">Em 4 passos simples</p>
            </div>

            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto p-10 sm:p-0">
                {CARDS.map((card, idx) => {
                    const isGradientLeft = idx % 2 === 1;
                    const content = (
                        <div key={`content-${card.id}`} className="bg-white items-center sm:my-4 justify-center flex flex-col rounded-[20px] border border-[#E3EAF7] p-6 sm:p-10 w-full">
                            <p className="text-xl text-[#52667E] mr-auto font-semibold ml-4 py-2">{card.id}</p>
                            <h3 className="mt-4 text-2xl font-medium text-[#52667E] mr-auto">{card.title}</h3>
                            <ul className="mt-4  text-base sm:text-base text-[#52667E]/60 list-disc list-inside mr-auto ml-2">
                                {card.points.map((p, i) => (
                                    <li key={i}>{p}</li>
                                ))}
                            </ul>
                        </div>
                    );

                    const Icon = card.icon;
                    const justifyClass = isGradientLeft ? 'justify-start' : 'justify-end';

                    const gradient = (
                        <div key={`grad-${card.id}`} className="rounded-[20px] overflow-hidden sm:my-4 w-full">
                            <div className={`bg-gradient-to-r from-[#D74B18] to-[#6D03F5] flex items-center ${justifyClass} min-h-[220px] sm:min-h-[180px]`}>
                                <div className="text-white p-0 sm:p-0 max-w-[60%] sm:max-w-[70%]">
                                    <Icon />
                                </div>
                            </div>
                        </div>
                    );

                    return isGradientLeft ? (
                        <Fragment key={`pair-${card.id}`}>
                            {gradient}
                            {content}
                        </Fragment>
                    ) : (
                        <Fragment key={`pair-${card.id}`}>
                            {content}
                            {gradient}
                        </Fragment>
                    );
                })}
            </div>

            {/* Mobile Layout */}

            <div className="grid sm:hidden grid-cols-1 gap-6 max-w-6xl mx-auto p-6">
                {CARDS.map((card) => {
                    const Icon = card.icon;
                    return (
                        <div key={`mobile-${card.id}`} className="w-full">
                            <div className="bg-white rounded-[20px] border border-[#E3EAF7] p-6 mb-4">
                                <p className="text-xl text-[#52667E] font-semibold mb-2">{card.id}</p>
                                <h3 className="text-2xl font-medium text-[#52667E] mb-2">{card.title}</h3>
                                <ul className="mt-2 text-[#52667E]/60 list-disc list-inside ml-4">
                                    {card.points.map((p, i) => (
                                        <li key={i}>{p}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-[20px] overflow-hidden w-full">
                                <div className={`bg-gradient-to-r from-[#D74B18] to-[#6D03F5] flex items-center justify-center min-h-[160px]`}>
                                    <div className="text-white p-4">
                                        <Icon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}