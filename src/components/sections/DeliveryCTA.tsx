
import { ArrowUpRight, Package, Zap } from "lucide-react";

export default function DeliveryCTA() {
  return (
    <section className="relative overflow-hidden bg-[#FF6B1A] px-5 py-24 text-[#171717] sm:px-8 lg:px-16 lg:py-28">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full border border-black/[0.09] sm:h-[560px] sm:w-[560px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-20 h-[300px] w-[300px] rounded-full border border-black/[0.09] sm:h-[420px] sm:w-[420px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/[0.12] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        {/* Main message */}
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/15 bg-black/[0.06] px-4 py-2">
            <Zap size={14} />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
              Your city. Your deliveries.
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Got somewhere
            <br />
            it needs to go?
            <br />
            <span className="text-white">We'll get it moving.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-black/70 sm:text-base">
            From important documents to everyday packages, get your local
            delivery started with Velocourier.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/book-delivery"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#11141B] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#202530]"
            >
              Book a delivery

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="services"
              className="inline-flex items-center justify-center rounded-xl border border-black/20 px-6 py-4 text-sm font-semibold text-[#171717] transition-colors hover:bg-black/[0.06]"
            >
              Explore our services
            </a>
          </div>
        </div>

        {/* Visual element */}
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:justify-end">
          <div className="relative flex aspect-square w-full max-w-[340px] items-center justify-center rounded-full border border-black/15 sm:max-w-[390px]">
            <div className="absolute inset-5 rounded-full border border-dashed border-black/20" />

            <div className="absolute inset-12 rounded-full border border-black/10" />

            <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white/20 bg-[#11141B] text-[#FF6B1A] shadow-2xl shadow-black/20 transition-transform duration-500 hover:rotate-[-6deg] sm:h-44 sm:w-44">
              <Package size={76} strokeWidth={1.2} />

              <div className="absolute -right-5 -top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#11141B] shadow-lg">
                <Zap size={23} fill="currentColor" />
              </div>
            </div>

            <div className="absolute bottom-7 left-0 rounded-xl border border-black/10 bg-white/90 px-4 py-3 shadow-lg sm:bottom-12 sm:-left-3">
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/50">
                Every delivery starts
              </p>

              <p className="mt-1 text-sm font-bold">With one request.</p>
            </div>

            <div className="absolute right-0 top-8 rounded-xl bg-[#11141B] px-4 py-3 text-white shadow-lg sm:-right-2 sm:top-12">
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/50">
                Made for
              </p>

              <p className="mt-1 text-sm font-bold">Your everyday.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
