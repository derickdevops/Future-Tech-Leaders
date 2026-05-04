"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header
      className={`sticky top-4 z-50 rounded-2xl px-5 py-3 transition duration-300 ${
        scrolled
          ? "border border-slate-200/70 bg-white/80 shadow-xl backdrop-blur"
          : "border border-transparent bg-white/55 backdrop-blur"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,_#2563eb,_#1d4ed8)] text-white shadow-lg">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v4" />
              <path d="M5.6 7.2l2.8 2.1" />
              <path d="M18.4 7.2l-2.8 2.1" />
              <path d="M4 13a8 8 0 1 0 16 0Z" />
              <path d="M9.5 13.5 11 15l3.5-3.5" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold text-slate-950 sm:text-xl">
            Future Tech Leaders
          </span>
        </Link>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <path d="M6 6 18 18" />
                <path d="M18 6 6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex gap-6 text-sm font-medium text-slate-700">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition duration-200 hover:text-[#2563eb]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/enroll"
            className="rounded-xl bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg"
          >
            Enroll Now
          </Link>
        </div>
      </div>

      <div
        id="site-navigation"
        className={`${menuOpen ? "mt-4 grid" : "hidden"} gap-3 border-t border-slate-200/70 pt-4 md:hidden`}
      >
        <nav className="grid gap-2 text-sm font-medium text-slate-700">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-3 transition hover:bg-white/70 hover:text-[#2563eb]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/enroll"
          onClick={() => setMenuOpen(false)}
          className="inline-flex items-center justify-center rounded-xl bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500 hover:shadow-lg"
        >
          Enroll Now
        </Link>
      </div>
    </header>
  );
}
