import Accordion from "./Accordion";

const FAQ_ITEMS = [
    {
        id: "q1",
        title: "Como funciona a IA?",
        content:
            "Nossa tecnologia detecta carrinhos abandonados, entende o comportamento do cliente e envia mensagens personalizadas para recuperar a venda.",
    },
    {
        id: "q2",
        title: "É seguro utilizar a Wite Recuperation?",
        content:
            "Sim — usamos práticas seguras e conformidade com regras de privacidade e boas práticas de envio.",
    },
    {
        id: "q3",
        title: "Quanto custa?",
        content:
            "Pode variar do seu produto ou da sua loja. Conseguimos negociações hoje entre 5% a 30% de todas as vendas recuperadas.",
    },
    {
        id: "q4",
        title: "Quais plataformas a Wite Recuperation se integra?",
        content:
            "A Wite Recuperation já está integrada com os principais checkouts do mercado: Wite Checkout, Vega, Luna, Kirvano, Adoorei e Yampi. Em breve com mais integrações. ",
    },
    {
        id: "q5",
        title: "Preciso de conhecimento técnico para utilizar a IA?",
        content:
            "Não. A plataforma foi criada para ser direta e intuitiva. Basta conectar sua loja ou checkout, e nossa inteligência artificial faz todo o trabalho de detectar os carrinhos abandonados e recuperar as vendas automaticamente, seu trabalho é ver suas vendas sendo recuperadas",
    },
];

export default function Perguntas() {
    return (
        <section className="w-full py-20 bg-[#FAFAFA]">
            <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 flex items-start">
                    <h2 className="text-[64px] font-semibold text-[#52667E]">
                        Perguntas frequentes
                    </h2>
                </div>

                <div className="lg:col-span-2">
                    <Accordion items={FAQ_ITEMS} />
                </div>
            </div>
        </section>
    );
}