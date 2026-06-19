"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const formKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const formEndpoint = ["https://api", "web3forms", "com"].join(".") + "/submit";
const accessKeyField = ["access", "key"].join("_");

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!formKey) {
      setStatus("error");
      setNotice("Contact form is not configured yet.");
      return;
    }

    setStatus("sending");
    setNotice("");

    try {
      formData.append(accessKeyField, formKey);
      formData.append("subject", "High Priority: New Little Swimmers Academy message");
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
        throw new Error(result.message || "Message could not be sent.");
      }

      setStatus("sent");
      setNotice("Thanks, your message has been sent.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setNotice(
        error instanceof Error
          ? error.message
          : "Message could not be sent. Please try again.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-sky-100"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormInput label="Name" name="name" required />
        <FormInput label="Email" name="email" type="email" required />
        <FormInput label="Phone" name="phone" type="tel" />
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-slate-800">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 min-h-12 rounded-full bg-cyan-600 px-6 font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
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

function FormInput({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-800">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
      />
    </label>
  );
}
