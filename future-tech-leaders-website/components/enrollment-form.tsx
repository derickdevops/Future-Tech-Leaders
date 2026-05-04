"use client";

import { useState } from "react";

type FormState = {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  interests: string;
  notes: string;
};

const initialState: FormState = {
  parentName: "",
  email: "",
  phone: "",
  childName: "",
  childAge: "",
  interests: "",
  notes: ""
};

export function EnrollmentForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    setFieldErrors({});

    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.parentName.trim()) nextErrors.parentName = "Parent or guardian name is required.";
    if (!form.email.trim()) nextErrors.email = "Email address is required.";
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!form.childName.trim()) nextErrors.childName = "Child name is required.";
    if (!form.childAge) nextErrors.childAge = "Select your child's age.";

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      setStatus("error");
      setMessage("Please correct the highlighted fields before submitting.");
      return;
    }

    const response = await fetch("/api/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        childAge: Number(form.childAge)
      })
    });

    const data = (await response.json()) as { message?: string; errors?: string[] };

    if (!response.ok) {
      setStatus("error");
      setMessage(data.errors?.join(" ") ?? data.message ?? "Submission failed.");
      return;
    }

    setStatus("success");
    setMessage(data.message ?? "Enrollment submitted successfully.");
    setForm(initialState);
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setFieldErrors((current) => ({ ...current, [key]: undefined }));
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
      {status === "error" && message ? (
        <div
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {message}
        </div>
      ) : null}

      {status === "success" && message ? (
        <div
          role="status"
          className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
        >
          {message}
        </div>
      ) : null}

      <div>
        <label htmlFor="parentName" className="mb-2 block text-sm font-semibold">
          Parent or Guardian Name
        </label>
        <input
          id="parentName"
          required
          value={form.parentName}
          onChange={(event) => updateField("parentName", event.target.value)}
          aria-invalid={Boolean(fieldErrors.parentName)}
          aria-describedby={fieldErrors.parentName ? "parentName-error" : undefined}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20"
        />
        {fieldErrors.parentName ? (
          <p id="parentName-error" className="mt-2 text-sm text-red-600">
            {fieldErrors.parentName}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20"
          />
          {fieldErrors.email ? (
            <p id="email-error" className="mt-2 text-sm text-red-600">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
            Phone Number
          </label>
          <input
            id="phone"
            required
            inputMode="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20"
          />
          {fieldErrors.phone ? (
            <p id="phone-error" className="mt-2 text-sm text-red-600">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="childName" className="mb-2 block text-sm font-semibold">
            Child Name
          </label>
          <input
            id="childName"
            required
            value={form.childName}
            onChange={(event) => updateField("childName", event.target.value)}
            aria-invalid={Boolean(fieldErrors.childName)}
            aria-describedby={fieldErrors.childName ? "childName-error" : undefined}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20"
          />
          {fieldErrors.childName ? (
            <p id="childName-error" className="mt-2 text-sm text-red-600">
              {fieldErrors.childName}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="childAge" className="mb-2 block text-sm font-semibold">
            Child Age
          </label>
          <select
            id="childAge"
            required
            value={form.childAge}
            onChange={(event) => updateField("childAge", event.target.value)}
            aria-invalid={Boolean(fieldErrors.childAge)}
            aria-describedby={fieldErrors.childAge ? "childAge-error" : undefined}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20"
          >
            <option value="">Select age</option>
            {Array.from({ length: 9 }, (_, i) => i + 8).map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
          {fieldErrors.childAge ? (
            <p id="childAge-error" className="mt-2 text-sm text-red-600">
              {fieldErrors.childAge}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="interests" className="mb-2 block text-sm font-semibold">
          Learning Interests
        </label>
        <input
          id="interests"
          value={form.interests}
          onChange={(event) => updateField("interests", event.target.value)}
          placeholder="AI, coding, games, digital skills, creativity..."
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20"
        />
      </div>

      <div>
        <label htmlFor="notes" className="mb-2 block text-sm font-semibold">
          Parent Notes
        </label>
        <textarea
          id="notes"
          rows={5}
          value={form.notes}
          onChange={(event) => updateField("notes", event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20"
          placeholder="Tell us anything useful about your child or your preferred schedule."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-ink px-6 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting..." : "Submit Enrollment"}
      </button>

      <p className="text-sm text-slate-500">
        Submissions will be stored in your Supabase database.
      </p>
    </form>
  );
}
