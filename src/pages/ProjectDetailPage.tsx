import { categories } from "../data/categories";
import { projects } from "../data/projects";
import { ActionLink } from "../components/ActionLink";
import { SectionHeading } from "../components/SectionHeading";

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = projects.find((item) => encodeURIComponent(item.slug) === slug);
  const category = categories.find((item) => item.id === project?.category);
  if (!project) return <><SectionHeading eyebrow="Projects" title="Project not found." description="This case study may have moved, or the link may be incomplete." /><ActionLink href="#/projects">Back to projects</ActionLink></>;
  return (
    <>
      <div className="case-back"><ActionLink href={`#/projects?category=${project.category}`} variant="text">Back to {category?.title}</ActionLink></div>
      <SectionHeading eyebrow={category?.title ?? "Case study"} title={<>{project.title}<span className="accent">.</span></>} description={project.summary} />
      <div className="case-layout">
        <aside className="case-facts" aria-label="Project details">
          <dl><dt>Role</dt><dd>{project.role}</dd><dt>Status</dt><dd>{project.status}</dd><dt>Stack</dt><dd><ul className="tag-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></dd></dl>
          {(project.repositoryUrl || project.demoUrl) && <div className="case-links">{project.repositoryUrl && <ActionLink href={project.repositoryUrl} variant="outline" external>View repository</ActionLink>}{project.demoUrl && <ActionLink href={project.demoUrl} external>Live demo</ActionLink>}</div>}
        </aside>
        <div className="case-story">
          {project.problem && <section><h2>The problem</h2><p>{project.problem}</p></section>}
          {project.approach?.length ? <section><h2>The approach</h2><ol>{project.approach.map((step) => <li key={step}>{step}</li>)}</ol></section> : null}
          {project.screenshots?.length ? <section aria-label="Project screenshots">{project.screenshots.map((shot) => <figure key={shot.src}><img src={shot.src} alt={shot.alt} loading="lazy" />{shot.caption && <figcaption>{shot.caption}</figcaption>}</figure>)}</section> : null}
          {project.outcome && <section><h2>Current outcome</h2><p>{project.outcome}</p></section>}
          {project.limitations && <section className="case-scope"><h2>Scope of this project</h2><p>{project.limitations}</p></section>}
          {project.sources?.length ? <section><h2>Explore the source</h2><ul className="case-sources">{project.sources.map((source) => <li key={source.url}><ActionLink href={source.url} variant="text" external>{source.label}</ActionLink></li>)}</ul></section> : null}
        </div>
      </div>
    </>
  );
}
