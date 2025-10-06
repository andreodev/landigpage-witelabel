import Accordion from "./Accordion";

const FAQ_ITEMS = [
    {
        id: "q1",
        title: "Preciso ter conhecimento técnico para usar a plataforma?",
        content:
            "Não. A solução foi desenvolvida para ser totalmente acessível, com templates prontos, integração simplificada e suporte especializado para garantir uma implantação rápida e eficiente.",
    },
    {
        id: "q2",
        title: "Quais tipos de personalização estão disponíveis?",
        content:
            "Oferecemos personalização completa de identidade visual, incluindo logo, cores, domínio e layout. Assim, sua marca opera com total autonomia e identidade própria.",
    },
    {
        id: "q3",
        title: "A solução é segura?",
        content:
            "Sim. Utilizamos tecnologia de segurança de nível bancário, com criptografia avançada e monitoramento contínuo, assegurando a integridade das transações e a proteção dos dados de todos os usuários.",
    },
    {
        id: "q4",
        title: "Em quanto tempo posso colocar minha White Label no ar?",
        content:
            "Em até 72 horas após a validação dos dados, sua plataforma pode estar plenamente operacional, com o acompanhamento da nossa equipe técnica durante todo o processo de ativação.",
    },
    {
        id: "q5",
        title: "O que preciso para começar?",
        content:
            "Basta entrar em contato com nossa equipe comercial e enviar as informações da sua marca. Nós cuidamos da configuração, personalização e integração para que sua operação entre em produção com segurança e agilidade.",
    },
];

export default function Perguntas() {
    return (
        <section className="w-full mb-20 bg-[#FAFAFA]" id="perguntas">
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