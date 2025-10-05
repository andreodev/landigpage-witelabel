"use client"

import { useEffect, useRef } from 'react';
import { Global } from './Icons';
import Image from 'next/image';
import { currencies } from '@/data';

export default function Language() {
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const marquees = Array.from(root.querySelectorAll('.marquee, .marquee-mobile') as NodeListOf<HTMLElement>);
        const rafIds: number[] = [];

        const waitForImages = (el: HTMLElement) => {
            const imgs = Array.from(el.querySelectorAll('.marquee-item-wrap img') as NodeListOf<HTMLImageElement>);
            const notLoaded = imgs.filter((i) => !i.complete);
            if (notLoaded.length === 0) return Promise.resolve();
            return Promise.all(
                notLoaded.map(
                    (img) =>
                        new Promise<void>((res) => {
                            img.addEventListener('load', () => res(), { once: true });
                            img.addEventListener('error', () => res(), { once: true });
                        })
                )
            );
        };

        marquees.forEach((el) => {
            el.classList.add('js-marquee');

            const mountedRef = { value: true };

            const setup = async () => {
                await waitForImages(el);
                if (!mountedRef.value) return;

                const track = el.querySelector('.marquee-item-wrap') as HTMLElement | null;
                if (!track) return;

                const trackWidth = track.getBoundingClientRect().width;
                if (!trackWidth) return;

                const cs = window.getComputedStyle(el);
                const animDur = cs.animationDuration || '';
                let durationSec = 0;
                if (animDur.includes('ms')) durationSec = parseFloat(animDur) / 1000;
                else if (animDur.includes('s')) durationSec = parseFloat(animDur);
                if (!durationSec || Number.isNaN(durationSec)) durationSec = el.classList.contains('marquee-mobile') ? 14 : 24;

                const speed = trackWidth / durationSec;

                let x = 0;
                let last = performance.now();
                let paused = false;

                const onEnter = () => (paused = true);
                const onLeave = () => ((paused = false), (last = performance.now()));
                el.addEventListener('mouseenter', onEnter);
                el.addEventListener('mouseleave', onLeave);

                const loop = (now: number) => {
                    if (!mountedRef.value) return;
                    const dt = Math.min(0.05, (now - last) / 1000);
                    last = now;
                    if (!paused) {
                        x -= speed * dt;
                        if (x <= -trackWidth) x += trackWidth;
                        el.style.transform = `translate3d(${x}px,0,0)`;
                    }
                    rafIds.push(requestAnimationFrame(loop));
                };

                rafIds.push(requestAnimationFrame(loop));

                const holder = (el as unknown) as { __cleanup?: () => void };
                holder.__cleanup = () => {
                    el.removeEventListener('mouseenter', onEnter);
                    el.removeEventListener('mouseleave', onLeave);
                    mountedRef.value = false;
                };
            };

            setup();
        });

        return () => {
            rafIds.forEach((id) => cancelAnimationFrame(id));
            marquees.forEach((el) => {
                const maybe = (el as unknown) as { __cleanup?: () => void };
                if (typeof maybe.__cleanup === 'function') maybe.__cleanup();
            });
        };
    }, []);

    return (
        <div ref={rootRef}>
            <div className="flex justify-center bg-[#FAFAFA]">
                <div className="text-center max-w-7xl px-4 sm:px-0">
                    <p className="inline-block bg-[#6D03F51A] text-[#6D03F5] py-2 px-6 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
                        Sem Fronteiras
                    </p>

                    <h1 className="text-3xl sm:text-6xl font-medium text-[#3B4781] leading-tight">
                        Use a WiteLabel para faturar
                        
                        <br />
                        em mais de{" "}
                        <span className="inline-flex items-center gap-3 align-middle">
                            <Global />
                            <span className="font-semibold bg-gradient-to-r from-[#6D03F5] to-[#D74B18] bg-clip-text text-transparent">
                                160 países
                            </span>
                        </span>
                    </h1>
                    <p className="my-4 sm:my-[32px] text-[#323232] text-sm sm:text-[16px]">
                        Seus clientes com a experiência completamente nativa
                    </p>
                </div>
            </div>

            <div className=" mt-8 sm:mt-12 mb-12 sm:mb-[115px]">
                <div className=" overflow-hidden">
                    <div className="mx-auto w-full max-w-full">
                        <div className="hidden lg:block w-full overflow-hidden">
                            {[
                                ["marquee--fast", "0s"],
                                ["marquee--mid", "-4s"],
                                ["marquee--slow", "-8s"],
                            ].map((cfg, rowIdx) => (
                                <div className="w-full mb-2" key={`row-${rowIdx}`}>
                                    <div
                                        className={`marquee ${cfg[0]}`}
                                        style={{ animationDelay: cfg[1], willChange: "transform" }}
                                    >
                                        <div className="marquee-item-wrap">
                                            {Array.from({ length: 48 }).map((_, i) => {
                                                const offset = (i + rowIdx * 7) % currencies.length;
                                                const c = currencies[offset];
                                                return (
                                                    <div
                                                        key={`marq-a-${rowIdx}-${c.code}-${i}`}
                                                        className={
                                                            "flex items-center gap-2 bg-white/5 rounded-full px-2 py-1"
                                                        }
                                                        style={{ backdropFilter: "blur(4px)" }}
                                                    >
                                                        <div className="w-8 h-6 rounded-sm bg-white overflow-hidden flex items-center justify-center ">
                                                            <Image
                                                                src={c.flagUrl ?? "/placeholder.png"}
                                                                alt={c.code}
                                                                width={32}
                                                                height={24}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div className="text-left">
                                                            <div className="text-black text-xs font-semibold leading-tight">
                                                                {c.code}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="marquee-item-wrap" aria-hidden>
                                            {Array.from({ length: 48 }).map((_, i) => {
                                                const offset = (i + rowIdx * 7) % currencies.length;
                                                const c = currencies[offset];
                                                return (
                                                    <div
                                                        key={`marq-b-${rowIdx}-${c.code}-${i}`}
                                                        className={
                                                            "flex items-center gap-2 bg-white/5 rounded-full px-2 py-1 "
                                                        }
                                                        style={{ backdropFilter: "blur(4px)" }}
                                                    >
                                                        <div className="w-8 h-6 rounded-sm bg-white overflow-hidden flex items-center justify-center ">
                                                            <Image
                                                                src={c.flagUrl ?? "/placeholder.png"}
                                                                alt={c.code}
                                                                width={32}
                                                                height={24}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div className="text-left">
                                                            <div className="text-black text-xs font-semibold leading-tight">
                                                                {c.code}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:hidden w-full overflow-hidden">
                            {[
                                ["marquee-mobile--fast", "0s"],
                                ["marquee-mobile--mid", "-0s"],
                                ["marquee-mobile--slow", "-4s"],
                            ].map((cfg, rowIdx) => (
                                <div className="mb-2" key={`mrow-${rowIdx}`}>
                                    <div
                                        className={`marquee-mobile ${cfg[0]}`}
                                        style={{ animationDelay: cfg[1], willChange: "transform" }}
                                    >
                                        <div className="marquee-item-wrap">
                                            {Array.from({ length: 20 }).map((_, i) => {
                                                const offset = (i + rowIdx * 5) % currencies.length;
                                                const c = currencies[offset];
                                                return (
                                                    <div
                                                        key={`mm-a-${rowIdx}-${c.code}-${i}`}
                                                        className={
                                                            "flex items-center gap-2 bg-white/5 rounded-full px-2 py-1 min-w-0"
                                                        }
                                                        style={{ backdropFilter: "blur(4px)" }}
                                                    >
                                                        <div className="w-8 h-6 rounded-sm bg-white overflow-hidden flex items-center justify-center flex-shrink-0">
                                                            <Image
                                                                src={c.flagUrl ?? "/placeholder.png"}
                                                                alt={c.code}
                                                                width={32}
                                                                height={24}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div className="text-left">
                                                            <div className="text-black text-xs font-semibold leading-tight">
                                                                {c.code}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="marquee-item-wrap" aria-hidden>
                                            {Array.from({ length: 20 }).map((_, i) => {
                                                const offset = (i + rowIdx * 5) % currencies.length;
                                                const c = currencies[offset];
                                                return (
                                                    <div
                                                        key={`mm-b-${rowIdx}-${c.code}-${i}`}
                                                        className={
                                                            "flex items-center gap-2 bg-white/5 rounded-full px-2 py-1 min-w-0"
                                                        }
                                                        style={{ backdropFilter: "blur(4px)" }}
                                                    >
                                                        <div className="w-8 h-6 rounded-sm bg-white overflow-hidden flex items-center justify-center flex-shrink-0">
                                                            <Image
                                                                src={c.flagUrl ?? "/placeholder.png"}
                                                                alt={c.code}
                                                                width={32}
                                                                height={24}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div className="text-left">
                                                            <div className="text-black text-xs font-semibold leading-tight">
                                                                {c.code}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}