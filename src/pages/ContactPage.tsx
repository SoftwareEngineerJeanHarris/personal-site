import { site } from "../data/site";
import { SectionHeading } from "../components/SectionHeading";
import { ArrowUpRight, Code2, UserRound } from "lucide-react";

export function ContactPage() {
  return (
    <>
      <SectionHeading eyebrow="Start a conversation" title={<>Let’s connect<span className="accent">.</span></>} description="Have a role, a project, or an engineering problem worth discussing? I’d be glad to hear about it." />
      <div className="contact-grid">
        <a className="contact-card" href={site.linkedin} target="_blank" rel="noreferrer"><UserRound className="contact-icon" size={30} aria-hidden="true" /><span className="eyebrow">Professional conversations</span><h2>LinkedIn <ArrowUpRight size={24} aria-hidden="true" /></h2><p>Connect about software engineering roles, project collaboration, and security-minded development.</p><span className="contact-destination">Connect on LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></span></a>
        <a className="contact-card" href={site.github} target="_blank" rel="noreferrer"><Code2 className="contact-icon" size={30} aria-hidden="true" /><span className="eyebrow">Code and projects</span><h2>GitHub <ArrowUpRight size={24} aria-hidden="true" /></h2><p>Explore public code, follow project updates, or discuss a specific repository through its available contribution channels.</p><span className="contact-destination">Explore GitHub <ArrowUpRight size={16} aria-hidden="true" /></span></a>
      </div>
      <section className="contact-topics" aria-labelledby="contact-topics-title"><p className="eyebrow">Let’s talk about</p><h2 id="contact-topics-title">Useful software. Thoughtful systems.</h2><ul className="tag-list"><li>Kotlin Android</li><li>C# .NET</li><li>JS React</li><li>Cybersecurity learning</li></ul><p>A little context helps: tell me what you’re building, the problem you’re working through, or the opportunity you have in mind.</p></section>
    </>
  );
}
