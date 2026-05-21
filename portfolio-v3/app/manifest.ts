import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ahammad Abdullah — Portfolio",
    short_name: "AA Portfolio",
    description: "Full Stack Developer who builds with AI tools the right way.",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#7c3aed",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
