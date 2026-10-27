
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";


import Footer from "@/components/layout/Footer";

const values = [
  {
    number: "01",
    icon: Zap,
    title: "Speed with purpose",
    description:
      "We make local delivery simpler, helping people and businesses move packages without unnecessary delays.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Trust at every step",
    description:
      "From booking to delivery, we want every customer to feel confident about where their package is going.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Care for every package",
    description:
      "Every delivery matters. We are building a service around careful handling, clear communication and accountability.",
  },
];

export default function AboutPage() {
  return (
    <>
    

      <main className="overflow-hidden bg-[#F4F1EC] text-[#171717]">
        {/* Hero */}
        <section className="relative px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-16">
          <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#FF6B1A]/10 blur-[100px]" />

          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
                <span className="h-2 w-2 rounded-full bg-[#FF6B1A]" />
                Our story
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Moving your world,
                <span className="text-[#FF6B1A]"> one delivery</span> at a time.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-black/60 sm:text-lg">
                Velocourier is being built to make local delivery feel less
                complicated. We connect people and businesses with a simpler
                way to send packages from pickup to destination.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#171717] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#FF6B1A] hover:text-[#171717]"
                >
                  Talk to our team
                  <ArrowUpRight size={17} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-4 text-sm font-semibold transition hover:border-[#FF6B1A]"
                >
                  Explore services
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Brand illustration */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative aspect-[4/4.2] overflow-hidden rounded-[2rem] bg-[#171A21] p-6 text-white sm:p-9">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
                <div className="absolute -right-5 -top-5 h-44 w-44 rounded-full border border-white/10" />
                <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-[#FF6B1A]/20 blur-[75px]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold tracking-wide">
                      VELOCOURIER
                    </span>
                    <span className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/60">
                      Local delivery
                    </span>
                  </div>

                  <div className="relative flex flex-1 items-center justify-center">
                    <div className="absolute h-56 w-56 rounded-full border border-dashed border-white/20 sm:h-64 sm:w-64" />
                    <div className="absolute h-40 w-40 rounded-full border border-white/10 sm:h-48 sm:w-48" />

                    <div className="relative flex h-36 w-36 rotate-[-7deg] items-center justify-center rounded-[2rem] bg-[#FF6B1A] shadow-[0_25px_80px_rgba(255,107,26,0.25)] sm:h-44 sm:w-44">
                      <Truck size={82} strokeWidth={1.2} />
                    </div>

                    <div className="absolute right-2 top-10 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-3 backdrop-blur-md sm:right-0">
                      <MapPin size={17} className="text-[#FF6B1A]" />
                      <span className="text-xs font-medium">
                        Pickup confirmed
                      </span>
                    </div>

                    <div className="absolute bottom-10 left-0 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-3 backdrop-blur-md">
                      <PackageCheck
                        size={17}
                        className="text-[#FF6B1A]"
                      />
                      <span className="text-xs font-medium">
                        Delivery in motion
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      Every package has a destination.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/50">
                      We are building a better way to get it there.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-xl sm:-left-6 sm:px-5">
                <p className="text-xs text-black/50">Our focus</p>
                <p className="mt-1 text-sm font-semibold">
                  Reliable local delivery
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-[#171A21] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6B1A]">
                Why we exist
              </p>
              <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Delivery should feel straightforward.
              </h2>
            </div>

            <div className="lg:pl-10">
              <p className="text-lg leading-9 text-white/65 sm:text-xl sm:leading-10">
                Sending a package should not mean chasing updates, dealing
                with confusing processes or wondering what happens next.
                Velocourier aims to bring booking, delivery coordination and
                useful delivery updates into one convenient experience.
              </p>

              <div className="mt-9 h-px bg-white/10" />

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-[#FF6B1A]">
                    Our mission
                  </p>
                  <p className="mt-3 leading-7 text-white/60">
                    Make local deliveries easier to book, manage and follow.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#FF6B1A]">
                    Our direction
                  </p>
                  <p className="mt-3 leading-7 text-white/60">
                    Build a dependable delivery platform for individuals,
                    growing businesses and delivery partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6B1A]">
                What guides us
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                The standard we want every delivery to meet.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.number}
                    className="group rounded-[1.75rem] border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FF6B1A]/50 hover:shadow-xl sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF0E8] text-[#FF6B1A]">
                        <Icon size={22} />
                      </div>
                      <span className="text-sm font-medium text-black/25">
                        {value.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-semibold">
                      {value.title}
                    </h3>
                    <p className="mt-4 leading-7 text-black/55">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] bg-[#FF6B1A] p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-black/60">
                Have a question or an idea?
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Let’s get the conversation moving.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#171717] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#171717]"
            >
              Contact Velocourier
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
