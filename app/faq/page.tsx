import type { Metadata } from "next";
import { PageHeader, Section } from "../components";
import { faqs } from "../data";
import { siteUrl } from "../seo";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about private swim lesson ages, preparation, travel, weather, booking, and service-area-only instruction.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/faq#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <PageHeader
        eyebrow="FAQ"
        title="Helpful answers before your first lesson."
        description="A quick guide to ages, travel, preparation, weather, and booking."
      />
      <Section className="bg-sky-50">
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-sky-100"
            >
              <h2 className="text-lg font-bold text-slate-950">
                {faq.question}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
