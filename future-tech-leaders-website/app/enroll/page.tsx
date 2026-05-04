import { PageShell } from "@/components/page-shell";
import { EnrollmentForm } from "@/components/enrollment-form";

export default function EnrollPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <section>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">
              Enrollment
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Register your child for the Future Tech Leaders Program.
            </h1>
            <p className="mt-5 leading-8 text-slate-600">
              Complete this form to express interest. Submissions are designed
              to go into Supabase through the server API route.
            </p>

            <div className="mt-8 rounded-3xl bg-white p-6 shadow-soft">
              <h2 className="font-display text-2xl font-semibold">
                Program Snapshot
              </h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>Ages 8 to 16</li>
                <li>12-month structured learning journey</li>
                <li>Digital skills, AI, coding, and creativity</li>
                <li>Hands-on projects and Demo Day</li>
                <li>Free enrollment with limited slots</li>
              </ul>
            </div>
          </section>

          <section className="rounded-[2rem] bg-white p-8 shadow-soft">
            <EnrollmentForm />
          </section>
        </div>
      </div>
    </PageShell>
  );
}
