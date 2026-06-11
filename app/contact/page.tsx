import { PageHeader, Section, TextArea, TextInput } from "../components";

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
              <p>hello@littleswimmersacademy.com</p>
              <p>(555) 123-4567</p>
              <p>Serving local backyard pools</p>
            </div>
          </div>
          <form className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-sky-100">
            <div className="grid gap-5 sm:grid-cols-2">
              <TextInput label="Name" name="name" required />
              <TextInput label="Email" name="email" type="email" required />
              <TextInput label="Phone" name="phone" type="tel" />
              <div className="sm:col-span-2">
                <TextArea label="Message" name="message" required />
              </div>
            </div>
            <button
              type="button"
              className="mt-6 min-h-12 rounded-full bg-cyan-600 px-6 font-semibold text-white transition hover:bg-cyan-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
