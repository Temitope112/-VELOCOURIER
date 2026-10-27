
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    subject: "",
    message: "",
  });

  const isEmailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());

  const isFormValid =
    formData.name.trim().length > 0 &&
    isEmailValid &&
    formData.topic !== "" &&
    formData.subject.trim().length > 0 &&
    formData.message.trim().length > 0;

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status) {
      setStatus("");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isFormValid) return;

    setStatus(
      "The form design is ready. Message delivery will be enabled when we connect the backend.",
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-black/10 bg-[#F8F7F4] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-[#FF6B1A] focus:ring-2 focus:ring-[#FF6B1A]/10";

  const labelClasses = "mb-2 block text-sm font-medium";

  return (
    <>
      <main className="overflow-hidden bg-[#F4F1EC] text-[#171717]">
        {/* Dark hero */}
        <section className="relative overflow-hidden bg-[#11141B] px-5 pb-20 pt-16 text-white sm:px-8 sm:pb-24 sm:pt-24 lg:px-16">
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#FF6B1A]/15 blur-[110px]" />

          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6B1A]">
                <span className="h-2 w-2 rounded-full bg-[#FF6B1A]" />
                Get in touch
              </p>

              <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Let’s talk about
                <span className="text-[#FF6B1A]"> getting there.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                Questions about deliveries, business partnerships or working
                with us? We’d like to hear from you.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <p className="text-sm text-white/50">A good place to start</p>

              <div className="mt-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF6B1A] text-[#171717]">
                  <MessageCircle size={22} />
                </div>

                <div>
                  <h2 className="text-lg font-semibold">
                    Tell us what you need
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Share your question or idea, and we’ll build the right
                    process for getting it to the right person.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact content */}
        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            {/* Contact details */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6B1A]">
                Contact information
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                We’re here to help.
              </h2>

              <p className="mt-5 max-w-md leading-7 text-black/55">
                Whether you’re sending a package or exploring a business
                partnership, choose the best way to reach us.
              </p>

              <div className="mt-9 space-y-4">
                <div className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E8] text-[#FF6B1A]">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="mt-1 text-sm text-black/50">
                      General questions and enquiries
                    </p>
                    <p className="mt-2 text-sm font-medium">
                      hello@velocourier.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E8] text-[#FF6B1A]">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="mt-1 text-sm text-black/50">
                      For delivery and partnership enquiries
                    </p>
                    <p className="mt-2 text-sm font-medium">
                      +234 8057 977 603
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E8] text-[#FF6B1A]">
                    <Clock3 size={20} />
                  </div>

                  <div>
                    <p className="font-semibold">Support hours</p>
                    <p className="mt-1 text-sm leading-6 text-black/50">
                      Our support days and hours will be published here once
                      they have been decided.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-2xl bg-[#E9E5DE] p-5">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-[#FF6B1A]"
                />

                <div>
                  <p className="font-semibold">Service area</p>
                  <p className="mt-1 text-sm leading-6 text-black/55">
                    We’ll publish the locations Velocourier serves as our
                    delivery coverage is established.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_20px_70px_rgba(23,23,23,0.05)] sm:p-9 lg:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF6B1A]">
                    Send an enquiry
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    How can we help?
                  </h2>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[#171A21] text-[#FF6B1A] sm:flex">
                  <ArrowUpRight size={22} />
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-black/50">
                Fill in all the fields below to prepare your enquiry.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Full name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClasses}
                    />

                    {formData.email.length > 0 && !isEmailValid && (
                      <p className="mt-2 text-xs text-red-600">
                        Enter a valid email address.
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="topic" className={labelClasses}>
                    What is this about?
                  </label>

                  <select
                    id="topic"
                    name="topic"
                    required
                    value={formData.topic}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>
                    <option value="delivery">Delivery enquiry</option>
                    <option value="business">Business partnership</option>
                    <option value="rider">Become a delivery rider</option>
                    <option value="support">Customer support</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className={labelClasses}>
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a little more..."
                    className={`${inputClasses} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#FF6B1A] px-6 py-4 text-sm font-semibold text-[#171717] transition hover:bg-[#171717] hover:text-white disabled:cursor-not-allowed disabled:bg-[#E5E2DE] disabled:text-black/35 disabled:hover:bg-[#E5E2DE] disabled:hover:text-black/35"
                >
                  Prepare enquiry
                  <ArrowRight size={17} />
                </button>

                {status && (
                  <p
                    role="status"
                    className="rounded-xl bg-[#FFF0E8] p-4 text-sm leading-6 text-[#7B3513]"
                  >
                    {status}
                  </p>
                )}

                <p className="text-center text-xs leading-5 text-black/40">
                  This form is a frontend prototype. It does not send or store
                  your message yet.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-5 pb-20 sm:px-8 lg:px-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[1.75rem] bg-[#E7E2D9] p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to send a package?
              </h2>

              <p className="mt-2 text-sm leading-6 text-black/55">
                Create an account to access the delivery booking experience.
              </p>
            </div>

            <Link
              href="/sign-up"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#171717] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#FF6B1A] hover:text-[#171717]"
            >
              Create an account
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
