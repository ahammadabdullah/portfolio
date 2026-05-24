import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import VersionSwitcher from "@/components/VersionSwitcher";
import { MotionProvider } from "@/providers/MotionProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const BASE_URL = "https://hire.ahammadabdullah.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ahammad Abdullah — Full Stack Developer",
    template: "%s | Ahammad Abdullah",
  },
  description:
    "Full Stack Developer who builds with AI tools the right way. Clean architecture, maintainable code, systems that scale.",
  keywords: [
    "Full Stack Developer",
    "Next.js developer",
    "TypeScript developer",
    "React developer",
    "Node.js developer",
    "AI-augmented development",
    "responsible AI development",
    "clean code architecture",
    "maintainable software",
    "software engineer for hire",
    "Ahammad Abdullah",
    "Full Stack Developer Bangladesh",
    "Next.js developer Dhaka",
    "hire full stack developer",
    "freelance full stack developer",
    "web application developer",
    "SaaS developer",
    "API development",
    "REST API developer",
    "Tailwind CSS developer",
    "PostgreSQL developer",
    "remote software developer",
    "AI tools developer",
    "no AI slop",
    "senior developer Bangladesh",
  ],
  authors: [{ name: "Ahammad Abdullah", url: BASE_URL }],
  creator: "Ahammad Abdullah",
  category: "technology",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Ahammad Abdullah — Full Stack Developer",
    description:
      "Full Stack Developer who builds with AI tools the right way. Clean architecture, maintainable code, systems that scale.",
    siteName: "Ahammad Abdullah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahammad Abdullah — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahammad Abdullah — Full Stack Developer",
    description: "Full Stack Developer who builds with AI tools the right way.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: BASE_URL },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahammad Abdullah",
  jobTitle: "Full Stack Developer",
  url: BASE_URL,
  image: `${BASE_URL}/og-image.png`,
  email: "hi@ahammadabdullah.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [
    "https://github.com/ahammadabdullah",
    "https://linkedin.com/in/ahammad-abdullah",
  ],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Supabase",
    "AI-augmented development",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ahammad Abdullah",
  url: BASE_URL,
  description: "Full Stack Developer who builds with AI tools the right way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <head>
        <meta name="theme-color" content="#050506" />
        <meta name="google-site-verification" content="R6nM7N8O89hKr_L9aq792odg5hIqB6uMKi_z4C6J1hg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-[--color-base] text-[--color-text-primary] min-h-screen">
        <MotionProvider>
          <VersionSwitcher />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
