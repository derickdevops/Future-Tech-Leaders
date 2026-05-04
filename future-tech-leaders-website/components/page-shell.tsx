import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-cloud text-ink">
      <a
        href="#page-content"
        className="sr-only absolute left-4 top-4 z-[60] rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white focus:not-sr-only"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <SiteHeader />
      </div>
      <div id="page-content">{children}</div>
      <SiteFooter />
    </main>
  );
}
