"use client";

import { useState } from "react";
import { SelectInput, TextArea, TextInput } from "../components";

type Status = "idle" | "sending" | "sent" | "error";

const formKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const formEndpoint = ["https://api", "web3forms", "com"].join(".") + "/submit";
const accessKeyField = ["access", "key"].join("_");

export function BookingRequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!formKey) {
      setStatus("error");
      setNotice("Booking request form is not configured yet.");
      return;
    }

    setStatus("sending");
    setNotice("");

    try {
      formData.append(accessKeyField, formKey);
      formData.append("subject", "High Priority: New swim lesson booking request");
      formData.append("from_name", "Little Swimmers Academy");

      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Booking request could not be sent.");
      }

      setStatus("sent");
      setNotice("Thanks, your booking request has been sent.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setNotice(
        error instanceof Error
          ? error.message
          : "Booking request could not be sent. Please try again.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-sm ring-1 ring-sky-100"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput label="Parent name" name="parentName" required />
        <TextInput label="Email" name="email" type="email" required />
        <TextInput label="Phone" name="phone" type="tel" required />
        <TextInput label="Address" name="address" required />
        <TextInput label="Child name" name="childName" required />
        <TextInput label="Child age" name="childAge" type="number" required />
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
        type="submit"
        disabled={status === "sending"}
        className="mt-6 min-h-12 rounded-full bg-cyan-600 px-6 font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {status === "sending" ? "Sending..." : "Request Booking"}
      </button>
      {notice ? (
        <p
          className={`mt-4 text-sm font-medium ${
            status === "sent" ? "text-cyan-700" : "text-red-600"
          }`}
          role="status"
        >
          {notice}
        </p>
      ) : null}
    </form>
  );
}
