import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const aboutHeroImage =
  "/images/about.jpeg";
const workshopImage =
  "/images/about2.jpeg";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">
              About the Program
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">
              A practical tech program built to help children create, not just consume.
            </h1>
            <p className="mt-6 leading-8 text-slate-600">
              Future Tech Leaders helps children ages 8 to 16 build digital
              confidence through AI, coding, cloud concepts, and guided
              project work.
            </p>
            <ul className="mt-8 space-y-3 text-slate-700">
              <li>Structured 12-month learning path</li>
              <li>Small group support and guided practice</li>
              <li>Real outcomes children can explain and present</li>
            </ul>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] shadow-lg">
            <Image
              src={aboutHeroImage}
              alt="Children learning together with laptops in a classroom"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-200">
                Core Mission
              </p>
              <p className="mt-3 text-2xl font-semibold leading-9">
                Teach children how to think, build, and present with technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-cloud p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">
                Why this program exists
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold">
                Built from real industry experience, not generic lesson plans.
              </h2>
              <ul className="mt-6 space-y-4 leading-8 text-slate-600">
                <li>Created by a DevOps engineer who works with modern systems and tools.</li>
                <li>Designed to show children how technology is built and used in the real world.</li>
                <li>Focused on helping kids become creators who can explain what they build.</li>
              </ul>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-lg">
              <Image
                src={workshopImage}
                alt="Children participating in a collaborative technology workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">
            How we teach
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold">
            Simple structure, active learning, visible progress.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Small groups",
              body: "Children get room to ask questions, participate, and stay engaged."
            },
            {
              title: "Hands-on learning",
              body: "Every phase includes guided practice instead of passive watching."
            },
            {
              title: "Guided projects",
              body: "Students build practical work they can demo, explain, and improve."
            }
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-8 text-slate-600">{item.body}</p>
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
            Limited seats available for the founding cohort. Start with a simple
            registration and reserve a place early.
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
