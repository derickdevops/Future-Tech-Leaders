import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <p className="font-display text-2xl font-semibold text-blue-300">
            Future Tech Leaders
          </p>
          <p className="mt-4 max-w-md text-slate-300">
            A structured learning experience helping children build digital
            confidence, AI literacy, coding ability, and future-ready thinking.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-slate-300">
            <Link href="/about">About</Link>
            <Link href="/program">Program</Link>
            <Link href="/parents">For Parents</Link>
            <Link href="/showcase">Showcase</Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Contact</p>
          <div className="mt-4 flex flex-col gap-3 text-slate-300">
            <a href="mailto:sopjiod@devopseasylearning.com">
              sopjiod@devopseasylearning.com
            </a>
            <a
              href="https://wa.me/237690055172?text=Hello%20I%20am%20interested%20in%20the%20program"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-green-400"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white/10 px-1 text-[10px] font-bold"
              >
                WA
              </span>
              Chat on WhatsApp
            </a>
            <Link href="/enroll" className="text-white">
              Enroll your child
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
