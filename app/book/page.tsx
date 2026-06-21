import type { Metadata } from "next";
import { ButtonLink, PageHeader, Section } from "../components";
import { lessonOptions, serviceAreas } from "../data";
import { CalEmbed } from "./cal-embed";

export const metadata: Metadata = {
  title: "Book Private Swim Lessons",
  description:
    "Book private mobile swim lessons with Little Swimmers Academy for children ages 2-16 across Los Gatos, Saratoga, Campbell, Cupertino, and nearby South Bay communities.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book"
        title="Book a private swim lesson."
        description="Choose an available time through Cal.com, then receive confirmation details for your lesson."
      />
      <Section className="bg-sky-50">
        <div className="grid gap-4">
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-sky-100">
            <h3 className="text-xl font-bold">Lesson Options</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {lessonOptions.map((lesson) => (
                <div
                  key={lesson.title}
                  className="rounded-lg border border-sky-100 p-4"
                >
                  <p className="font-semibold">{lesson.title}</p>
                  <p className="mt-2 text-2xl font-bold text-cyan-700">
                    {lesson.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-sky-100">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                No travel fee
              </p>
              <h3 className="mt-3 text-xl font-bold">Standard Area</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {serviceAreas.standard.join(", ")}
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-sky-100">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Travel fee applies
              </p>
              <h3 className="mt-3 text-xl font-bold">Extended Area</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {serviceAreas.extended.join(", ")}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <CalEmbed />
          <div className="mt-5">
            <ButtonLink href="/book/request" variant="secondary">
              Use Request Form
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
