import { PageHeader, Section } from "../components";
import { faqs } from "../data";

export default function FaqPage() {
  return (
    <>
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
