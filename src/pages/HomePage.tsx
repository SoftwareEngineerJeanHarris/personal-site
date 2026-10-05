import { categories } from "../data/categories";
import { SectionHeading } from "../components/SectionHeading";
import { ActionLink } from "../components/ActionLink";
import { HeroShowcase } from "../components/HeroShowcase";
import { SecuritySection } from "../components/SecuritySection";
import { Braces, Code2, ShieldCheck, Smartphone } from "lucide-react";

const disciplineIcons = { "kotlin-android": Smartphone, "csharp-dotnet": Code2, "js-react": Braces, "offensive-security-cyber": ShieldCheck };

export function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-intro">
        <p className="eyebrow">Engineer. Builder. Security thinker.</p>
        <h1 id="home-title">Software with<br /><em>security</em><br />built into it.</h1>
        <p className="intro-copy">I’m Jean-Michael Harris. I build useful software, explore how systems work, and bring a security mindset to the decisions behind them.</p>
        <div className="action-row">
          <ActionLink href="#/projects">Explore my work</ActionLink>
          <ActionLink href="#/about" variant="text">Meet the engineer</ActionLink>
        </div>
        </div>
        <HeroShowcase />
      </section>
      <section className="discipline-section" aria-labelledby="disciplines-title">
        <SectionHeading level={2} eyebrow="The portfolio" title="Four areas. One curious mind." id="disciplines-title" />
        <div className="discipline-grid">
          {categories.map((category, index) => {
            const Icon = disciplineIcons[category.id];
            return (
            <article key={category.id} className="discipline">
              <div className="discipline-top"><span className="discipline-icon"><Icon size={25} strokeWidth={1.6} aria-hidden="true" /></span><span className="item-number">0{index + 1}</span></div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <ActionLink href={`#/projects?category=${category.id}`} variant="text">Explore {category.title}</ActionLink>
            </article>
            );
          })}
        </div>
      </section>
      <SecuritySection compact />
    </>
  );
}
