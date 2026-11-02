"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

const MenuContext = createContext<(open: boolean) => void>(() => {});
export const useHeaderMenu = () => useContext(MenuContext);

export default function SmartHeader({ children }: { children: ReactNode }) {
  const headerRef = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);
  const hiddenRef = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let previousY = Math.max(0, window.scrollY);
    let direction = 0;
    let distance = 0;
    let anchorPending = false;
    let frame = 0;
    let settleFrame = 0;

    const updateHidden = (next: boolean) => {
      if (next !== hiddenRef.current) {
        hiddenRef.current = next;
        setHidden(next);
      }
    };
    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      const delta = y - previousY;
      previousY = y;
      if (menuOpen || focused || y <= header.offsetHeight) {
        distance = 0;
        direction = 0;
        updateHidden(!menuOpen && !focused && y > 8);
        return;
      }
      if (anchorPending) {
        updateHidden(true);
        return;
      }
      const nextDirection = Math.sign(delta);
      if (!nextDirection) return;
      distance = nextDirection === direction ? distance + Math.abs(delta) : Math.abs(delta);
      direction = nextDirection;
      if (distance >= 8) {
        updateHidden(direction > 0);
        distance = 0;
      }
    };
    // Native fragment jumps can move upward too; don't reveal the header over them.
    const onAnchor = () => {
      setFocused(false);
      anchorPending = true;
      updateHidden(window.scrollY > 0);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(settleFrame);
      frame = requestAnimationFrame(() => {
        settleFrame = requestAnimationFrame(() => {
          previousY = Math.max(0, window.scrollY);
          direction = 0;
          distance = 0;
          anchorPending = false;
          updateHidden(previousY > 0);
        });
      });
    };
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement) || link.target === "_blank" || link.hasAttribute("download")) return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
      try {
        if (document.getElementById(decodeURIComponent(url.hash.slice(1)))) onAnchor();
      } catch {
        // Leave malformed fragments to native browser navigation.
      }
    };

    onScroll();
    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onAnchor);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onAnchor);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(settleFrame);
    };
  }, [menuOpen, focused]);

  return (
    <MenuContext.Provider value={setMenuOpen}>
      <header
        ref={headerRef}
        onFocusCapture={(event) => {
          setFocused(event.target.matches(":focus-visible"));
        }}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
        }}
        className={`sticky top-0 z-50 shrink-0 border-b border-primary-text/10 bg-page text-primary-text motion-safe:transition-transform motion-safe:duration-[225ms] ${hidden && !menuOpen && !focused ? "-translate-y-full" : "translate-y-0"}`}
      >
        {children}
      </header>
    </MenuContext.Provider>
  );
}
