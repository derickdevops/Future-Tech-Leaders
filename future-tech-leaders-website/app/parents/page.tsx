import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { SectionCta } from "@/components/section-cta";

const parentsHeroImage =
  "/images/for-parents.jpeg";

export default function ParentsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">
              For Parents
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">
              Structured sessions, guided learning, and results you can actually see.
            </h1>
            <p className="mt-6 leading-8 text-slate-600">
              This program is designed for parents who want more than passive
              screen time. Children learn with direction, interaction, and clear
              outcomes they can show at home.
            </p>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] shadow-lg">
            <Image
              src={parentsHeroImage}
              alt="Children learning together with support and guidance"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="font-display text-3xl font-bold">What parents are paying attention to</p>
              <ul className="mt-4 space-y-2 text-slate-100">
                <li>Participation, not passive watching</li>
                <li>Guidance, structure, and accountability</li>
                <li>Visible progress children can explain</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-cloud p-8 shadow-md">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">
                How sessions work
              </p>
              <ul className="mt-5 space-y-3 leading-8 text-slate-600">
                <li>Structured class sessions with clear goals</li>
                <li>Live guidance and active participation</li>
                <li>Time for questions, practice, and explanation</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">
                What parents can expect
              </p>
              <ul className="mt-5 space-y-3 leading-8 text-slate-600">
                <li>Progress updates you can follow</li>
                <li>Demo Day moments where children present work</li>
                <li>Visible results in confidence, language, and skill</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sun">
                Why this is different
              </p>
              <ul className="mt-5 space-y-3 leading-8 text-slate-600">
                <li>Children do not just watch; they build and explain.</li>
                <li>Technology is taught through interaction, not overload.</li>
                <li>Learning stays practical, child-friendly, and measurable.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
            Parent confidence
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold">
            What makes this easier to trust
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Children are guided through real tasks, not left alone with content.",
            "Sessions are designed to help children stay engaged and speak up.",
            "Project work makes progress visible instead of vague.",
            "The program balances discipline, creativity, and modern tech exposure."
          ].map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="leading-8 text-slate-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionCta body="Limited seats available for the founding cohort. Register early if you want your child in the first intake." />
    </PageShell>
  );
}
