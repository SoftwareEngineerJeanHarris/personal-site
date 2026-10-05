import { useEffect, useRef, useSyncExternalStore } from "react";
import { SiteLayout } from "./components/SiteLayout";
import { site } from "./data/site";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { projects } from "./data/projects";

const pages = {
  home: { title: "Software Engineering & Security", component: HomePage },
  projects: { title: "Projects", component: ProjectsPage },
  about: { title: "About", component: AboutPage },
  contact: { title: "Contact", component: ContactPage },
  "not-found": { title: "Page not found", component: NotFoundPage },
};

export type Route = keyof typeof pages;

function readHash() { return window.location.hash; }

function readRoute(path: string): Route {
  if (!path) return "home";
  if (/^projects\/[^/]+$/.test(path)) return "projects";
  return Object.prototype.hasOwnProperty.call(pages, path) ? path as Route : "not-found";
}

function subscribeToRoute(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

export default function App() {
  const hash = useSyncExternalStore(subscribeToRoute, readHash, () => "#/home");
  const [rawPath, query = ""] = hash.replace(/^#\/?/, "").split("?");
  const path = rawPath.replace(/\/$/, "");
  const route = readRoute(path);
  const projectSlug = route === "projects" && path.startsWith("projects/") ? path.slice(9) : undefined;
  const category = new URLSearchParams(query).get("category");
  const title = projectSlug ? projects.find((item) => encodeURIComponent(item.slug) === projectSlug)?.title ?? "Project not found" : pages[route].title;
  const mainRef = useRef<HTMLElement>(null);
  const previousPath = useRef(path);
  const Page = pages[route].component;

  useEffect(() => {
    document.title = `${title} | ${site.name}`;
    if (previousPath.current !== path) {
      mainRef.current?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "instant" });
      previousPath.current = path;
    }
  }, [title, path]);

  return (
    <SiteLayout route={route}>
      <main className="main-content shell" id="main-content" ref={mainRef} tabIndex={-1}>
        {projectSlug ? <ProjectDetailPage slug={projectSlug} /> : route === "projects" ? <ProjectsPage category={category} /> : <Page />}
      </main>
    </SiteLayout>
  );
}
