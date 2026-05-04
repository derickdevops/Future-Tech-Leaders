import Link from "next/link";

type SectionCtaProps = {
  title?: string;
  body?: string;
  href?: string;
  buttonLabel?: string;
};

export function SectionCta({
  title = "Secure your child's future today",
  body = "Limited seats available for the founding cohort.",
  href = "/enroll",
  buttonLabel = "Secure Your Child's Spot"
}: SectionCtaProps) {
  return (
    <section className="bg-ink py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl font-bold">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">{body}</p>
        <Link
          href={href}
          className="mt-8 inline-flex rounded-2xl bg-[#2563eb] px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
