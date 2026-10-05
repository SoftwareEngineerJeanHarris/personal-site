import { headshotSrcSet, headshotUrl } from "../data/site";
import { Braces, Code2, ShieldCheck, Smartphone } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { ActionLink } from "../components/ActionLink";
import { SecuritySection } from "../components/SecuritySection";
import { Certifications } from "../components/Certifications";

export function AboutPage() {
  return (
    <>
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-story">
          <SectionHeading eyebrow="Behind the work" title={<>Curiosity drives.<br /><span className="accent">Engineering delivers.</span></>} id="about-title" />
          <p className="about-introduction">I’m Jean-Michael Harris, a software engineer who enjoys turning practical problems into dependable tools.</p>
          <p>Since February 2019, my work has spanned Android, .NET, desktop systems, services, APIs, and the web. I’ve built guided inventory workflows, automated factory processes, and created dashboards that help teams see and act on important information.</p>
          <p>I’m also interested in offensive security: understanding system boundaries, exploring how things fail, and bringing those questions into the software I build.</p>
          <div className="action-row"><ActionLink href="#/projects">Explore my work</ActionLink><ActionLink href="#/contact" variant="text">Let’s connect</ActionLink></div>
        </div>
        <figure className="about-portrait">
          <div className="portrait-frame"><img src={headshotUrl} srcSet={headshotSrcSet} sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1050px) 40vw, 450px" width={960} height={1200} alt="Jean-Michael Harris wearing a charcoal suit, white shirt, and burgundy tie" fetchPriority="high" /><span className="portrait-signature" aria-hidden="true">JH<span>.</span></span></div>
          <figcaption>Jean-Michael Harris · Software engineering & security</figcaption>
        </figure>
      </section>
      <Certifications />
      <SecuritySection />
      <section className="about-strengths" aria-labelledby="strengths-title">
        <SectionHeading level={2} eyebrow="What I bring" title="A builder’s mindset. Across disciplines." id="strengths-title" />
        <div className="strength-grid">
          {[{ title: "Practical mobile workflows", icon: Smartphone, copy: "Android applications and focused experiments that connect useful interfaces with everyday tasks." }, { title: "Connected tools & services", icon: Code2, copy: "Experience across .NET, desktop systems, and APIs, with an interest in simplifying repetitive work." }, { title: "Clear web experiences", icon: Braces, copy: "React interfaces, dashboards, and readable flows that help people find what they need." }, { title: "Security-minded curiosity", icon: ShieldCheck, copy: "A continuing interest in offensive security, trust boundaries, and the decisions behind safer systems." }].map(({title,icon:Icon,copy}) => <article className="strength-card" key={title}><Icon size={26} strokeWidth={1.5} aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
    </>
  );
}
