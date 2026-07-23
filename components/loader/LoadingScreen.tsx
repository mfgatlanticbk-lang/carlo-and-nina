'use client';

import React, { useEffect, useState } from 'react';
import { useSiteConfig } from '@/hooks/use-site-config';
import Image from 'next/image';

interface LoadingScreenProps {
  onComplete: () => void;
}

const TOTAL_DURATION_MS = 2800;
const FADE_OUT_MS = 450;

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const siteConfig = useSiteConfig();
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  const coupleNames = `${siteConfig.couple.groomNickname} & ${siteConfig.couple.brideNickname}`;

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / TOTAL_DURATION_MS) * 100);
      setProgress(pct);
    }, 40);

    const completeTimer = setTimeout(() => {
      setProgress(100);
      setFadeOut(true);
      setTimeout(onComplete, FADE_OUT_MS);
    }, TOTAL_DURATION_MS);

    return () => {
      clearTimeout(completeTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden overscroll-none h-dvh max-h-dvh transition-opacity duration-450 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: 'var(--color-motif-cream, #faf7f1)' }}
      aria-live="polite"
      aria-busy={!fadeOut}
      aria-label="Loading invitation"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(680px 480px at 50% 38%, rgba(233, 218, 189, 0.38) 0, transparent 62%)',
        }}
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="relative w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 mb-5">
          <Image
            src={siteConfig.couple.monogram}
            alt=""
            fill
            className="object-contain"
            priority
            style={{
              filter:
                'brightness(0) saturate(100%) invert(12%) sepia(42%) saturate(2400%) hue-rotate(315deg)',
            }}
          />
        </div>

        <p
          className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase mb-2.5"
          style={{
            fontFamily: '"Cinzel", serif',
            color: 'var(--color-motif-deep, #6b1726)',
            opacity: 0.7,
          }}
        >
          Preparing your invitation
        </p>

        <div
          role="img"
          aria-label={coupleNames}
          className="w-full max-w-[min(90vw,17rem)] sm:max-w-xs aspect-[717/76] mb-7"
          style={{
            backgroundColor: 'var(--color-motif-deep)',
            WebkitMaskImage: 'url(/Details/carlandnina.png)',
            maskImage: 'url(/Details/carlandnina.png)',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
        />

        <div
          className="w-full max-w-[188px] h-[3px] rounded-full overflow-hidden"
          style={{ background: 'rgba(107, 23, 38, 0.1)' }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              backgroundColor: 'var(--color-motif-accent, #d3b988)',
              boxShadow: '0 0 8px rgba(211, 185, 136, 0.45)',
              transition: 'width 0.25s ease-out',
            }}
          />
        </div>
      </div>
    </div>
  );
};
