import { useEffect, useRef } from "react";

interface UseScrollRevealProps {
  threshold?: number;
  rootMargin?: string;
}

export default function useScrollReveal({ 
  threshold = 0.1, 
  rootMargin = "0px 0px -100px 0px" 
}: UseScrollRevealProps = {}) {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    const elements = currentRef.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, [threshold, rootMargin]);
  
  return ref;
}
