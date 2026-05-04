import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const showcaseImages = [
  "/images/showcase1.jpg",
  "/images/showcase2.jpg",
  "/images/showcase3.jpg"
];

const projects = [
  {
    title: "Mini Game Project",
    body: "Children create a simple interactive game and learn logic, loops, testing, and debugging."
  },
  {
    title: "AI Assistant",
    body: "Students build a guided AI helper experience and learn prompting, structure, and responsible use."
  },
  {
    title: "Personal Portfolio Website",
    body: "Learners organize content, create pages, and present a small website that shows what they built."
  }
];

export default function ShowcasePage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sun">
            Showcase
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">
            Example projects students will create
          </h1>
          <p className="mt-6 leading-8 text-slate-600">
            This program is designed around project work. Even early learners
            should finish with something they can open, explain, and improve.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3 lg:px-10">
          {projects.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56">
                <Image
                  src={showcaseImages[index]}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-semibold">
                  {item.title}
                </h2>
                <p className="mt-4 leading-8 text-slate-600">{item.body}</p>
                <div className="mt-6 rounded-xl bg-cloud p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                    What the child learns
                  </p>
                  <p className="mt-2 text-slate-700">
                    {index === 0 &&
                      "Creative thinking, game logic, user interaction, and fixing mistakes."}
                    {index === 1 &&
                      "Prompt design, AI awareness, communication, and practical experimentation."}
                    {index === 2 &&
                      "Structure, digital presentation, content organization, and confidence."}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="rounded-2xl border border-slate-200 bg-cloud p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
              Why this matters
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold">
              Project work makes the learning visible.
            </h2>
            <ul className="mt-6 space-y-3 leading-8 text-slate-600">
              <li>Parents can see what children are building, not just hear about it.</li>
              <li>Children stay engaged when they create something that feels real.</li>
              <li>Presentation and reflection become part of the learning, not an afterthought.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <h2 className="font-display text-4xl font-bold">
            Secure your child&apos;s future today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Limited seats available for the founding cohort. Register now and
            reserve a place for the first group.
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
