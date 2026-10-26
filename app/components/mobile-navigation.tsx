"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

export default function MobileNavigation({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className="contents md:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          setOpen(false);
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
        onClick={() => setOpen(!open)}
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
        className="basis-full border-t border-primary-text/10 pb-6 pt-3"
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) {
            setOpen(false);
            buttonRef.current?.focus();
          }
        }}
      >
        {children}
      </div>
    </div>
  );
}
