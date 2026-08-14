import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  ExternalLink,
  GitBranch,
  Layers3,
  ContactRound,
  Menu,
  MonitorCog,
  Rocket,
  ServerCog,
  Smartphone,
  Sparkles,
  Star,
  X,
} from "lucide-react";

type Route = "home" | "projects" | "about" | "skills" | "contact";

const routes: Route[] = ["home", "projects", "about", "skills", "contact"];

const routeLabels: Record<Route, string> = {
  home: "Home",
  projects: "Projects",
  about: "About",
  skills: "Skills",
  contact: "Contact",
};

function getRoute(): Route {
  const route = window.location.hash.replace(/^#\/?/, "").split("/")[0];
  return routes.includes(route as Route) ? (route as Route) : "home";
}

function yearsSinceFebruary2019() {
  const start = new Date(2019, 1, 1);
  const today = new Date();
  let years = today.getFullYear() - start.getFullYear();
  if (
    today.getMonth() < start.getMonth() ||
    (today.getMonth() === start.getMonth() && today.getDate() < start.getDate())
  ) {
    years -= 1;
  }
  return years;
}

function Header({ route }: { route: Route }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#/home" aria-label="Jean Harris home">
        <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
        <span>Jean Harris</span>
      </a>

      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
        {routes.map((item) => (
          <a
            className={route === item ? "nav-link active" : "nav-link"}
            href={`#/${item}`}
            key={item}
            onClick={() => setOpen(false)}
          >
            {routeLabels[item]}
          </a>
        ))}
        <button className="nav-link resume-nav" type="button" disabled title="Résumé coming soon">
          Résumé
        </button>
        <a
          className="social-link"
          href="https://github.com/SoftwareEngineerJeanHarris"
          target="_blank"
          rel="noreferrer"
          aria-label="Jean Harris on GitHub"
          onClick={() => setOpen(false)}
        >
          <GitBranch size={21} />
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer shell">
      <p>© {new Date().getFullYear()} Jean Harris. All rights reserved.</p>
      <p className="footer-note"><Sparkles size={15} /> Built with curiosity and plenty of coffee.</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/jean-michael-harris/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <ContactRound size={19} />
        </a>
        <a href="https://github.com/SoftwareEngineerJeanHarris" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitBranch size={19} />
        </a>
      </div>
    </footer>
  );
}

const specialties = [
  {
    title: "Android",
    icon: Smartphone,
    className: "android",
    description: "Native Android experiences built with Kotlin, Jetpack Compose, MVVM, and thoughtful architecture.",
    link: "View Android Projects",
  },
  {
    title: ".NET",
    icon: ServerCog,
    className: "dotnet",
    description: "Reliable APIs, WPF applications, and system services engineered with C# and the .NET ecosystem.",
    link: "View .NET Projects",
  },
  {
    title: "React",
    icon: Blocks,
    className: "react",
    description: "Modern, responsive web applications built with React, TypeScript, and accessible design patterns.",
    link: "View React Projects",
  },
];

function HomePage() {
  const experience = yearsSinceFebruary2019();

  return (
    <>
      <section className="hero">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> SOFTWARE ENGINEER</p>
          <h1>Build. <strong>Ship.</strong> Learn.</h1>
          <p className="hero-copy">Crafting reliable applications and meaningful user experiences across mobile, desktop, and web.</p>
          <div className="hero-actions">
            <a className="button primary" href="#/projects"><Rocket size={19} /> Explore Projects</a>
            <button className="button secondary" type="button" disabled title="Résumé coming soon"><BriefcaseBusiness size={18} /> Résumé</button>
          </div>
        </div>
        <a className="scroll-cue" href="#explore" aria-label="Scroll to explore projects"><ChevronDown /></a>
      </section>

      <main className="home-main shell" id="explore">
        <div className="section-heading">
          <p className="eyebrow centered">SELECTED DISCIPLINES</p>
          <h2>Explore Projects</h2>
          <p>Browse work by platform and technology.</p>
        </div>

        <div className="specialty-grid">
          {specialties.map(({ title, icon: Icon, className, description, link }) => (
            <a className={`specialty-card ${className}`} href="#/projects" key={title}>
              <span className="icon-wrap"><Icon size={34} strokeWidth={1.8} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="card-link">{link} <ArrowRight size={16} /></span>
            </a>
          ))}
        </div>

        <section className="stats-panel" aria-label="At a glance">
          <div className="stats-intro">
            <h2>At a Glance</h2>
            <p>A snapshot of my journey and impact.</p>
          </div>
          <div className="stat"><BriefcaseBusiness /><span><strong>14+</strong>Projects Completed</span></div>
          <div className="stat"><Code2 /><span><strong>10+</strong>Technologies</span></div>
          <div className="stat"><Star /><span><strong>{experience}+</strong>Years Experience</span></div>
        </section>
      </main>
    </>
  );
}

const projectGroups = [
  {
    icon: Smartphone,
    title: "Android Applications",
    description: "Native mobile products focused on intuitive experiences, maintainable MVVM architecture, and modern Android tooling.",
    tags: ["Kotlin", "Jetpack Compose", "MVVM"],
  },
  {
    icon: ServerCog,
    title: ".NET Systems",
    description: "APIs, WPF desktop experiences, and dependable system services built for real operational needs.",
    tags: ["C#", ".NET", "WPF", "REST APIs"],
  },
  {
    icon: MonitorCog,
    title: "Web Experiences",
    description: "Fast, responsive interfaces that bring product ideas to life across screen sizes.",
    tags: ["React", "TypeScript", "Responsive UI"],
  },
];

function ProjectsPage() {
  return (
    <PageFrame eyebrow="THE WORK" title="Projects" intro="A growing collection of applications, experiments, and practical tools across mobile, desktop, backend, and web.">
      <div className="project-list">
        {projectGroups.map(({ icon: Icon, title, description, tags }, index) => (
          <article className="project-row" key={title}>
            <div className="project-number">0{index + 1}</div>
            <div className="project-icon"><Icon size={30} /></div>
            <div className="project-copy">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
            <span className="coming-soon">Case studies coming soon</span>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}

function AboutPage() {
  return (
    <PageFrame eyebrow="BEHIND THE CODE" title="About Jean" intro="I’m a software engineer who enjoys turning complex problems into dependable products people can actually use.">
      <div className="about-grid">
        <article className="story-card">
          <h2>Building with purpose</h2>
          <p>Since February 2019, I’ve worked across Android, .NET, desktop systems, services, APIs, and the web. I care about the full path from a rough idea to software that is understandable, maintainable, and ready for real users.</p>
          <p>My favorite projects sit where thoughtful engineering meets a clear human need—especially when there is room to learn, simplify, and make the experience better with every iteration.</p>
        </article>
        <aside className="principles-card">
          <h2>How I work</h2>
          {[
            "Start with the problem, not the technology.",
            "Build clear systems that are easy to evolve.",
            "Ship, listen, learn, and improve.",
          ].map((item) => <p key={item}><CheckCircle2 size={18} />{item}</p>)}
        </aside>
      </div>
    </PageFrame>
  );
}

const skillGroups = [
  { icon: Smartphone, title: "Mobile", items: ["Kotlin", "Jetpack Compose", "Android SDK", "MVVM"] },
  { icon: ServerCog, title: "Microsoft Stack", items: ["C#", ".NET", "WPF", "REST APIs", "System Services"] },
  { icon: Layers3, title: "Web", items: ["React", "TypeScript", "HTML", "CSS", "Responsive Design"] },
  { icon: Bot, title: "Engineering", items: ["Architecture", "Git", "Testing", "CI/CD", "Problem Solving"] },
];

function SkillsPage() {
  return (
    <PageFrame eyebrow="TOOLKIT" title="Skills" intro="A practical toolkit shaped by building products across mobile, desktop, backend systems, and the web.">
      <div className="skills-grid">
        {skillGroups.map(({ icon: Icon, title, items }) => (
          <article className="skill-card" key={title}>
            <Icon size={28} />
            <h2>{title}</h2>
            <div className="skill-items">{items.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}

function ContactPage() {
  return (
    <PageFrame eyebrow="LET'S CONNECT" title="Contact" intro="Have an interesting problem, a role, or a project worth discussing? I’d be glad to hear about it.">
      <div className="contact-panel">
        <div>
          <p className="contact-kicker">BEST PLACE TO REACH ME</p>
          <h2>Start a conversation on LinkedIn.</h2>
          <p>Connect with me for professional opportunities, engineering conversations, or a look at what I’m working on next.</p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href="https://www.linkedin.com/in/jean-michael-harris/" target="_blank" rel="noreferrer">
            <ContactRound size={19} /> Open LinkedIn <ExternalLink size={16} />
          </a>
          <a className="button secondary" href="https://github.com/SoftwareEngineerJeanHarris" target="_blank" rel="noreferrer">
            <GitBranch size={19} /> View GitHub
          </a>
        </div>
      </div>
    </PageFrame>
  );
}

function PageFrame({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return (
    <main className="inner-page shell">
      <header className="page-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </header>
      {children}
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRoute);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const pages: Record<Route, ReactNode> = {
    home: <HomePage />,
    projects: <ProjectsPage />,
    about: <AboutPage />,
    skills: <SkillsPage />,
    contact: <ContactPage />,
  };

  return (
    <div className="site-shell">
      <Header route={route} />
      {pages[route]}
      <Footer />
    </div>
  );
}
