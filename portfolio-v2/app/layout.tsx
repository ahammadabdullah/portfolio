import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import VersionSwitcher from "@/components/VersionSwitcher";
import { MotionProvider } from "@/providers/MotionProvider";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahammadabdullah.dev"),
  title: {
    default: "Ahammad Abdullah - Full Stack Developer",
    template: "%s | Ahammad Abdullah",
  },
  description:
    "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating scalable, efficient digital solutions.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "Web Development",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Ahammad Abdullah",
    "Portfolio",
  ],
  authors: [
    { name: "Ahammad Abdullah", url: "https://github.com/ahammadabdullah" },
  ],
  creator: "Ahammad Abdullah",
  publisher: "Ahammad Abdullah",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahammadabdullah.dev",
    title: "Ahammad Abdullah - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating scalable, efficient digital solutions.",
    siteName: "Ahammad Abdullah Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahammad Abdullah - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahammad Abdullah - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/og-image.png"],
    creator: "@ahammadabdullah",
  },
  alternates: {
    canonical: "https://ahammadabdullah.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetBrainsMono.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className={`${jetBrainsMono.className} font-mono`}>
        <MotionProvider>
          <div className="bg-primary min-h-screen relative overflow-hidden">
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: "#161b22",
                  color: "#f0f6fc",
                  border: "1px solid #30363d",
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.875rem",
                },
                success: {
                  style: {
                    border: "1px solid #7ee787",
                  },
                },
                error: {
                  style: {
                    border: "1px solid #ff7b72",
                  },
                },
              }}
            />
            <VersionSwitcher />
            <Navbar />
            <main className="pt-16 relative z-10">{children}</main>
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
