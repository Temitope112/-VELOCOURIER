
import {
  ArrowUpRight,
  Clock3,
  MapPinned,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: PackageCheck,
    title: "On-demand delivery",
    description:
      "Send documents, personal items, and everyday essentials across your city without the hassle.",
    tag: "QUICK DISPATCH",
  },
  {
    number: "02",
    icon: MapPinned,
    title: "Real-time tracking",
    description:
      "Follow your delivery journey and stay informed as your package moves from pickup to destination.",
    tag: "LIVE UPDATES",
  },
  {
    number: "03",
    icon: Clock3,
    title: "Scheduled pickups",
    description:
      "Choose a convenient pickup time and plan deliveries around your schedule.",
    tag: "YOUR TIME, YOUR WAY",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Reliable handling",
    description:
      "Keep delivery details organized and get clear status updates throughout the delivery process.",
    tag: "PEACE OF MIND",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F4F1EC] px-5 py-24 text-[#171717] sm:px-8 lg:px-16 lg:py-32"
    >
      {/* Decorative orange glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#FF6B1A]/[0.10] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FF6B1A]" />

              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E85D10]">
                What we deliver
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Delivery that moves
              <span className="text-[#FF6B1A]"> with you.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
              From everyday errands to important packages, Velocourier helps
              you arrange local deliveries with less stress and more visibility.
            </p>
          </div>

          <a
            href="#how-it-works"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-black/75 transition-colors hover:text-[#E85D10]"
          >
            See how it works

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B1A]/50 hover:bg-white sm:p-7"
              >
                {/* Icon and number */}
                <div className="mb-10 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF6B1A]/20 bg-[#FF6B1A]/10 text-[#E85D10] transition-colors group-hover:bg-[#FF6B1A] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <span className="font-mono text-xs text-black/30">
                    {service.number}
                  </span>
                </div>

                {/* Service details */}
                <h3 className="text-lg font-semibold tracking-tight text-[#171717]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/60">
                  {service.description}
                </p>

                {/* Card footer */}
                <div className="mt-auto flex items-center justify-between pt-7">
                  <span className="text-[9px] font-semibold tracking-[0.16em] text-black/45">
                    {service.tag}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-black/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF6B1A]"
                  />
                </div>

                {/* Orange hover accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#FF6B1A] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
