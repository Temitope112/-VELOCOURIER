
import {
  ArrowRight,
  MapPin,
  Bike,
  PackageCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Book your delivery",
    description:
      "Enter your pickup location and destination, add your package details, and request a delivery in a few simple steps.",
    label: "YOU SET THE ROUTE",
  },
  {
    number: "02",
    icon: Bike,
    title: "Get matched with a rider",
    description:
      "Your delivery request can be assigned to an available rider who can handle the trip.",
    label: "WE HANDLE THE DISPATCH",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Track it to the destination",
    description:
      "Follow delivery status updates and know when your package has reached its destination.",
    label: "STAY IN THE LOOP",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#11141B] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#FF6B1A]/[0.08] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#FF6B1A]" />

            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF8A4C]">
              Simple by design
            </span>

            <span className="h-px w-8 bg-[#FF6B1A]" />
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            From pickup to delivery.
            <span className="mt-2 block text-[#FF6B1A]">
              Without the guesswork.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            Getting something across town shouldn't be complicated. Here's how
            Velocourier makes local delivery easier.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-7">
          {/* Connecting line on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[16.67%] right-[16.67%] top-8 hidden border-t border-dashed border-white/15 md:block"
          />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article key={step.number} className="relative">
                {/* Step icon */}
                <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FF6B1A]/30 bg-[#191D26] text-[#FF8A4C] shadow-[0_0_35px_rgba(255,107,26,0.08)]">
                  <Icon size={26} strokeWidth={1.6} />

                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#FF6B1A] text-[10px] font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Step content */}
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
                    {step.description}
                  </p>

                  <p className="mt-7 text-[10px] font-semibold tracking-[0.16em] text-[#FF8A4C]">
                    {step.label}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.035] p-7 sm:p-9 md:flex-row lg:mt-20">
          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              Ready to send something?
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/50">
              Your next local delivery starts here.
            </p>
          </div>

          <a
            href="/book-delivery"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#FF6B1A] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#E85D10] sm:w-auto"
          >
            Book a delivery

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
