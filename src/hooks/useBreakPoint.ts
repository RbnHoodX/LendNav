import { useState, useEffect } from "react";

type Breakpoint = "xs" | "sm" | "md" | "xmd" | "lg" | "xl" | "2xl";

const getBreakpoint = (width: number): Breakpoint => {
  if (width < 640) return "xs";
  if (width < 768) return "sm";
  if (width < 1024) return "md";
  if (width < 1100) return "xmd";
  if (width < 1280) return "lg";
  if (width < 1536) return "xl";
  return "2xl";
};

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
    typeof window !== "undefined" ? getBreakpoint(window.innerWidth) : "md"
  );

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};
