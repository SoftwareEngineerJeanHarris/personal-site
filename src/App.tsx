import { useEffect, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  ExternalLink,
  GitBranch,
  ContactRound,
  Menu,
  MonitorCog,
  ServerCog,
  Smartphone,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiSharp,
  SiTypescript,
} from "react-icons/si";

type Route = "home" | "projects" | "about" | "contact";

const routes: Route[] = ["home", "projects", "about", "contact"];

const routeLabels: Record<Route, string> = {
  home: "Home",
  projects: "Projects",
  about: "About",
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
        {(["home", "projects", "about"] as Route[]).map((item) => (
          <a
            className={route === item ? "nav-link active" : "nav-link"}
            href={`#/${item}`}
            key={item}
            onClick={() => setOpen(false)}
          >
            {routeLabels[item]}
          </a>
        ))}
        <button className="nav-link resume-nav" type="button" aria-disabled="true" title="Résumé coming soon">
          Résumé
        </button>
        <a
          className={route === "contact" ? "nav-link active" : "nav-link"}
          href="#/contact"
          onClick={() => setOpen(false)}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

function CursorFlowLink({
  href,
  className,
  children,
  target,
  rel,
}: {
  href: string;
  className: string;
  children: ReactNode;
  target?: "_blank";
  rel?: string;
}) {
  const handlePointerMove = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    setPointerEffect(event.currentTarget, event.clientX, event.clientY, 4);
  };

  const resetPointer = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    resetPointerEffect(event.currentTarget);
  };

  return (
    <a
      className={`button cursor-flow ${className}`}
      href={href}
      target={target}
      rel={rel}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <span className="button-content">{children}</span>
    </a>
  );
}

function setPointerEffect(element: HTMLElement, clientX: number, clientY: number, tiltStrength: number) {
    const bounds = element.getBoundingClientRect();
    const x = clientX - bounds.left;
    const y = clientY - bounds.top;
    const xRatio = x / bounds.width - 0.5;
    const yRatio = y / bounds.height - 0.5;

    element.style.setProperty("--pointer-x", `${x}px`);
    element.style.setProperty("--pointer-y", `${y}px`);
    element.style.setProperty("--tilt-x", `${xRatio * tiltStrength}deg`);
    element.style.setProperty("--tilt-y", `${yRatio * -tiltStrength}deg`);
}

function resetPointerEffect(element: HTMLElement) {
  element.style.setProperty("--pointer-x", "50%");
  element.style.setProperty("--pointer-y", "50%");
  element.style.setProperty("--tilt-x", "0deg");
  element.style.setProperty("--tilt-y", "0deg");
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
    description: "MVVM Android workflows that turn large floor processes, including inventory verification, into clear guided actions.",
    link: "View Android Projects",
  },
  {
    title: ".NET",
    icon: ServerCog,
    className: "dotnet",
    description: "C# APIs, WPF tools, and system services that automate scans, QA holds, material thresholds, and alerts.",
    link: "View .NET Projects",
  },
  {
    title: "React",
    icon: Blocks,
    className: "react",
    description: "React and TypeScript dashboards that give floor operators live progress and critical production visibility.",
    link: "View React Projects",
  },
];

const languages = [
  { name: "Kotlin", icon: SiKotlin, className: "kotlin" },
  { name: "C#", icon: SiSharp, className: "csharp" },
  { name: "TypeScript", icon: SiTypescript, className: "typescript" },
  { name: "JavaScript", icon: SiJavascript, className: "javascript" },
  { name: "HTML5", icon: SiHtml5, className: "html" },
  { name: "CSS3", icon: SiCss, className: "css" },
];

function HomePage() {
  const experience = yearsSinceFebruary2019();

  return (
    <>
      <section className="hero">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">SOFTWARE ENGINEER</p>
          <h1 className="hero-title" data-text="Build. Ship. Learn.">Build. <strong>Ship.</strong> Learn.</h1>
          <div className="hero-actions">
            <CursorFlowLink className="primary" href="#/projects">Explore Projects</CursorFlowLink>
            <button className="button secondary" type="button" disabled title="Résumé coming soon">Résumé</button>
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
            <a
              className={`specialty-card ${className}`}
              href="#/projects"
              key={title}
              onPointerMove={(event) => setPointerEffect(event.currentTarget, event.clientX, event.clientY, 3)}
              onPointerLeave={(event) => resetPointerEffect(event.currentTarget)}
            >
              <span className="icon-wrap"><Icon size={34} strokeWidth={1.8} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="card-link">{link} <ArrowRight size={16} /></span>
            </a>
          ))}
        </div>

        <section className="languages-section" aria-labelledby="languages-title">
          <div className="languages-copy">
            <p className="eyebrow">CORE TOOLKIT</p>
            <h2 id="languages-title">Languages</h2>
            <p>The languages behind the mobile, automation, and floor-visibility work.</p>
          </div>
          <div className="language-grid">
            {languages.map(({ name, icon: Icon, className }) => (
              <div className={`language-chip ${className}`} key={name}>
                <Icon aria-hidden="true" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>

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
    description: "Guided Android workflows that simplify large floor processes—like starting, running, and verifying a full inventory stock count from a few clear actions.",
    tags: ["Kotlin", "Jetpack Compose", "MVVM"],
  },
  {
    icon: ServerCog,
    title: ".NET Systems",
    description: "Factory automation that updates tire-material locations on each scan, triggers QA holds, and sends threshold and expiration alerts.",
    tags: ["C#", ".NET", "WPF", "REST APIs"],
  },
  {
    icon: MonitorCog,
    title: "Web Experiences",
    description: "Floor dashboards that make operator progress visible and relay critical production information when teams need it.",
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
          <p>My favorite projects automate tedious work, starting with my own workflow and expanding to help others. In .NET, that has meant updating tire-material locations automatically with every factory scan, triggering QA holds, and sending threshold or expiration emails. On Android, I’ve turned large processes into a few clear actions—such as starting and running a stock count that verifies every inventory location. With React, I’ve built floor dashboards that let operators track progress and receive critical information as work happens.</p>
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
          <CursorFlowLink className="primary" href="https://www.linkedin.com/in/jean-michael-harris/" target="_blank" rel="noreferrer">
            <ContactRound size={19} /> Open LinkedIn <ExternalLink size={16} />
          </CursorFlowLink>
          <CursorFlowLink className="secondary" href="https://github.com/SoftwareEngineerJeanHarris" target="_blank" rel="noreferrer">
            <GitBranch size={19} /> View GitHub
          </CursorFlowLink>
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
