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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

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
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Parent or Guardian Name
        </label>
        <input
          value={form.parentName}
          onChange={(event) => updateField("parentName", event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold">Email Address</label>
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold">Phone Number</label>
          <input
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold">Child Name</label>
          <input
            value={form.childName}
            onChange={(event) => updateField("childName", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold">Child Age</label>
          <select
            value={form.childAge}
            onChange={(event) => updateField("childAge", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky"
          >
            <option value="">Select age</option>
            {Array.from({ length: 9 }, (_, i) => i + 8).map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">Learning Interests</label>
        <input
          value={form.interests}
          onChange={(event) => updateField("interests", event.target.value)}
          placeholder="AI, coding, games, digital skills, creativity..."
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">Parent Notes</label>
        <textarea
          rows={5}
          value={form.notes}
          onChange={(event) => updateField("notes", event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky"
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

      <p
        className={`text-sm ${
          status === "error"
            ? "text-red-600"
            : status === "success"
              ? "text-green-600"
              : "text-slate-500"
        }`}
      >
        {message || "Submissions will be stored in your Supabase database."}
      </p>
    </form>
  );
}
