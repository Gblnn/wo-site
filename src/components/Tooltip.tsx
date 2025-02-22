import { useState, useRef, useEffect } from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShowAbove, setShouldShowAbove] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && tooltipRef.current && containerRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - containerRect.bottom;

      // Check if there's not enough space below
      setShouldShowAbove(spaceBelow < tooltipRect.height + 10);
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div
        ref={tooltipRef}
        className={`
          absolute
          left-1/2
          -translate-x-1/2
          ${
            shouldShowAbove
              ? "-top-2 -translate-y-full"
              : "top-full translate-y-2"
          }
          px-3
          py-1.5
          bg-[#1a1a1a]/90
          backdrop-blur-md
          rounded-lg
          text-sm
          text-white
          whitespace-nowrap
          border
          border-white/5
          shadow-xl
          pointer-events-none
          z-50
          transition-all
          duration-200
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
        `}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
