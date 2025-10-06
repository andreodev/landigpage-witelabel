"use client"

import Image from 'next/image';
import Link from 'next/link';
import logo from "@/public/assets/WiteLabel.png"

export default function Footer() {


    return (
        <footer className="mt-16 bg-gradient-to-l from-[#8200FE] to-[#D74B18] text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
                <div className="flex justify-between gap-8 items-start  md:text-left">
                    <div className="space-y-5 flex flex-col  md:items-start">
                        <Image src={logo} alt="testee" />
                    </div>
                    <div className="">
                        <div className="text-sm opacity-90">
                            <div className="space-y-2">
                                <div className="font-medium">
                                    <a href="#vantagens">Página inicial</a>
                                </div>
                                <div>
                                    <a href="#templates">Templates</a>
                                </div>
                                <div>
                                    <a href="#vantagens">Vantagens</a>
                                </div>
                                <div>
                                    <a href="#experiencia">Experiência de usuário</a>
                                </div>
                                <div>
                                    <a href="#primeiros-passos">Primeiros passos</a>
                                </div>
                                <div>
                                    <a href="#aplicativo">Aplicativo</a>
                                </div>
                                <div>
                                    <a href="#pergunta-frequentes">Perguntas frequentes</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex justify-end">
            <div className="bg-white/10 rounded-lg py-6 px-5 min-w-[180px]">
              <div className="text-sm mb-3">Baixe o nosso aplicativo</div>
              <div className="space-y-3">
                <div className="bg-white/20 rounded-md p-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/30 rounded flex items-center justify-center">▶</div>
                  <div className="text-xs">Disponível no<br/><strong>Google Play</strong></div>
                </div>
                <div className="bg-white/20 rounded-md p-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/30 rounded flex items-center justify-center"></div>
                  <div className="text-xs">Disponível na<br/><strong>App Store</strong></div>
                </div>
              </div>
            </div>
          </div> */}
                </div>

                <hr className="my-6 border-white/18" />

                <div className="flex flex-col md:flex-row  justify-between text-sm opacity-90">
                    <div className="mb-3 md:mb-0">
                        © 2025 WiteTec. Todos direitos reservados
                    </div>
                        <Link
                            href="/privacy-policy"
                            className="text-left cursor-pointer  decoration-white/40 hover:decoration-white hover:opacity-100 opacity-90"
                        >
                        Política de privacidade
                        </Link>
                        <Link
                            href="/terms"
                            className="text-left  decoration-white/40 cursor-pointer hover:decoration-white hover:opacity-100 opacity-90"
                        >
                        Termos de uso
                        </Link>
                    </div>
                </div>
        </footer>
    );
}