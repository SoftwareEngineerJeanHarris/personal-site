import type { CategoryId } from "./categories";

export type Project = {
  slug: string;
  title: string;
  category: CategoryId;
  summary: string;
  role: string;
  status: string;
  stack: readonly string[];
  repositoryUrl?: string;
  demoUrl?: string;
  cover?: { src: string; alt: string; width: number; height: number };
  sources?: readonly { label: string; url: string }[];
  limitations?: string;
  screenshots?: readonly { src: string; alt: string; caption?: string }[];
  problem?: string;
  approach?: readonly string[];
  outcome?: string;
};

const github = "https://github.com/SoftwareEngineerJeanHarris";
const portfolioCapture = `${import.meta.env.BASE_URL}images/projects/portfolio-case-study.webp`;

// Curated from public repository evidence; see docs/portfolio-curation.md.
export const projects: readonly Project[] = [
  {
    slug: "android-print",
    title: "AndroidPrint",
    category: "kotlin-android",
    summary: "An Android proof of concept exploring direct barcode and ticket printing to a printer at a static IP address.",
    role: "Repository owner",
    status: "Proof of concept",
    stack: ["Kotlin", "Android", "Gradle"],
    repositoryUrl: `${github}/AndroidPrint`,
    problem: "Explore sending barcode and ticket output directly from Android to a network printer without the standard print-preview flow.",
    approach: ["Scope the work as a focused Android printing experiment.", "Use a printer's static IP address as the destination, as described in the public repository."],
    outcome: "The public repository preserves the Kotlin Android proof of concept and its stated printing goal.",
    limitations: "This case study reflects the repository description and project structure. Printer compatibility and end-to-end output have not been tested for this portfolio review.",
    sources: [{ label: "Repository description and Android project", url: `${github}/AndroidPrint` }],
  },
  {
    slug: "look-and-book-api",
    title: "LookandBook API",
    category: "csharp-dotnet",
    summary: "A C# web API intended to serve the LookandBook Android and desktop applications.",
    role: "Repository owner and contributor",
    status: "Public source project",
    stack: ["C#", ".NET 8", "ASP.NET Core", "Entity Framework Core", "Swagger"],
    repositoryUrl: `${github}/LookandBookAPIv1`,
    problem: "Provide an API layer for the LookandBook Android and desktop clients.",
    approach: ["Organize the source into controller, data, and model directories.", "Target .NET 8 with the ASP.NET Core web SDK.", "Include Entity Framework Core, its in-memory provider, and Swashbuckle for API documentation."],
    outcome: "The public source contains the API project, controller/data/model structure, and declared framework dependencies.",
    limitations: "Source structure and dependencies were reviewed. Deployment, persistence behavior, and client integration were not exercised during this portfolio review.",
    sources: [{ label: "Project purpose", url: `${github}/LookandBookAPIv1` }, { label: "Framework and dependencies", url: `${github}/LookandBookAPIv1/blob/master/LookandBookAPI/LookandBookAPI.csproj` }],
  },
  {
    slug: "fresh-start-bank",
    title: "Fresh Start Bank",
    category: "js-react",
    summary: "A React banking interface prototype with sign-in and sign-up flows, field validation, and status feedback.",
    role: "Repository owner and contributor",
    status: "Interface prototype",
    stack: ["React", "TypeScript", "Vite", "CSS"],
    repositoryUrl: `${github}/fresh-start-bank`,
    problem: "Explore an approachable banking interface with clear account-entry flows.",
    approach: ["Switch between sign-in and sign-up modes using typed React props and component state.", "Validate names, email, and password format before enabling the relevant action.", "Provide a timed status message after the prototype's sign-up flow and return to sign-in."],
    outcome: "The public authentication component implements input validation, mode changes, and toast feedback, with a separate dashboard screen in the project.",
    limitations: "The reviewed authentication flow is a front-end prototype. Its sign-up action changes local state and its login action opens the dashboard; this is not a verified banking service or server-backed authentication system.",
    sources: [{ label: "Public React project", url: `${github}/fresh-start-bank` }, { label: "Authentication component", url: `${github}/fresh-start-bank/blob/main/src/screens/Auth.tsx` }],
  },
  {
  slug: "personal-portfolio",
  title: "Personal portfolio rebuild",
  category: "js-react",
  summary: "A portfolio connecting software engineering and security through a clean, red-accented visual system.",
  role: "Portfolio owner and design direction",
  status: "Portfolio website",
  stack: ["React", "TypeScript", "Vite", "CSS"],
  repositoryUrl: "https://github.com/SoftwareEngineerJeanHarris/personal-site",
  demoUrl: "https://softwareengineerjeanharris.github.io/personal-site/",
  cover: { src: portfolioCapture, alt: "The portfolio case study with its introduction, project details, and engineering approach", width: 1184, height: 900 },
  screenshots: [{ src: portfolioCapture, alt: "Desktop view of the portfolio's case-study page", caption: "Actual local preview of this rebuild · October 2026" }],
  problem: "Replace the previous portfolio with a clearer home for work across Android, .NET, React, and offensive security. The new design needs to promote the work while keeping navigation simple.",
  approach: [
    "Rebuild in ten phases, preserving the old implementation before replacing the active interface.",
    "Create shared navigation, headings, links, and design tokens around the approved Diagonal Momentum direction.",
    "Use hash routes under /personal-site/ so page links and refreshes work on GitHub Pages.",
    "Keep category selection in the URL and render case studies from typed project records.",
  ],
  outcome: "A responsive portfolio with a diagonal homepage, category browser, source-linked case studies, a portrait-led About page, cybersecurity credentials, and a roadmap for personal lab work.",
}];

export function projectHref(slug: string) { return `#/projects/${encodeURIComponent(slug)}`; }
