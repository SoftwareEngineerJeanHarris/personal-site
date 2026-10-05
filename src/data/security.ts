export const certifications = [
  { title: "Pre Security", code: "SEC0", issuer: "TryHackMe", issued: "2026-04-17", dateLabel: "April 17, 2026", file: "tryhackme-sec0-jean-michael-harris.pdf", image: "tryhackme-sec0.webp" },
  { title: "Cyber Security 101", code: "SEC1", issuer: "TryHackMe", issued: "2026-09-29", dateLabel: "September 29, 2026", file: "tryhackme-sec1-jean-michael-harris.pdf", image: "tryhackme-sec1.webp" },
] as const;

export const securityWork = [
  { title: "Home lab", status: "In progress", description: "Setting up a personal environment for hands-on security practice and experiments." },
  { title: "HTB rooms & write-ups", status: "In progress", description: "Working through Hack The Box rooms and documenting the learning process. Write-ups will be linked when ready to share." },
  { title: "TCP packet-sniffing server", status: "Planned", description: "A future lab project to explore network traffic capture and analysis." },
  { title: "SIEM application", status: "Planned", description: "A future security information and event management project for collecting and examining lab events." },
  { title: "Honeypot server", status: "Future idea", description: "An eventual lab project to study interactions with a deliberately instrumented decoy service." },
] as const;
