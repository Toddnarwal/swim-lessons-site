import { PageHeader, Section } from "../components";
import { ContactForm } from "./form";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Send a message about private swim lessons."
        description="Use the form below to ask about availability, service area, or the best lesson option for your child."
      />
      <Section className="bg-sky-50">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <div className="rounded-lg bg-cyan-700 p-7 text-white">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="mt-5 space-y-3 text-cyan-50">
              <p>mail2sierra@gmail.com</p>
              <p>(408) 438-6870</p>
              <p>Serving local backyard pools</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
