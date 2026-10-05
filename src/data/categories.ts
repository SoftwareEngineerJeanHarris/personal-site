export const categories = [
  {
    id: "kotlin-android",
    title: "Kotlin Android",
    description: "Mobile applications that turn complex processes into clear, guided workflows.",
    technologies: ["Kotlin", "Android", "Jetpack Compose", "MVVM"],
  },
  {
    id: "csharp-dotnet",
    title: "C# .NET",
    description: "APIs, desktop tools, and services that automate work and connect systems.",
    technologies: ["C#", ".NET", "WPF", "REST APIs"],
  },
  {
    id: "js-react",
    title: "JS React",
    description: "Web applications and dashboards that make useful information easy to act on.",
    technologies: ["JavaScript", "React", "TypeScript", "CSS"],
  },
  {
    id: "offensive-security-cyber",
    title: "Offensive Security Cyber",
    description: "Security labs, attack-path analysis, and research into how systems can fail.",
    technologies: ["Security labs", "Threat modeling", "Technical write-ups"],
  },
] as const;

export type CategoryId = typeof categories[number]["id"];
