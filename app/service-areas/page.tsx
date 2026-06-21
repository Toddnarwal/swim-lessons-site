import type { Metadata } from "next";
import { ButtonLink, PageHeader, Section } from "../components";
import { serviceAreas } from "../data";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Little Swimmers Academy provides private mobile swim lessons at family pools in Los Gatos, Saratoga, Campbell, Cupertino, Monte Sereno, and nearby South Bay communities.",
  alternates: {
    canonical: "/service-areas",
  },
};

const localSearches = [
  "Private swim lessons in Los Gatos",
  "Kids swim lessons in Saratoga",
  "Backyard swim lessons in Campbell",
  "Mobile swim instructor in Cupertino",
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service Areas"
        title="Private swim lessons at your family pool."
        description="Little Swimmers Academy is a service-area-only swim lesson business. Lessons are taught at client pools across the South Bay, with no public storefront or drop-in location."
      />
      <Section className="bg-sky-50">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-sky-100">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Mobile instruction
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              South Bay swim lessons without the commute.
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              The instructor travels to your home or family pool so your child
              can learn in a familiar setting. Standard service areas have no
              travel fee; extended areas may include a fee confirmed before
              booking.
            </p>
            <div className="mt-7">
              <ButtonLink href="/book">Check Availability</ButtonLink>
            </div>
          </div>

          <div className="grid gap-4">
            <AreaCard
              eyebrow="No travel fee"
              title="Standard Service Area"
              areas={serviceAreas.standard}
            />
            <AreaCard
              eyebrow="Travel fee may apply"
              title="Extended Service Area"
              areas={serviceAreas.extended}
              muted
            />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Local searches
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Helping nearby families find private lessons.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Families often look for swim instruction by city and convenience.
              Little Swimmers Academy focuses on private swim lessons for
              children ages 2-16 at residential pools in the South Bay.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {localSearches.map((search) => (
              <div
                key={search}
                className="rounded-lg border border-sky-100 bg-sky-50 p-5 font-semibold text-slate-800"
              >
                {search}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function AreaCard({
  eyebrow,
  title,
  areas,
  muted = false,
}: {
  eyebrow: string;
  title: string;
  areas: string[];
  muted?: boolean;
}) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-sky-100">
      <p
        className={`text-sm font-semibold uppercase tracking-[0.16em] ${
          muted ? "text-slate-500" : "text-cyan-700"
        }`}
      >
        {eyebrow}
      </p>
      <h3 className="mt-3 text-xl font-bold">{title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {areas.map((area) => (
          <span
            key={area}
            className="rounded-full bg-sky-50 px-3 py-2 text-sm font-medium text-slate-800 ring-1 ring-sky-100"
          >
            {area}
          </span>
        ))}
      </div>
    </div>
  );
}
