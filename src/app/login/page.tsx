
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isFormValid = isValidEmail && password.length > 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");

    if (!isValidEmail) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    // Authentication will be connected to the backend later.
    setNotice(
      "Your form is ready. Sign-in will be available when authentication is connected."
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0D12] text-white">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#FF6B1A]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 h-[450px] w-[450px] rounded-full bg-orange-500/[0.07] blur-[110px]"
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col px-5 sm:px-8 lg:px-12">
        {/* Header */}
        {/* <header className="flex h-20 items-center justify-between border-b border-white/[0.08]">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Velocourier home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6B1A] text-[#17100C] shadow-lg shadow-orange-500/15 transition-transform group-hover:scale-105">
              <Package size={22} strokeWidth={2.4} />
            </span>

            <span className="text-xl font-extrabold tracking-tight">
              velo<span className="text-[#FF6B1A]">courier</span>
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to home</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </header> */}

        {/* Main content */}
        <section className="flex flex-1 items-center justify-center py-12 sm:py-16">
          <div className="grid w-full max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: Brand message */}
            <div className="hidden lg:block">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/[0.07] px-4 py-2 text-sm text-orange-300">
                <span className="h-2 w-2 rounded-full bg-[#FF6B1A]" />
                Your deliveries, moving forward
              </div>

              <h1 className="max-w-lg text-5xl font-semibold leading-[1.12] tracking-tight xl:text-6xl">
                Every delivery starts with{" "}
                <span className="text-[#FF6B1A]">you.</span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-white/55">
                Sign in to arrange pickups, manage your deliveries, and keep
                track of every package from collection to destination.
              </p>

              {/* Decorative delivery journey */}
              <div className="relative mt-12 max-w-md rounded-2xl border border-white/[0.09] bg-white/[0.035] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                      Your delivery journey
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      From pickup to doorstep
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B1A]/10 text-[#FF6B1A]">
                    <Truck size={25} />
                  </div>
                </div>

                <div className="mt-8 flex items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B1A] text-[#17100C]">
                    <Package size={19} />
                  </div>

                  <div className="relative mx-3 h-px flex-1 bg-gradient-to-r from-[#FF6B1A] via-[#FF6B1A]/50 to-white/15">
                    <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B1A]" />
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/70">
                    <Truck size={19} />
                  </div>

                  <div className="relative mx-3 h-px flex-1 bg-white/15">
                    <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/30" />
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/70">
                    <ShieldCheck size={19} />
                  </div>
                </div>

                <div className="mt-4 flex justify-between text-xs text-white/45">
                  <span>Pickup</span>
                  <span>On the way</span>
                  <span>Delivered</span>
                </div>

                <div className="absolute -right-3 -top-3 h-6 w-6 rounded-full border border-orange-400/30 bg-[#FF6B1A]/10" />
              </div>

              <p className="mt-8 text-sm text-white/35">
                Reliable delivery. Clear updates. Less worry.
              </p>
            </div>

            {/* Right: Sign-in form */}
            <div className="mx-auto w-full max-w-md">
              <div className="mb-8 lg:hidden">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B1A] text-[#17100C]">
                  <Package size={25} />
                </div>

                <h1 className="text-3xl font-semibold tracking-tight">
                  Welcome back.
                </h1>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  Sign in to manage your deliveries and keep your packages
                  moving.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.09] bg-[#11141B]/90 p-6 shadow-2xl shadow-black/20 sm:p-9">
                <div className="mb-8 hidden lg:block">
                  <h2 className="text-3xl font-semibold tracking-tight">
                    Sign in
                  </h2>

                  <p className="mt-2 text-sm text-white/50">
                    Enter your account details to continue.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Email address
                    </label>

                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        required
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          setError("");
                          setNotice("");
                        }}
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#0B0D12] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#FF6B1A]/70 focus:ring-2 focus:ring-[#FF6B1A]/10"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <label
                        htmlFor="password"
                        className="text-sm font-medium text-white/80"
                      >
                        Password
                      </label>

                      <Link
                        href="/forgot-password"
                        className="text-xs text-[#FF8A48] transition-colors hover:text-[#FFB080]"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <div className="relative">
                      <LockKeyhole
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
                      />

                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                          setError("");
                          setNotice("");
                        }}
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#0B0D12] pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#FF6B1A]/70 focus:ring-2 focus:ring-[#FF6B1A]/10"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((visible) => !visible)}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-white/40 transition hover:text-white"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Feedback */}
                  {error && (
                    <p
                      role="alert"
                      className="rounded-lg border border-red-400/20 bg-red-400/[0.07] px-3 py-2 text-sm text-red-300"
                    >
                      {error}
                    </p>
                  )}

                  {notice && (
                    <p
                      role="status"
                      className="rounded-lg border border-orange-400/20 bg-orange-400/[0.07] px-3 py-2 text-sm leading-5 text-orange-200"
                    >
                      {notice}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B1A] px-5 text-sm font-semibold text-[#17100C] transition hover:bg-[#FF8240] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/30"
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </form>

                <div className="my-7 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/[0.09]" />
                  <span className="text-xs text-white/35">
                    NEW TO VELOCOURIER?
                  </span>
                  <div className="h-px flex-1 bg-white/[0.09]" />
                </div>

                <Link
                  href="/sign-up"
                  className="flex h-12 w-full items-center justify-center rounded-xl border border-white/10 text-sm font-medium text-white/80 transition hover:border-[#FF6B1A]/40 hover:bg-white/[0.03] hover:text-white"
                >
                  Create an account
                </Link>

                <p className="mt-6 text-center text-xs leading-5 text-white/35">
                  By continuing, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="text-white/60 underline underline-offset-4 hover:text-white"
                  >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-white/60 underline underline-offset-4 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              <p className="mt-6 text-center text-xs text-white/30">
                Need help?{" "}
                <Link
                  href="/contact"
                  className="text-white/60 transition hover:text-[#FF8A48]"
                >
                  Contact our team
                </Link>
              </p>
            </div>
          </div>
        </section>

        <footer className="flex min-h-14 items-center justify-center border-t border-white/[0.07] text-center text-xs text-white/30">
          © 2026 Velocourier. Moving your world forward.
        </footer>
      </div>
    </main>
  );
}
