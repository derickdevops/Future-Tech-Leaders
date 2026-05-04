import { Suspense } from "react";
import { PageShell } from "@/components/page-shell";
import { AdminLoginForm } from "@/components/admin-login-form";

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-10 lg:py-20">
        <div className="rounded-[2rem] bg-white p-8 shadow-soft md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">
            Admin Access
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold">
            Sign in to view enrollment submissions.
          </h1>
          <p className="mt-4 leading-8 text-slate-600">
            This protects the admin dashboard from public access. Configure the
            credentials in your local environment file before using it.
          </p>

          <div className="mt-8">
            <Suspense fallback={<div className="text-sm text-slate-500">Loading sign-in form...</div>}>
              <AdminLoginForm />
            </Suspense>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
