import { ArrowUpRight, Braces, Code2, ShieldCheck, Smartphone } from "lucide-react";
import { categories } from "../data/categories";
import { projectHref, type Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const category = categories.find((item) => item.id === project.category)!;
  const Icon = { "kotlin-android": Smartphone, "csharp-dotnet": Code2, "js-react": Braces, "offensive-security-cyber": ShieldCheck }[project.category];
  return (
    <article className="project-card">
      {project.cover ? <img className="project-card-cover" src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} loading="lazy" /> : <div className="project-card-visual" aria-hidden="true"><Icon size={54} strokeWidth={1} /><span>{category.title}</span></div>}
      <div className="project-card-body">
        <p className="project-status">{project.status}</p>
        <h3><a href={projectHref(project.slug)}>{project.title}<ArrowUpRight size={22} aria-hidden="true" /></a></h3>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label="Technology stack">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </article>
  );
}
