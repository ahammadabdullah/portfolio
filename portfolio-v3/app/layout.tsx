import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://ahammadabdullah.dev"),
  title: {
    default: "Ahammad Abdullah — Full Stack Developer",
    template: "%s | Ahammad Abdullah",
  },
  description:
    "Full Stack Developer who builds with AI tools the right way. Clean architecture, maintainable code, systems that scale.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "AI-augmented development",
    "Ahammad Abdullah",
  ],
  authors: [{ name: "Ahammad Abdullah", url: "https://ahammadabdullah.dev" }],
  creator: "Ahammad Abdullah",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahammadabdullah.dev",
    title: "Ahammad Abdullah — Full Stack Developer",
    description:
      "Full Stack Developer who builds with AI tools the right way. Clean architecture, maintainable code, systems that scale.",
    siteName: "Ahammad Abdullah",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahammad Abdullah — Full Stack Developer",
    description:
      "Full Stack Developer who builds with AI tools the right way.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://ahammadabdullah.dev" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <meta name="theme-color" content="#050506" />
      </head>
      <body className="bg-[--color-base] text-[--color-text-primary] min-h-screen">
        <MotionProvider>
          <VersionSwitcher />
          <Navbar />
          <main className="pt-16">{children}</main>
        </MotionProvider>
      </body>
    </html>
  );
}
