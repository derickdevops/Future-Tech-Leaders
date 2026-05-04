import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { phases } from "@/lib/site-data";

const curriculumImage =
  "/images/program.jpeg";

const buildExamples = [
  {
    title: "Simple game",
    body: "Children learn logic, loops, and debugging through a playable mini project."
  },
  {
    title: "Mini website",
    body: "Students structure pages, add content, and understand how websites come together."
  },
  {
    title: "AI chatbot",
    body: "Learners explore prompting and build a simple assistant experience with guidance."
  },
  {
    title: "Presentation project",
    body: "Each child explains a final project clearly and shares what they learned."
  }
];

const phaseOutcomes = [
  "Use a computer confidently and navigate files without help.",
  "Apply safe internet habits and use digital tools with purpose.",
  "Break problems into clear steps and think with logic.",
  "Explain what different tech careers and systems actually do.",
  "Use AI tools carefully for learning and creativity.",
  "Understand how bigger apps are structured behind the scenes.",
  "Build something interactive with code and creative thinking.",
  "Present a finished project with confidence and clarity."
];

export default function ProgramPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              Program Structure
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">
              A 12-month path that turns curiosity into practical skill.
            </h1>
            <p className="mt-6 leading-8 text-slate-600">
              Children start with strong digital foundations, then move into AI,
              coding, cloud concepts, and project presentation in a sequence
              that is easy to follow and hard to forget.
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-lg">
            <Image
              src={curriculumImage}
              alt="Students learning together with laptops and notebooks"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="font-display text-3xl font-bold">Concrete progress, month by month</p>
              <p className="mt-2 max-w-md text-slate-100">
                Each phase ends with a skill children can use, show, or explain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">
              What your child will actually build
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold">
              Real outputs make the learning easier to see and easier to trust.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {buildExamples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-cloud p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sun">
            12-Month Journey
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold">
            Every phase ends with a practical result.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {phases.map((phase, index) => (
            <article
              key={phase.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                {phase.months}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold">
                {phase.title}
              </h3>
              <p className="mt-4 leading-8 text-slate-600">{phase.body}</p>
              <div className="mt-6 rounded-xl bg-cloud p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Practical outcome
                </p>
                <p className="mt-2 text-slate-700">{phaseOutcomes[index]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <h2 className="font-display text-4xl font-bold">
            Secure your child&apos;s future today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Limited seats available for the founding cohort. Register now and
            reserve a place before sessions fill up.
          </p>
          <Link
            href="/enroll"
            className="mt-8 inline-flex rounded-2xl bg-[#2563eb] px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl"
          >
            Secure Your Child&apos;s Spot
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
