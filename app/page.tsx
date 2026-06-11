import Image from "next/image";
import { ButtonLink, Section } from "./components";
import { lessonOptions } from "./data";

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Private lessons at your pool
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              Confident swimmers start close to home.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Little Swimmers Academy provides private swim lessons for
              children ages 3-13. Your instructor travels to the customer&apos;s
              pool with a calm, skill-based plan built around your child&apos;s
              pace.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book">Book a Lesson</ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                View Pricing
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-lg bg-cyan-100 shadow-2xl shadow-slate-900/12 sm:min-h-[460px]">
            <Image
              src="/swim-lesson-hero-lsa.png"
              alt="Private swim instructor teaching a child in a residential pool"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Section className="bg-sky-50">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Ages 3-13", "Lessons are tailored for early learners through confident young swimmers."],
            ["Your pool", "The instructor comes to your home pool for familiar, convenient practice."],
            ["Private coaching", "One-on-one attention keeps lessons focused, calm, and productive."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-sky-100">
              <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Lesson options
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Flexible sessions for every stage.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Choose a session length that matches your child&apos;s age, stamina,
              and goals. Each lesson includes a short parent recap.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {lessonOptions.map((option) => (
              <div key={option.title} className="rounded-lg border border-sky-100 p-5">
                <h3 className="font-semibold">{option.title}</h3>
                <p className="mt-3 text-3xl font-bold text-cyan-700">
                  {option.price}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {option.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
