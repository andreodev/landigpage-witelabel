"use client"
import Image from "next/image";
import template1 from "@/public/assets/template1.png";
import template2 from "@/public/assets/template2.png";
import template3 from "@/public/assets/template3.png";

const templates = [template1, template2, template3];

import { useEffect, useRef } from "react";

const DEFAULT_SPEED = 0.3; 
const MOBILE_SPEED = 0.1;

export default function Templates() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const speedRef = useRef(DEFAULT_SPEED); 
    const posRef = useRef(0);
    const pausedRef = useRef(false);

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        const mql = window.matchMedia('(max-width: 767px)');
        const applySpeed = (mq: MediaQueryList | MediaQueryListEvent) => {
            speedRef.current = mq.matches ? MOBILE_SPEED : DEFAULT_SPEED;
            console.debug('templates marquee speed set', speedRef.current);
        };
        applySpeed(mql);
        const onMqlChange = (e: MediaQueryListEvent) => applySpeed(e);
        if ('addEventListener' in mql) {
            mql.addEventListener('change', onMqlChange as EventListener);
        } else if ('addListener' in mql) {
            (mql as unknown as { addListener: (cb: (e: MediaQueryListEvent) => void) => void }).addListener(onMqlChange);
        }

    container.classList.add("js-marquee");
    track.classList.add("js-marquee");

    console.debug("templates marquee init", { DEFAULT_SPEED, container, track });

        let last = performance.now();

        const updateWidths = () => {
            const first = track.querySelector<HTMLDivElement>(".templates-item-wrap");
            if (!first) return 0;
            const w = first.getBoundingClientRect().width;
            return w;
        };

        let copyWidth = updateWidths();

        const step = (now: number) => {
            if (pausedRef.current) {
                last = now;
                rafRef.current = requestAnimationFrame(step);
                return;
            }

            const dt = now - last;
            last = now;
            posRef.current += speedRef.current * dt; // advance by pixels

            if (copyWidth > 0) {
                if (posRef.current >= copyWidth) {
                    posRef.current = posRef.current - copyWidth;
                }
            }

            track.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;

            if (Math.floor(now) % 2000 < 16) {
                console.debug("templates marquee", { copyWidth, pos: posRef.current, speed: speedRef.current });
            }
            rafRef.current = requestAnimationFrame(step);
        };

        rafRef.current = requestAnimationFrame(step);

        const ro = new ResizeObserver(() => {
            copyWidth = updateWidths();
        });
        ro.observe(container);

        const onEnter = () => (pausedRef.current = true);
        const onLeave = () => (pausedRef.current = false);
        container.addEventListener("mouseenter", onEnter);
        container.addEventListener("mouseleave", onLeave);
        container.addEventListener("focusin", onEnter);
        container.addEventListener("focusout", onLeave);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            ro.disconnect();
            container.removeEventListener("mouseenter", onEnter);
            container.removeEventListener("mouseleave", onLeave);
            container.removeEventListener("focusin", onEnter);
            container.removeEventListener("focusout", onLeave);
            if ('removeEventListener' in mql) {
                mql.removeEventListener('change', onMqlChange as EventListener);
            } else if ('removeListener' in mql) {
                (mql as unknown as { removeListener: (cb: (e: MediaQueryListEvent) => void) => void }).removeListener(onMqlChange);
            }
        };
    }, []);

    return (
        <div className="my-24" id="templates">
            <div className="flex justify-center items-center flex-col text-center mb-11 mx-auto">
                <h1 className="text-[#52667E] text-4xl sm:text-6xl font-semibold">Diversos templates</h1>
                <p className="mt-2 text-[#52667EB2] font-medium text-base p-2 sm:text-lg max-w-[600px]">
                    Modelos exclusivos que servem de base, mas que ganham identidade única com sua marca, nada de soluções genéricas.
                </p>
            </div>

            <div ref={containerRef} className="w-full overflow-hidden bg-none" tabIndex={0} aria-label="Templates carousel">
                <div ref={trackRef} className="marquee marquee--mid" aria-hidden={false}>
                    <div className="templates-item-wrap" role="list">
                        {templates.map((t, i) => (
                            <div key={`m1-${i}`} className="px-6 flex items-center justify-center" role="listitem">
                                <Image
                                    src={t}
                                    alt={`template-${i + 1}`}
                                    className="rounded-lg "
                                    sizes="90vw"
                                    style={{ width: '90vw', height: 'auto', maxWidth: '900px' }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="templates-item-wrap" aria-hidden="true" role="presentation">
                        {templates.map((t, i) => (
                            <div key={`m2-${i}`} className="px-6 flex items-center justify-center">
                                <Image
                                    src={t}
                                    alt={`template-${i + 1}`}
                                    className="rounded-lg shadow-lg"
                                    sizes="90vw"
                                    style={{ width: '90vw', height: 'auto', maxWidth: '900px' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}