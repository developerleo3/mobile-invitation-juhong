"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
    paused?: boolean;
};

export default function MainSection({ paused = false }: Props) {
    const [heroH, setHeroH] = useState<number | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHeroH(window.innerHeight);

        const onOri = () => setHeroH(window.innerHeight);
        window.addEventListener("orientationchange", onOri);

        return () => {
            window.removeEventListener("orientationchange", onOri);
        };
    }, []);

    const preventDefault = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <section
            className="relative overflow-hidden"
            style={{ height: heroH ? `${heroH}px` : "100vh" }}
            onContextMenu={preventDefault}
        >
            <Image
                src="/images/main/main.jpg"
                alt="main image"
                fill
                priority
                sizes="100vw"
                draggable={false}
                onContextMenu={preventDefault}
                onDragStart={preventDefault}
                className="
                    absolute inset-0 object-cover object-center p-5
                    select-none
                "
            />

            <div
                className="absolute inset-0 z-10"
                onContextMenu={preventDefault}
                onDragStart={preventDefault}
                style={{
                    WebkitTouchCallout: "none",
                    WebkitUserSelect: "none",
                    userSelect: "none",
                }}
            />
        </section>
    );
}