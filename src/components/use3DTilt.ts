'use client';
import { useEffect, RefObject } from 'react';
import gsap from 'gsap';

interface TiltOptions {
 maxAngle?: number;
 perspective?: number;
 scale?: number;
 speed?: number;
}

export function use3DTilt(
 ref: RefObject<HTMLElement | null>,
 options: TiltOptions = {}
) {
 const { maxAngle = 10, perspective = 1000, scale = 1.03, speed = 0.3 } = options;

 useEffect(() => {
 const el = ref.current;
 if (!el) return;

 if (window.matchMedia('(hover: none)').matches) return;
 if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

 const handleMouseMove = (e: MouseEvent) => {
 const rect = el.getBoundingClientRect();
 const x = e.clientX - rect.left;
 const y = e.clientY - rect.top;
 const rotateY = ((x / rect.width) - 0.5) * maxAngle * 2;
 const rotateX = -((y / rect.height) - 0.5) * maxAngle * 2;

 gsap.to(el, {
 rotateX,
 rotateY,
 scale,
 transformPerspective: perspective,
 duration: speed,
 ease: 'power2.out',
 });
 };

 const handleMouseLeave = () => {
 gsap.to(el, {
 rotateX: 0,
 rotateY: 0,
 scale: 1,
 duration: speed * 2.5,
 ease: 'elastic.out(1, 0.6)',
 });
 };

 el.addEventListener('mousemove', handleMouseMove);
 el.addEventListener('mouseleave', handleMouseLeave);

 return () => {
 el.removeEventListener('mousemove', handleMouseMove);
 el.removeEventListener('mouseleave', handleMouseLeave);
 };
 }, [ref, maxAngle, perspective, scale, speed]);
}
