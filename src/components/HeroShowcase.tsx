import { Code2, ShieldCheck } from "lucide-react";
import { projects, projectHref } from "../data/projects";

export function HeroShowcase() {
  const featured = projects.find((project) => project.slug === "personal-portfolio")!;
  return (
    <figure className="hero-showcase" aria-labelledby="showcase-caption">
      <div className="hero-band hero-band--red" aria-hidden="true" />
      <div className="hero-band hero-band--pale" aria-hidden="true" />
      <div className="hero-band hero-band--ink" aria-hidden="true" />
      <a className="showcase-window showcase-featured" href={projectHref(featured.slug)} aria-label={`View ${featured.title} case study`}>
        <div className="showcase-chrome"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>jh / portfolio</span><Code2 size={13} aria-hidden="true" /></div>
        <img src={featured.cover!.src} alt="" width={featured.cover!.width} height={featured.cover!.height} fetchPriority="high" />
        <div className="featured-caption"><span>Featured work</span><strong>{featured.title}</strong></div>
      </a>
      <div className="hero-detail hero-detail--focus"><span className="detail-kicker">The intersection</span><strong>Software <span className="accent">×</span> Security</strong></div>
      <div className="hero-detail hero-detail--craft"><span className="detail-icon"><ShieldCheck size={23} strokeWidth={1.6} aria-hidden="true" /></span><div><span className="detail-kicker">The approach</span><strong>Built with intention.</strong></div></div>
      <figcaption id="showcase-caption">Personal portfolio rebuild · Actual project preview</figcaption>
    </figure>
  );
}
