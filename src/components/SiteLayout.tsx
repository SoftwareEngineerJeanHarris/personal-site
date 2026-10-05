import type { ReactNode } from "react";
import type { Route } from "../App";
import { navigation, site } from "../data/site";
import { SiteHeader } from "./SiteHeader";
import { ActionLink } from "./ActionLink";

export function SiteLayout({ route, children }: { route: Route; children: ReactNode }) {
  return (
    <div className="site-layout">
      <a className="skip-link" href="#main-content" onClick={(event) => {
        event.preventDefault();
        document.getElementById("main-content")?.focus();
      }}>Skip to content</a>
      <SiteHeader key={route} route={route} />
      {children}
      <footer className="footer-surface">
        <div className="site-footer shell">
          <div className="footer-main">
            <div className="footer-intro">
              <p className="eyebrow">Software / Security / Curiosity</p>
              <h2>Good work starts<br />with a conversation<span className="accent">.</span></h2>
              <ActionLink href={route === "contact" ? site.linkedin : "#/contact"} external={route === "contact"} variant="text">{route === "contact" ? "Connect on LinkedIn" : "Let’s connect"}</ActionLink>
            </div>
            <nav aria-label="Footer navigation" className="footer-nav"><p className="footer-label">Explore</p>{navigation.map((item) => <a href={`#/${item.route}`} key={item.route} aria-current={route === item.route ? "page" : undefined}>{item.label}</a>)}</nav>
            <div className="footer-nav"><p className="footer-label">Elsewhere</p><a href={site.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div>
          </div>
          <div className="footer-bottom"><p>© {new Date().getFullYear()} {site.name}</p><p>Built with intention.</p></div>
        </div>
      </footer>
    </div>
  );
}
