import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import type { Route } from "../App";
import { navigation, site } from "../data/site";

export function SiteHeader({ route }: { route: Route }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 681px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="header-surface">
      <div className="site-header shell">
        <a href="#/home" className="wordmark" aria-label={`${site.name}, home`}>
          <span className="brand-symbol" aria-hidden="true" />
          <span className="wordmark-copy">Jean-Michael<span className="wordmark-subtitle">Software / Security</span></span>
        </a>
        <button className="menu-toggle" type="button" ref={toggleRef} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen((value) => !value)}>
          {open ? "Close" : "Menu"}{open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
        <nav id="main-navigation" aria-label="Main navigation" className={`site-nav${open ? " is-open" : ""}`}>
          {navigation.map((item) => (
            <a key={item.route} className={item.route === "contact" ? "nav-contact" : undefined} href={`#/${item.route}`} aria-current={route === item.route ? "page" : undefined} onClick={() => {
              setOpen(false);
              if (route === item.route) document.getElementById("main-content")?.focus();
            }}>
              {item.label}{item.route === "contact" && <ArrowUpRight size={16} aria-hidden="true" />}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
