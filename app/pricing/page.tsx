import { ButtonLink, PageHeader, Section } from "../components";
import { lessonOptions } from "../data";

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple lesson options for busy families."
        description="Choose the right session length for your child. Pricing uses mock data and can be updated before launch."
      />
      <Section className="bg-sky-50">
        <div className="grid gap-5 md:grid-cols-3">
          {lessonOptions.map((option) => (
            <div
              key={option.title}
              className="flex rounded-lg bg-white p-6 shadow-sm ring-1 ring-sky-100 md:min-h-[360px]"
            >
              <div className="flex w-full flex-col">
                <h2 className="text-xl font-bold">{option.title}</h2>
                <p className="mt-4 text-4xl font-bold text-cyan-700">
                  {option.price}
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  {option.duration}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="text-cyan-700" aria-hidden="true">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 md:mt-auto">
                  <ButtonLink href="/book">Book This Lesson</ButtonLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
