
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Tracking", href: "/tracking" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const linkClasses = (href: string) =>
    `relative py-2 text-sm transition-colors duration-200 hover:text-orange-400 ${
      pathname === href
        ? "text-white after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-orange-500"
        : "text-zinc-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#090A0D]/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[76px] w-full max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10"
      >
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Velocourier home"
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="grid size-9 place-items-center rounded-[10px] bg-[#FF6B1A] text-xl font-black italic text-black">
            V
          </span>

          <span className="text-[19px] font-extrabold tracking-[-1px] text-white sm:text-[21px]">
            velo<span className="text-[#FF6B1A]">courier</span>
            <span className="text-[#FF6B1A]">.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClasses(item.href)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-5 md:flex">
          <Link
            href="/login"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Sign in
          </Link>

          <Link
            href="/book-delivery"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#FF6B1A] px-4 text-sm font-bold text-[#17100B] transition hover:-translate-y-0.5 hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
          >
            Send a package
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white transition hover:border-orange-500/50 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400 md:hidden"
        >
          {menuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation backdrop"
            onClick={closeMenu}
            className="fixed inset-0 z-40 cursor-default bg-black/60 md:hidden"
          />

          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-76px)] overflow-y-auto border-b border-white/10 bg-[#0C0D11] px-5 pb-6 pt-3 shadow-2xl md:hidden sm:px-8"
          >
            <div className="flex flex-col">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex min-h-14 items-center justify-between border-b border-white/[0.07] py-3 text-sm transition-colors hover:text-orange-400 ${
                      isActive ? "text-orange-400" : "text-zinc-300"
                    }`}
                  >
                    {item.label}
                    <ArrowUpRight
                      size={17}
                      className={isActive ? "text-orange-400" : "text-zinc-600"}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 grid gap-3">
              <Link
                href="/login"
                onClick={closeMenu}
                className="flex min-h-12 items-center justify-center rounded-lg border border-white/10 text-sm font-medium text-white transition hover:bg-white/[0.05]"
              >
                Sign in
              </Link>

              <Link
                href="/book-delivery"
                onClick={closeMenu}
                className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#FF6B1A] px-4 text-sm font-bold text-[#17100B] transition hover:bg-orange-400"
              >
                Send a package
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <p className="mt-5 text-center text-xs leading-5 text-zinc-500">
              Moving your world, one delivery at a time.
            </p>
          </div>
        </>
      )}
    </header>
  );
}
