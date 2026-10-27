
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  Package,
  PackageCheck,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Footer from "@/components/layout/Footer";

const deliveryStages = [
  {
    title: "Package booked",
    description: "Your delivery request has been created.",
    icon: Package,
  },
  {
    title: "Rider assigned",
    description: "A rider is assigned to collect your package.",
    icon: Truck,
  },
  {
    title: "On the way",
    description: "Your package is travelling to its destination.",
    icon: MapPin,
  },
  {
    title: "Delivered",
    description: "Your package has reached its destination.",
    icon: PackageCheck,
  },
];

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [submittedNumber, setSubmittedNumber] = useState("");
  const [message, setMessage] = useState("");

  function handleTrack(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const number = trackingNumber.trim();

    if (!number) {
      setMessage("Enter your tracking number to continue.");
      return;
    }

    setSubmittedNumber(number);
    setMessage(
      "Tracking lookup is not connected yet. Once the backend is ready, we'll retrieve the real status for this tracking number."
    );
  }

  return (
    <main className="min-h-screen bg-[#F4F1EC] text-[#171717]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#11141B] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-48 h-[450px] w-[450px] rounded-full bg-[#FF6B1A]/15 blur-[110px]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/65">
              <span className="h-2 w-2 rounded-full bg-[#FF6B1A]" />
              DELIVERY VISIBILITY
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Your package.
              <br />
              <span className="text-[#FF6B1A]">
                Every step of the way.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/55 sm:text-lg">
              Find out where your delivery stands. Enter your tracking number
              to check your package&apos;s progress from pickup to destination.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55">
              <span className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-[#FF6B1A]" />
                Clear status updates
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={17} className="text-[#FF6B1A]" />
                Delivery progress
              </span>
            </div>
          </div>

          {/* Delivery journey illustration */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-5 rounded-full bg-[#FF6B1A]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#191D26] p-6 sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                    Your delivery journey
                  </p>

                  <h2 className="mt-2 text-xl font-semibold">
                    Pickup to doorstep
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B1A]/10 text-[#FF6B1A]">
                  <Truck size={25} />
                </div>
              </div>

              <div className="relative mt-9 space-y-7">
                <div className="absolute bottom-6 left-[17px] top-6 w-px bg-white/10" />

                {deliveryStages.map((stage, index) => {
                  const Icon = stage.icon;
                  const isFirst = index === 0;

                  return (
                    <div key={stage.title} className="relative flex gap-4">
                      <div
                        className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                          isFirst
                            ? "bg-[#FF6B1A] text-[#17100C]"
                            : "border border-white/10 bg-[#191D26] text-white/45"
                        }`}
                      >
                        {isFirst ? <Check size={18} /> : <Icon size={17} />}
                      </div>

                      <div className="pt-0.5">
                        <p
                          className={`text-sm font-semibold ${
                            isFirst ? "text-white" : "text-white/55"
                          }`}
                        >
                          {stage.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-white/35">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-8 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-xs leading-5 text-white/40">
                Illustrative journey only. Actual delivery progress will appear
                when tracking is connected to the backend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking search */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B1A]">
              TRACK A PACKAGE
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Where is your delivery?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#171717]/60 sm:text-base">
              Enter the tracking number you received after booking your
              delivery.
            </p>
          </div>

          <form
            onSubmit={handleTrack}
            className="mt-9 rounded-2xl border border-black/[0.08] bg-white p-4 shadow-[0_20px_60px_rgba(23,23,23,0.06)] sm:p-6"
          >
            <label
              htmlFor="trackingNumber"
              className="mb-3 block text-sm font-semibold"
            >
              Tracking number
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative min-w-0 flex-1">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#171717]/35"
                />

                <input
                  id="trackingNumber"
                  name="trackingNumber"
                  type="text"
                  autoComplete="off"
                  placeholder="e.g. VCO-XXXXXXXX"
                  value={trackingNumber}
                  onChange={(event) => {
                    setTrackingNumber(event.target.value);
                    setMessage("");
                    setSubmittedNumber("");
                  }}
                  required
                  className="h-[52px] w-full rounded-xl border border-black/10 bg-[#F8F7F4] pl-11 pr-4 text-sm outline-none transition placeholder:text-[#171717]/30 focus:border-[#FF6B1A] focus:ring-2 focus:ring-[#FF6B1A]/10"
                />
              </div>

              <button
                type="submit"
                disabled={!trackingNumber.trim()}
                className="flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FF6B1A] px-6 text-sm font-semibold text-[#17100C] transition hover:bg-[#FF8240] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Track package
                <ArrowRight size={17} />
              </button>
            </div>

            {message && (
              <p
                role="status"
                className="mt-4 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm leading-6 text-[#8C3B0C]"
              >
                {submittedNumber && (
                  <span className="mb-1 block font-semibold">
                    Tracking number: {submittedNumber}
                  </span>
                )}

                {message}
              </p>
            )}

            <p className="mt-4 text-xs leading-5 text-[#171717]/45">
              Your tracking number will be provided when a delivery booking
              has been successfully created.
            </p>
          </form>

          {/* Help card */}
          <div className="mt-8 flex flex-col justify-between gap-5 rounded-2xl border border-black/[0.07] bg-[#EAE5DC] p-6 sm:flex-row sm:items-center sm:p-7">
            <div>
              <h3 className="font-semibold">
                Don&apos;t have a tracking number?
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-[#171717]/60">
                Sign in to access your deliveries, or create an account to get
                started with Velocourier.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/login"
                className="rounded-lg border border-black/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/60"
              >
                Sign in
              </Link>

              <Link
                href="/sign-up"
                className="inline-flex items-center gap-2 rounded-lg bg-[#171717] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#303030]"
              >
                Create account
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#171717]/50 transition hover:text-[#FF6B1A]"
            >
              <ArrowLeft size={16} />
              Return to homepage
            </Link>
          </div>
        </div>
      </section>

      {/* Shared global footer */}
      <Footer />
    </main>
  );
}
