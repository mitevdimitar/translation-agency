"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { useHeaderMenu } from "./smart-header";

export default function MobileNavigation({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const setHeaderMenuOpen = useHeaderMenu();
  const changeOpen = (next: boolean) => {
    setOpen(next);
    setHeaderMenuOpen(next);
  };
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className="contents md:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          changeOpen(false);
          buttonRef.current?.focus();
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => changeOpen(!open)}
        className="inline-flex size-11 items-center justify-center rounded-lg hover:bg-primary-text/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-text motion-safe:transition-colors"
      >
        <Image
          src={open ? "/assets/icons/close.svg" : "/assets/icons/menu.svg"}
          alt=""
          aria-hidden="true"
          width={24}
          height={24}
          className="size-6"
        />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="max-h-[calc(100dvh-5rem)] basis-full overflow-y-auto border-t border-primary-text/10 pb-6 pt-3"
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) {
            changeOpen(false);
            buttonRef.current?.focus();
          }
        }}
      >
        {children}
      </div>
    </div>
  );
}
