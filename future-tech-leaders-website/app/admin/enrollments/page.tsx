import { AdminLogoutButton } from "@/components/admin-logout-button";
import { PageShell } from "@/components/page-shell";
import { listEnrollments } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

export default async function AdminEnrollmentsPage() {
  const enrollments = await listEnrollments();

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              Admin
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Enrollment submissions
            </h1>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              This page reads directly from Supabase on the server and shows the
              latest parent registrations.
            </p>
          </div>
          <div className="rounded-3xl bg-white px-5 py-4 shadow-soft">
            <p className="text-sm text-slate-500">Total submissions</p>
            <p className="font-display text-3xl font-bold text-ink">
              {enrollments.length}
            </p>
            <div className="mt-4">
              <AdminLogoutButton />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {enrollments.length === 0 ? (
            <div className="rounded-[2rem] bg-cloud p-10 text-center">
              <h2 className="font-display text-3xl font-bold">
                No enrollments yet
              </h2>
              <p className="mt-4 text-slate-600">
                Submit the form once and the first record will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-soft">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-cloud text-left">
                    <tr className="text-sm uppercase tracking-[0.12em] text-slate-500">
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Parent</th>
                      <th className="px-6 py-4">Contact</th>
                      <th className="px-6 py-4">Child</th>
                      <th className="px-6 py-4">Interests</th>
                      <th className="px-6 py-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enrollments.map((enrollment) => (
                      <tr
                        key={enrollment.id}
                        className="border-t border-slate-100 align-top"
                      >
                        <td className="px-6 py-5 text-sm text-slate-600">
                          {formatDate(enrollment.created_at)}
                        </td>
                        <td className="px-6 py-5">
                          <p className="font-semibold text-ink">
                            {enrollment.parent_name}
                          </p>
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-600">
                          <p>{enrollment.email}</p>
                          <p className="mt-2">{enrollment.phone}</p>
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-600">
                          <p className="font-semibold text-ink">
                            {enrollment.child_name}
                          </p>
                          <p className="mt-2">Age {enrollment.child_age}</p>
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-600">
                          {enrollment.interests || "-"}
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-600">
                          {enrollment.notes || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
