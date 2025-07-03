'use client'

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

export default function RunawayButton({ 
  text = "Try to Click Me",
  containerRef
}: {
  text?: string;
  containerRef?: React.RefObject<HTMLElement>;
}) {
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (buttonRef.current && !position) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ top: rect.top, left: rect.left });
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || !position) return;

    const cursorX = event.clientX;
    const cursorY = event.clientY;
    const buttonRect = buttonRef.current.getBoundingClientRect();

    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const angle = Math.atan2(cursorY - buttonCenterY, cursorX - buttonCenterX);
    const runawayDistance = 100;

    const newLeft = buttonRect.left - runawayDistance * Math.cos(angle);
    const newTop = buttonRect.top - runawayDistance * Math.sin(angle);

    const container = containerRef?.current;
    const containerRect = container 
      ? container.getBoundingClientRect() 
      : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };

    const safeZone = 0.05; // 5% safe zone
    const safeZoneX = containerRect.width * safeZone;
    const safeZoneY = containerRect.height * safeZone;

    const boundedLeft = Math.max(containerRect.left + safeZoneX, Math.min(containerRect.left + containerRect.width - safeZoneX - buttonRect.width, newLeft));
    const boundedTop = Math.max(containerRect.top + safeZoneY, Math.min(containerRect.top + containerRect.height - safeZoneY - buttonRect.height, newTop));

    setPosition({ top: boundedTop, left: boundedLeft });
  };

  return (
    <Button
      ref={buttonRef}
      className={twMerge(
        "transition-all duration-300 ease-in-out",
        position ? "absolute" : ""
      )}
      style={position ? { top: `${position.top}px`, left: `${position.left}px` } : {}}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
    >
      {text}
    </Button>
  );
}