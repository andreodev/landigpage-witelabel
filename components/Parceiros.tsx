
import Image from 'next/image';
import seta from '../public/assets/seta.png';
import brasilBitcoin from '../public/assets/brasil-bitcoin.png';
import meta from '../public/assets/meta.png';
import gpay from '../public/assets/gpay.png';
import applePay from '../public/assets/apple-pay.png';
import woo from '../public/assets/woo.png';
import utmfy from '../public/assets/utmfy.png';
import p3 from '../public/assets/p3.png';
import luna from "@/public/assets/luna.png";


import { Seta, ShieldPurple } from './Icons';

const PARTNERS = [
    { id: 'brasilBitcoin', src: brasilBitcoin, alt: 'brasilBitcoin' },
    { id: 'applePay', src: applePay, alt: 'applePay' },
    { id: 'p3', src: p3, alt: 'p3' },
    { id: 'gpay', src: gpay, alt: 'gpay' },
    { id: 'woo', src: woo, alt: 'woo' },
    { id: 'meta', src: meta, alt: 'meta' },
    { id: 'luna', src: luna, alt: 'Luna' },
    { id: 'utmfy', src: utmfy, alt: 'utmify' },
];




export default function Parceiros() {

    return (
        <section className="flex flex-col items-center my-[90px]  bg-[#FAFAFA]">
            <div className="w-full px-4 sm:px-6 lg:px-0 max-w-6xl">
                <div className="flex items-center justify-center">
                    <h1 className="flex items-center text-[#52667E] text-sm sm:text-base">
                        <span className="mr-2">
                            <ShieldPurple />
                        </span>
                        Grandes parceiros do Wite Recuperation
                    </h1>
                    <p className='ml-10 mt-8'><Seta /></p>
                </div>

                <div className="mt-5 w-full ">
                    {/* Mobile: grid 2 colunas; Desktop (lg+): linha única com espaçamento */}
                    <div className="w-full  ">
                        <div className="grid grid-cols-2 items-center justify-items-center gap-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:flex lg:flex-row lg:items-center lg:justify-center">
                            {PARTNERS.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center flex-shrink-0">
                                        <Image src={p.src} alt={p.alt} className="h-8 sm:h-10 md:h-12 lg:h-11 w-auto object-contain flex-shrink-0" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}