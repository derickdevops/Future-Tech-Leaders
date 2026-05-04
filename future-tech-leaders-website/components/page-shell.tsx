import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-cloud text-ink">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <SiteHeader />
      </div>
      {children}
      <SiteFooter />
    </main>
  );
}
