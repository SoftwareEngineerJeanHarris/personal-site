import { ShieldCheck } from "lucide-react";
import { securityWork } from "../data/security";
import { SectionHeading } from "./SectionHeading";
import { ActionLink } from "./ActionLink";

export function SecuritySection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="security-section" aria-labelledby="security-title">
      <SectionHeading level={2} eyebrow="Cybersecurity / learning by building" title="Inside the lab." id="security-title" description="A growing personal practice in offensive security, network analysis, and defensive tooling." />
      {compact ? <div className="security-teaser"><ShieldCheck size={36} strokeWidth={1.4} aria-hidden="true" /><div><h3>Build. Observe. Understand.</h3><p>I’m setting up a home lab and working through HTB rooms with write-ups. Next on the roadmap: a TCP packet-sniffing server, a SIEM application, and eventually a honeypot.</p><ActionLink href="#/about" variant="text">Explore my security journey</ActionLink></div></div> : <div className="security-grid">{securityWork.map((item) => <article className="security-work" key={item.title}><span className={`work-status${item.status === "In progress" ? " work-status--active" : ""}`}>{item.status}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>}
    </section>
  );
}
