import type { Metadata } from "next";
import { PageHeader, Section } from "../components";
import { certifications } from "../data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the private swim instructor behind Little Swimmers Academy, serving families with safety-first swim lessons across the South Bay.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Personal instruction with a safety-first approach."
        description="Little Swimmers Academy is built around trust, patience, and practical water confidence for children ages 2‑16."
      />
      <Section className="bg-sky-50">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-sky-100 lg:col-span-2">
            <h2 className="text-2xl font-bold">Instructor Biography</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Hi, I&apos;m Sierra! I recently graduated from UC Irvine and have a
              passion for combining creativity and skill building to help each child
              learn in the way that works best for them. I was a competitive
              swimmer for nine years and have been teaching private and group
              swim lessons since October 2019. As a former high school
              All-American swimmer, I bring strong technical knowledge and an
              adaptive coaching style to every lesson.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              I enjoy working with beginners and experienced swimmers alike,
              helping each student feel safe, comfortable, and confident in the
              water while having fun along the way. I look forward to working
              with you!
            </p>
          </div>
          <div className="rounded-lg bg-cyan-700 p-7 text-white">
            <h2 className="text-2xl font-bold">Certifications</h2>
            <ul className="mt-5 space-y-3">
              {certifications.map((certification) => (
                <li key={certification} className="flex gap-3">
                  <span aria-hidden="true">{"\u2713"}</span>
                  <span>{certification}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section className="bg-white">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Teaching philosophy
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            Confidence before pressure. Progress before perfection.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Every swimmer learns differently. Lessons focus on water safety,
            body position, breath control, floating, kicking, and stroke
            fundamentals through clear coaching and positive repetition. The
            goal is to help children feel capable in the water while giving
            parents a clear view of what is improving week by week.
          </p>
        </div>
      </Section>
    </>
  );
}
