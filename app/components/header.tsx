import Link from "next/link";
import MobileNavigation from "./mobile-navigation";

const links = [
  { label: "Services", href: "#services" },
  { label: "Markets", href: "#markets" },
  { label: "About", href: "#about" },
];

const focusStyles =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-text";

function Navigation({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav aria-label={mobile ? "Mobile navigation" : "Primary navigation"}>
      <ul
        className={
          mobile
            ? "flex flex-col gap-2"
            : "flex items-center gap-8 lg:gap-10"
        }
      >
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={`block rounded-sm py-3 text-sm font-medium hover:text-primary-text/65 motion-safe:transition-colors ${focusStyles}`}
            >
              {label}
            </a>
          </li>
        ))}
        <li className={mobile ? "pt-3" : "ml-2"}>
          <a
            href="#contact"
            className={`inline-flex min-h-11 items-center justify-center rounded-lg bg-teal-accent px-5 py-3 text-sm font-semibold text-primary-text hover:bg-teal-accent/80 motion-safe:transition-colors ${focusStyles} ${mobile ? "w-full" : ""}`}
          >
            Start a Project
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default function Header() {
  return (
    <header className="shrink-0 border-b border-primary-text/10 bg-page text-primary-text">
      <div className="site-container">
        <div className="flex flex-wrap items-center justify-between gap-x-6">
          <Link
            href="/"
            className={`inline-flex min-h-20 shrink-0 items-center rounded-sm text-lg font-semibold tracking-tight md:min-h-24 ${focusStyles}`}
          >
            BRAND NAME
          </Link>
          <div className="hidden md:block">
            <Navigation />
          </div>
          <MobileNavigation>
            <Navigation mobile />
          </MobileNavigation>
        </div>
      </div>
    </header>
  );
}
