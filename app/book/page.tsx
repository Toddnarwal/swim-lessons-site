import { ButtonLink, PageHeader, Section } from "../components";
import { lessonOptions, serviceAreas } from "../data";

const bookingUrl = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL;

export default function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book"
        title="Book a private swim lesson."
        description="Choose an available time through Google Calendar, then receive confirmation details for your lesson."
      />
      <Section className="bg-sky-50">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-start">
          <div className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-sky-100">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Online scheduling
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              View available lesson times.
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Google Calendar booking helps prevent double booking and sends
              appointment details after a time is selected.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {bookingUrl ? (
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-600 px-6 text-base font-semibold text-white shadow-sm shadow-cyan-900/10 transition hover:bg-cyan-700"
                >
                  View Available Times
                </a>
              ) : (
                <span className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-300 px-6 text-base font-semibold text-slate-700">
                  Calendar Link Coming Soon
                </span>
              )}
              <ButtonLink href="/book/request" variant="secondary">
                Use Request Form
              </ButtonLink>
            </div>
          </div>

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
        </div>
      </Section>
    </>
  );
}
