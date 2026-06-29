'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const GlowCursor = () => {
    const followerRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!followerRef.current || !glowRef.current) return;

        // target = real cursor, pos = where the glow currently is
        const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const pos = { x: target.x, y: target.y };

        const setX = gsap.quickSetter(followerRef.current, 'x', 'px');
        const setY = gsap.quickSetter(followerRef.current, 'y', 'px');

        const handleMouseMove = (e: MouseEvent) => {
            target.x = e.clientX;
            target.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // per-frame lerp -> smooth, visibly delayed trailing
        const tick = () => {
            pos.x += (target.x - pos.x) * 0.025;
            pos.y += (target.y - pos.y) * 0.025;
            setX(pos.x);
            setY(pos.y);
        };
        gsap.ticker.add(tick);

        // flowing-water blob: morph the border-radius + slow spin + gentle scale
        gsap.to(glowRef.current, {
            borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
            rotation: 360,
            scale: 1.1,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            gsap.ticker.remove(tick);
        };
    });

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div
                ref={followerRef}
                className="absolute top-0 left-0 w-[1100px] h-[1100px] -ml-[550px] -mt-[550px]"
            >
                <div
                    ref={glowRef}
                    className="w-full h-full opacity-70"
                    style={{
                        borderRadius: '63% 37% 38% 62% / 56% 59% 41% 44%',
                        background:
                            'radial-gradient(circle, rgba(168, 85, 247, 0.20) 0%, transparent 60%)',
                    }}
                />
            </div>
        </div>
    );
};

export default GlowCursor;
