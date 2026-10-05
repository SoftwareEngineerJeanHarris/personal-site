import { certifications } from "../data/security";
import { SectionHeading } from "./SectionHeading";
import { ActionLink } from "./ActionLink";

export function Certifications() {
  return (
    <section className="certifications-section" aria-labelledby="certifications-title">
      <SectionHeading level={2} eyebrow="Training & credentials" title="Cybersecurity certifications." id="certifications-title" />
      <div className="certification-grid">{certifications.map((cert) => <article className="certification-card" key={cert.code}>
        <img src={`${import.meta.env.BASE_URL}images/certifications/${cert.image}`} width={700} height={450} alt="" loading="lazy" />
        <div className="certification-copy"><p className="eyebrow">{cert.issuer} · {cert.code}</p><h3>{cert.title}</h3><p>Issued <time dateTime={cert.issued}>{cert.dateLabel}</time></p><ActionLink href={`${import.meta.env.BASE_URL}certifications/${cert.file}`} variant="text" external>View {cert.code} certificate (PDF)</ActionLink></div>
      </article>)}</div>
    </section>
  );
}
