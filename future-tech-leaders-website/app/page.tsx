"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { phases, trustPoints } from "@/lib/site-data";

const differentiators = [
  {
    icon: "💻",
    title: "Real-world tech exposure",
    body: "Learn how modern apps and systems actually work."
  },
  {
    icon: "🤖",
    title: "AI + coding + problem-solving",
    body: "Combine creativity, logic, and real tools used today."
  },
  {
    icon: "🛠️",
    title: "Built by an industry DevOps engineer",
    body: "Guided by real-world experience, not generic teaching."
  },
  {
    icon: "🚀",
    title: "Project-based learning",
    body: "Build real projects instead of just watching lessons."
  }
];

const outcomes = [
  {
    icon: "🧩",
    title: "Build simple apps and games",
    body: "Children move from digital basics into guided project creation."
  },
  {
    icon: "✨",
    title: "Understand and use AI tools",
    body: "They learn how to use modern AI safely, intelligently, and creatively."
  },
  {
    icon: "🧠",
    title: "Think critically and solve problems",
    body: "Logic, debugging, and structured thinking become part of how they learn."
  },
  {
    icon: "🎤",
    title: "Present ideas confidently",
    body: "Students explain projects clearly and build public speaking confidence."
  }
];

const phaseIcons = ["01", "02", "03", "04", "05", "06", "07", "08"];
const parentIcons = ["🌟", "✅", "👥", "🧠", "🏅"];

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <PageShell>
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-kids.jpg')" }}
      >
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.75),rgba(0,0,0,0.4))]" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-start px-6 py-24 md:px-12 lg:px-20">
          <div className="max-w-3xl animate-[fadeUp_.8s_ease-out]" data-reveal>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-100 backdrop-blur">
              Ages 8-16 | 12-Month Program | Small Group Learning
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] text-white md:text-7xl">
              Teach children to build
              <br />
              with technology.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-white/90 md:text-2xl">
              A structured 12-month program in AI, coding, and cloud.
            </p>
            <div className="mt-10">
              <Link
                href="/enroll"
                className="inline-flex rounded-2xl bg-[#2563eb] px-8 py-4 text-base font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-900/30"
              >
                Secure Your Child&apos;s Spot
              </Link>
            </div>
            <div className="mt-6 space-y-2 text-sm font-medium text-white/80">
              <p>Founding cohort now open</p>
              <p>Small group learning</p>
              <p>12-month structured program</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
            Why It Stands Out
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-slate-950">
            Why This Program Stands Out
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Designed to give your child real-world skills, not just theory.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <article
              key={item.title}
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                {item.icon}
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Outcomes
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold">
              What your child will achieve
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {outcomes.map((outcome, index) => (
              <article
                key={outcome.title}
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/10 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563eb] text-2xl text-white shadow-lg shadow-blue-900/30">
                  {outcome.icon}
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">
                  {outcome.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{outcome.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
              12-Month Learning Journey
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-950 md:text-5xl">
              A guided progression from Month 1 to Month 12.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {phases.map((phase, index) => (
              <article
                key={phase.title}
                data-reveal
                style={{ transitionDelay: `${index * 60}ms` }}
                className="group relative rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="absolute left-6 top-0 h-8 w-px -translate-y-full bg-gradient-to-b from-blue-200 to-transparent first:hidden" />
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 font-display text-sm font-bold text-[#2563eb]">
                    {phaseIcons[index]}
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {phase.months}
                  </p>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-slate-950">
                  {phase.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{phase.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
              For Parents
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-950">
              Clear outcomes, guided learning, and visible growth.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              The program helps children use technology responsibly, build
              confidence, and develop skills that translate into school,
              creativity, and future career readiness.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((point, index) => (
              <article
                key={point}
                data-reveal
                style={{ transitionDelay: `${index * 60}ms` }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                  {parentIcons[index]}
                </div>
                <p className="mt-4 font-semibold text-slate-950">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div
          data-reveal
          className="rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-md"
        >
          <h2 className="font-display text-3xl font-bold text-slate-950">
            Have questions?
          </h2>
          <div className="mt-6 space-y-3 text-slate-600">
            <p>sopjiod@devopseasylearning.com</p>
            <a
              href="https://wa.me/237690055172?text=Hello%20I%20am%20interested%20in%20the%20program"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[#2563eb] transition duration-300 hover:text-green-400"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-sky/10 px-1 text-[10px] font-bold text-sky"
              >
                WA
              </span>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10" data-reveal>
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,_rgba(37,99,235,0.22),_rgba(15,23,42,0.96))] p-10 shadow-2xl shadow-blue-950/30 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Enrollment
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-5xl">
              Secure Your Child&apos;s Future Today
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Limited seats available for the founding cohort.
            </p>
            <div className="mt-8">
              <Link
                href="/enroll"
                className="inline-flex rounded-2xl bg-[#2563eb] px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Secure Your Child&apos;s Spot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
