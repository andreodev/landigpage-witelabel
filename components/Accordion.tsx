"use client"

import { useState } from 'react'
import { Faq } from './Icons'

type AccordionItem = {
    id: string
    title: string
    content: string
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
    const [openId, setOpenId] = useState<string | null>(null)

    return (
        <div className="w-full">
            {items.map((it) => {
                const open = it.id === openId
                return (
                    <div key={it.id} className="border-b border-[#EEF1F3] bg-[#FAFAFA]">
                        <button
                            aria-expanded={open}
                            aria-controls={`panel-${it.id}`}
                            id={`accordion-${it.id}`}
                            onClick={() => setOpenId(open ? null : it.id)}
                            className="w-full text-left cursor-pointer py-4 flex items-center justify-between gap-4"
                        >
                            <span className="text-[#52667E] text-xl font-semibold flex items-center">
                                {" "}
                                <div className="mr-4">
                                    <Faq />
                                </div>
                                {it.title}
                            </span>
                            <svg
                                className={`w-5 h-5 text-[#79829F] transform transition-transform duration-200 ${open ? "rotate-180" : ""
                                    }`}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 8l5 5 5-5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <div
                            id={`panel-${it.id}`}
                            role="region"
                            aria-labelledby={`accordion-${it.id}`}
                            className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 py-4" : "max-h-0"
                                }`}
                        >
                            <div className="text-base text-[#52667E]">{it.content}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}