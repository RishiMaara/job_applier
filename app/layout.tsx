import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishikesh AV | Software Engineer & AI/ML Engineer",
  description: "Portfolio and master career profile of Rishikesh AV. Full-Stack Developer, AI/ML Engineer, and Distributed Systems builder.",
  keywords: ["Rishikesh AV", "Software Engineer", "AI Engineer", "Machine Learning", "Full-Stack", "Next.js", "FastAPI", "React", "Python", "Java"],
  openGraph: {
    title: "Rishikesh AV | Software & AI/ML Engineer",
    description: "Production experience in real-time ML inference, high-scale APIs, and full-stack SaaS platforms.",
    type: "website",
    url: "https://rishikesh-av-portfolio.lovable.app"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
