
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  Package,
  PackageCheck,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";
import Footer from "@/components/layout/Footer";

const services = [
  {
    number: "01",
    name: "Express delivery",
    tagline: "When every minute matters.",
    description:
      "For urgent documents, parcels, and everyday essentials that need to get there quickly.",
    icon: Zap,
    accent: "#FF6B1A",
    features: [
      "Priority dispatch",
      "Direct local delivery",
      "Delivery status updates",
    ],
    badge: "TIME-SENSITIVE",
  },
  {
    number: "02",
    name: "Standard delivery",
    tagline: "Reliable delivery, made simple.",
    description:
      "A practical option for everyday packages when you need a dependable way to send something across town.",
    icon: PackageCheck,
    accent: "#8B9EFF",
    features: [
      "Convenient booking",
      "Local pickup and drop-off",
      "Trackable delivery",
    ],
    badge: "EVERYDAY ESSENTIALS",
  },
  {
    number: "03",
    name: "Business delivery",
    tagline: "Built for businesses on the move.",
    description:
      "Delivery support for online vendors, growing businesses, and teams managing multiple customer orders.",
    icon: Truck,
    accent: "#59C9A5",
    features: [
      "Support for multiple orders",
      "Customer delivery coordination",
      "Business-focused workflows",
    ],
    badge: "FOR BUSINESSES",
  },
];

const benefits = [
  {
    icon: MapPin,
    title: "Local delivery",
    description:
      "A straightforward way to move packages between pickup and drop-off locations.",
  },
  {
    icon: Clock3,
    title: "Convenient booking",
    description:
      "Provide your delivery details and arrange your shipment in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Delivery visibility",
    description:
      "Designed to make delivery progress and shipment status easier to follow.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F1EC] text-[#171717]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#11141B] px-5 pb-20 pt-16 text-white sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#FF6B1A]/15 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-52 left-1/4 h-[380px] w-[380px] rounded-full bg-orange-500/[0.06] blur-[100px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wide text-white/65">
            <span className="h-2 w-2 rounded-full bg-[#FF6B1A]" />
            DELIVERY SOLUTIONS
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
                The right delivery
                <br />
                <span className="text-[#FF6B1A]">
                  for every journey.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                From a single package to your business orders, Velocourier is
                designed to make local delivery simpler, more convenient, and
                easier to follow.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/login"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF6B1A] px-5 py-3 text-sm font-semibold text-[#17100C] transition hover:bg-[#FF8240]"
                >
                  Send a package
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/tracking"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
                >
                  Track a delivery
                </Link>
              </div>
            </div>

            {/* Delivery overview panel */}
            <div className="relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="rounded-3xl border border-white/10 bg-[#191D26] p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                      One platform
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">
                      Every delivery.
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF6B1A]/10 text-[#FF6B1A]">
                    <Package size={24} />
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    "Tell us what you're sending",
                    "Provide pickup and drop-off details",
                    "Follow your delivery progress",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF6B1A]/10 text-sm font-semibold text-[#FF6B1A]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-5 text-white/75">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs leading-5 text-white/40">
                  <ShieldCheck size={15} className="shrink-0 text-[#FF6B1A]" />
                  Clear steps from booking to delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B1A]">
                OUR SERVICES
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Moving things forward,
                <br className="hidden sm:block" /> one delivery at a time.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#171717]/55 sm:text-base">
              Choose the delivery option that best fits what you&apos;re sending
              and who you&apos;re sending it to.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.07] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-black/15 hover:shadow-[0_24px_60px_rgba(23,23,23,0.08)] sm:p-7"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-[0.08] blur-3xl transition-opacity group-hover:opacity-20"
                    style={{ backgroundColor: service.accent }}
                  />

                  <div className="relative flex items-center justify-between gap-3">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: `${service.accent}18`,
                        color: service.accent,
                      }}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-medium text-black/25">
                      {service.number}
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <span
                      className="text-[10px] font-bold tracking-[0.16em]"
                      style={{ color: service.accent }}
                    >
                      {service.badge}
                    </span>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                      {service.name}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#171717]/70">
                      {service.tagline}
                    </p>

                    <p className="mt-4 min-h-[72px] text-sm leading-6 text-[#171717]/55">
                      {service.description}
                    </p>
                  </div>

                  <div className="my-6 h-px bg-black/[0.07]" />

                  <ul className="mb-8 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-[#171717]/70"
                      >
                        <Check
                          size={17}
                          className="mt-0.5 shrink-0"
                          style={{ color: service.accent }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link
                      href="/login"
                      className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-black/10 px-4 py-3 text-sm font-semibold transition group-hover:border-[#FF6B1A]/40 group-hover:bg-[#FF6B1A]/[0.06]"
                    >
                      Get started
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-5 text-xs leading-5 text-[#171717]/45">
            Service availability, delivery times, and pricing will be confirmed
            through the booking system as the platform is developed.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#EAE5DC] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B1A]">
              THE VELOCOURIER EXPERIENCE
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              More than getting
              <br className="hidden sm:block" /> from A to B.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#171717]/60 sm:text-base">
              A delivery platform should give you more control over the process,
              not more things to worry about.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-black/[0.06] bg-white/70 p-6 sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6B1A]/10 text-[#FF6B1A]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#171717]/55">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#FF6B1A] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-36 h-96 w-96 rounded-full border-[60px] border-black/[0.05]"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/55">
              READY WHEN YOU ARE
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#17100C] sm:text-4xl lg:text-5xl">
              Have something to send?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#17100C]/70 sm:text-base">
              Get started with Velocourier. Create an account to prepare for
              your first delivery booking.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/sign-in"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#303030]"
            >
              Start a delivery
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/track"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-black/15 px-5 py-3 text-sm font-semibold text-[#17100C] transition hover:bg-black/[0.05]"
            >
              Track a package
            </Link>
          </div>
        </div>
      </section>

      
      <Footer />
    </main>
  );
}
