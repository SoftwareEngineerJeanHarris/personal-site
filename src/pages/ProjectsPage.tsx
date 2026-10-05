import { categories } from "../data/categories";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { ActionLink } from "../components/ActionLink";
import { SecuritySection } from "../components/SecuritySection";

export function ProjectsPage({ category }: { category?: string | null }) {
  const selected = categories.find((item) => item.id === category);
  const invalid = Boolean(category && !selected);
  const visibleProjects = selected ? projects.filter((project) => project.category === selected.id) : projects;
  return (
    <>
      <SectionHeading eyebrow="The work" title={<>Projects<span className="accent">.</span></>} description="Applications, practical tools, and security explorations across four disciplines." />
      <nav className="project-filters" aria-label="Project categories">
        <a href="#/projects" aria-current={!selected ? "true" : undefined}>All projects <span>{projects.length}</span></a>
        {categories.map((item) => <a key={item.id} href={`#/projects?category=${item.id}`} aria-current={selected?.id === item.id ? "true" : undefined}>{item.title}<span>{projects.filter((project) => project.category === item.id).length}</span></a>)}
      </nav>
      {invalid && <p className="filter-notice">That category wasn’t found. Showing all projects.</p>}
      <section className="project-results" aria-labelledby="results-title">
        <div className="results-heading"><h2 id="results-title">{selected?.title ?? "All projects"}</h2><p role="status">{visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}</p></div>
        {selected && <p className="category-description">{selected.description}</p>}
        {visibleProjects.length > 0 ? <div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div> : <div className="project-empty"><p className="eyebrow">Work in preparation</p><h3>More to share here.</h3><p>Projects in this discipline are being selected and documented. Browse the available work in the meantime.</p><ActionLink href="#/projects" variant="outline">View all projects</ActionLink></div>}
      </section>
      {selected?.id === "offensive-security-cyber" && <SecuritySection />}
    </>
  );
}
