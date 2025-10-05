"use client"

import Image from 'next/image';
import operationImage from '@/public/assets/operation.png'
import clientAvaliations from "@/public/assets/avaliacao.png"
import { LeftArrow, Star, TrendUp } from './Icons'

export default function OperationSection() {
    return (
        <section className="w-full ">
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center  mx-auto">
                <div className='sm:my-[0px] '>

                        <Image
                            src={operationImage}
                            alt="Operation Illustration"
                            className="w-full h-full  "
                            />
                            </div>

                <div className="bg-white rounded-2xl flex items-center justify-center max-w-lg mx-auto">
                    <div className="text-center">
                        <div className="my-5 inline-flex items-center justify-center rounded-full bg-white">
                            <TrendUp />
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-medium text-[#3B4781] mb-6">
                            Você no controle da sua operação
                        </h2>
                        <p className="text-base text-[#52667E] ">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        </p>
                        
                        <div className='flex flex-col sm:flex-row items-center justify-center max-w-[327px] gap-3 my-10 mx-auto'>
                            <div className='bg-[#6D03F51A] text-[#6D03F5] rounded-lg flex items-center py-2.5 px-3.5'>
                                <span className='inline-flex items-center gap-1'><Star /></span>
                                <span className='ml-2 font-semibold'>4.7</span>
                            </div>
                            <div className='flex-shrink-0'>
                                <Image
                                    alt='client-avaliation'
                                    src={clientAvaliations}
                                   
                                    className='object-contain'
                                />
                            </div>
                            <div className='text-center sm:text-start'>
                                <p className='text-base text-[#6D03F5] '>Avaliação dos clientes</p>
                            </div>
                       </div>
                        
                        <a
                            href="https://painel.witerecuperation.com/login"
                            className="inline-flex items-center justify-between transition-transform duration-200 hover:scale-105 bg-[#6D03F5] text-white py-3 px-6 rounded-full  w-full max-w-[320px]"
                        >
                            <span className="pl-1 font-semibold text-base ">
                                Começar Agora
                            </span>
                            <span className="inline-flex items-center justify-center bg-white text-[#01AEA4] rounded-full w-[62px] h-[32px]">
                                <LeftArrow color='#6D03F5' />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}