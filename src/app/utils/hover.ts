import { useEffect, useState, RefObject } from "react";

type Opts = { x?: number; y?: number; z?: number };

export default function useHover3d(ref: RefObject<HTMLElement | null>, opts: Opts = {}) {
    const { x = 20, y = 20, z = 0 } = opts;
    const [transform, setTransform] = useState<string>("");

    useEffect(() => {

        const el = ref.current;
        if (!el) return;

        function handleMouseMove(e: MouseEvent) {
            const current = ref.current;
            if (!current) return; // <-- evita 'possibly null'
            const rect = current.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width - 0.5;
            const py = (e.clientY - rect.top) / rect.height - 0.5;

            const rotateY = px * x;
            const rotateX = -py * y;
            const translateZ = z;

            setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`);
        }

        function handleMouseLeave() {
            setTransform("");
        }

        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [ref, x, y, z]);

    return { transform };
}