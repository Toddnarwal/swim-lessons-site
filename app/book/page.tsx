import {
  PageHeader,
  Section,
  SelectInput,
  TextArea,
  TextInput,
} from "../components";

export default function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book"
        title="Request a private swim lesson."
        description="Share your preferred lesson details. Backend booking is not connected yet, so this form is ready for the future workflow."
      />
      <Section className="bg-sky-50">
        <form className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-sm ring-1 ring-sky-100">
          <div className="grid gap-5 sm:grid-cols-2">
            <TextInput label="Parent name" name="parentName" required />
            <TextInput label="Email" name="email" type="email" required />
            <TextInput label="Phone" name="phone" type="tel" required />
            <TextInput label="Address" name="address" required />
            <TextInput label="Child name" name="childName" required />
            <TextInput
              label="Child age"
              name="childAge"
              type="number"
              required
            />
            <SelectInput label="Lesson duration" name="lessonDuration">
              <option>30 minutes</option>
              <option>45 minutes</option>
              <option>60 minutes</option>
            </SelectInput>
            <TextInput
              label="Preferred date"
              name="preferredDate"
              type="date"
              required
            />
            <TextInput
              label="Preferred time"
              name="preferredTime"
              type="time"
              required
            />
            <div className="sm:col-span-2">
              <TextArea label="Notes" name="notes" />
            </div>
          </div>
          <button
            type="button"
            className="mt-6 min-h-12 rounded-full bg-cyan-600 px-6 font-semibold text-white transition hover:bg-cyan-700"
          >
            Request Booking
          </button>
        </form>
      </Section>
    </>
  );
}
