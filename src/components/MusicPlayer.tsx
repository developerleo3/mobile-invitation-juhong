"use client";

import { useEffect, useRef } from "react";

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const startedRef = useRef(false);
    const tryingRef = useRef(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const removeListeners = () => {
            document.removeEventListener("pointerdown", startMusic);
            document.removeEventListener("touchstart", startMusic);
            document.removeEventListener("click", startMusic);
            document.removeEventListener("keydown", startMusic);
        };

        const startMusic = () => {
            if (startedRef.current) return;
            if (tryingRef.current) return;
            if (!audioRef.current) return;

            tryingRef.current = true;

            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        startedRef.current = true;
                        tryingRef.current = false;

                        // 실제 재생 성공 후에만 이벤트 제거
                        removeListeners();
                    })
                    .catch(() => {
                        // 실패하면 다음 터치에서 다시 시도
                        tryingRef.current = false;
                    });
            }
        };

        // Android Chrome / Samsung Internet
        document.addEventListener("pointerdown", startMusic, {
            passive: true,
        });

        // iPhone Safari fallback
        document.addEventListener("touchstart", startMusic, {
            passive: true,
        });

        // 일반 클릭 fallback
        document.addEventListener("click", startMusic);

        // PC 접근용
        document.addEventListener("keydown", startMusic);

        return () => {
            removeListeners();
        };
    }, []);

    return (
        <audio
            ref={audioRef}
            loop
            preload="auto"
        >
            <source src="/music/wedding.mp3" type="audio/mpeg" />
        </audio>
    );
}