import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { businessName, localBusinessJsonLd, siteUrl } from "./seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: businessName,
    template: `%s | ${businessName}`,
  },
  description:
    "Private mobile swim lessons for children ages 2-16 at family pools in Los Gatos, Saratoga, Campbell, Cupertino, Monte Sereno, and nearby South Bay communities.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: businessName,
    description:
      "Private mobile swim lessons for children ages 2-16 across Los Gatos, Saratoga, Campbell, Cupertino, Monte Sereno, and nearby South Bay communities.",
    url: siteUrl,
    siteName: businessName,
    images: [
      {
        url: "/hero-preview-img-6934.png",
        width: 1366,
        height: 768,
        alt: "Private swim instructor teaching a child in a residential pool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: businessName,
    description:
      "Private mobile swim lessons for children ages 2-16 across the South Bay.",
    images: ["/hero-preview-img-6934.png"],
  },
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-sky-50 text-slate-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/92 backdrop-blur">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between"
            aria-label="Main navigation"
          >
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/little-swimmers-logo-v2.png"
                alt="Little Swimmers Academy logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-lg object-contain"
                priority
              />
              <span className="text-lg font-semibold tracking-tight">
                Little Swimmers Academy
              </span>
            </Link>
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-sky-50 hover:text-cyan-700"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/book"
                className="rounded-full bg-cyan-600 px-4 py-2 font-semibold text-white shadow-sm shadow-cyan-900/10 transition hover:bg-cyan-700"
              >
                Book Now
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8">
            <div>
              <p className="text-lg font-semibold">
                Little Swimmers Academy
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Service-area-only private swim instruction for children ages
                2-16 at your family pool.
              </p>
              <Link
                href="/service-areas"
                className="mt-4 inline-flex text-sm font-semibold text-cyan-200 transition hover:text-white"
              >
                View service areas
              </Link>
            </div>
            <div>
              <p className="font-semibold">Contact</p>
              <div className="mt-3 space-y-2 text-sm text-slate-300">
                <p>mail2sierra@gmail.com</p>
                <p>(408) 438-6870</p>
                <p>Serving local backyard pools</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-400">
            Copyright {new Date().getFullYear()} Little Swimmers Academy. All
            rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
