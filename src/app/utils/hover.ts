"use client";
import React, { useState, useEffect } from "react";

type Hover3DOptions = {
  x?: number;
  y?: number;
  z?: number;
};

export default function hover3d<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  { x = 0, y = 0, z = 0 }: Hover3DOptions
) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return; // Comprobación de null

    const { offsetWidth: width, offsetHeight: height } = el;
    const { clientX, clientY } = e;

    const xVal = (clientX - width / 2) / width;
    const yVal = (clientY - height / 2) / height;

    setCoords({ x: xVal, y: yVal });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return; // Comprobación de null

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (!el) return; // Comprobación también en cleanup
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref.current]); // Dependencia al elemento real

  const xTransform = isHovering ? coords.x * x : 0;
  const yTransform = isHovering ? coords.y * y : 0;
  const zTransform = isHovering ? z : 0;

  return {
    transform: `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`,
    transition: isHovering ? "none" : "all 0.5s ease",
  };
}
