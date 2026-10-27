
"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, MapPin, Radio } from "lucide-react";

const DeliveryScene = dynamic(() => import("./DeliveryScene"), {
  ssr: false,
  loading: () => (
    <div className="grid h-[380px] place-items-center text-sm text-zinc-500 sm:h-[480px] lg:h-[620px]">
      Preparing the delivery scene...
    </div>
  ),
});

const benefits = [
  { value: "Local", label: "On-demand dispatch" },
  { value: "Live", label: "Delivery updates" },
  { value: "Direct", label: "Door-to-door service" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#090A0D] text-white">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 size-[420px] rounded-full bg-[#FF6B1A]/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 -z-10 size-[480px] rounded-full bg-orange-500/[0.07] blur-[150px]"
      />

      <div className="mx-auto grid min-h-[calc(100svh-76px)] w-full max-w-[1280px] items-center gap-2 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-0 lg:px-10 lg:py-10">
        {/* Hero copy */}
        <div className="relative z-10 max-w-[600px]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.07] px-3.5 py-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-orange-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-[#FF6B1A]" />
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-200 sm:text-xs">
              Local delivery, reimagined
            </span>
          </div>

          <h1 className="max-w-[650px] text-[clamp(3rem,7vw,5.8rem)] font-black leading-[0.98] tracking-[-0.075em]">
            Your delivery.
            <br />
            <span className="text-[#FF6B1A]">Your time.</span>
            <br />
            <span className="text-zinc-100">Our mission.</span>
          </h1>

          <p className="mt-7 max-w-[460px] text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            From pickup to doorstep, get your packages moving with dependable
            local dispatch and delivery updates that keep you in the loop.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <Link
              href="/book-delivery"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#FF6B1A] px-6 text-sm font-bold text-[#17100B] transition duration-200 hover:-translate-y-0.5 hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              Book a delivery
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/tracking"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              Track a package
              <MapPin size={17} aria-hidden="true" />
            </Link>
          </div>

          {/* Benefits */}
          <div className="mt-12 grid grid-cols-3 gap-3 border-t border-white/[0.09] pt-6 sm:gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="min-w-0">
                <p className="text-base font-bold text-white sm:text-lg">
                  {benefit.value}
                </p>
                <p className="mt-1 max-w-[130px] text-xs leading-5 text-zinc-500 sm:text-sm">
                  {benefit.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3D visual */}
        <div className="relative mx-auto mt-2 w-full min-w-0 max-w-[680px] lg:mt-0 lg:max-w-none">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 size-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/[0.08]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 size-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
          />

          <div className="relative">
            <DeliveryScene />
          </div>

          {/* Floating delivery status */}
          <div className="absolute left-0 top-[14%] flex items-center gap-3 rounded-xl border border-white/10 bg-[#111318]/90 p-3.5 shadow-2xl shadow-black/30 backdrop-blur-md sm:left-2 sm:p-4 lg:left-0">
            <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-orange-500/10 text-[#FF6B1A]">
              <Radio size={20} aria-hidden="true" />
            </div>

            <div>
              <p className="text-xs font-semibold text-white sm:text-sm">
                Your route starts here
              </p>
              <p className="mt-1 text-[10px] text-zinc-500 sm:text-xs">
                Every delivery, one journey
              </p>
            </div>
          </div>

          <div className="absolute bottom-[12%] right-0 flex items-center gap-2 rounded-full border border-white/10 bg-[#111318]/90 px-3.5 py-2.5 text-xs text-zinc-300 shadow-xl backdrop-blur-md sm:right-2 sm:px-4">
            <span className="size-2 rounded-full bg-[#FF6B1A]" />
            Built for the journey
            <ArrowDownRight size={15} className="text-[#FF6B1A]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
