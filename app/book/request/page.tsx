import { PageHeader, Section } from "../../components";
import { BookingRequestForm } from "../request-form";

export default function BookingRequestPage() {
  return (
    <>
      <PageHeader
        eyebrow="Backup booking form"
        title="Request a private swim lesson."
        description="Use this form if online calendar booking is unavailable or if you prefer to send a custom request."
      />
      <Section className="bg-sky-50">
        <BookingRequestForm />
      </Section>
    </>
  );
}
