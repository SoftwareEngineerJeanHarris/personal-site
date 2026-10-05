export const site = {
  name: "Jean-Michael Harris",
  role: "Software engineering & cybersecurity",
  github: "https://github.com/SoftwareEngineerJeanHarris",
  linkedin: "https://www.linkedin.com/in/jean-michael-harris/",
};

export const navigation = [
  { route: "home", label: "Home" },
  { route: "projects", label: "Projects" },
  { route: "about", label: "About" },
  { route: "contact", label: "Contact" },
] as const;

// Keep public assets valid beneath the GitHub Pages deployment path.
export const headshotUrl = `${import.meta.env.BASE_URL}images/jean-michael-harris-headshot-960.webp`;
export const headshotSrcSet = `${import.meta.env.BASE_URL}images/jean-michael-harris-headshot-480.webp 480w, ${headshotUrl} 960w`;
