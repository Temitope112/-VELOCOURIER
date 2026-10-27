
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
  UserRound,
} from "lucide-react";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const passwordIsValid = password.length >= 8;
  const passwordsMatch =
    password.length > 0 && password === confirmPassword;

  const isFormValid =
    fullName.trim().length >= 2 &&
    isValidEmail &&
    passwordIsValid &&
    passwordsMatch &&
    acceptedTerms;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");

    if (fullName.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (!isValidEmail) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!passwordIsValid) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (!passwordsMatch) {
      setError("Your passwords do not match.");
      return;
    }

    if (!acceptedTerms) {
      setError("Please accept the Terms and Privacy Policy to continue.");
      return;
    }

    // Account creation will be connected to the backend later.
    setNotice(
      "Your details are valid. Account creation will be available when authentication is connected."
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0D12] text-white">
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
          <Link href="/" className="group flex items-center gap-3">
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
            <span>Back to home</span>
          </Link>
        </header> */}

        {/* Main */}
        <section className="flex flex-1 items-center justify-center py-10 sm:py-14">
          <div className="grid w-full max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Brand panel */}
            <div className="hidden lg:block">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/[0.07] px-4 py-2 text-sm text-orange-300">
                <span className="h-2 w-2 rounded-full bg-[#FF6B1A]" />
                Join the Velocourier community
              </div>

              <h1 className="max-w-lg text-5xl font-semibold leading-[1.12] tracking-tight xl:text-6xl">
                Your next delivery is just a{" "}
                <span className="text-[#FF6B1A]">click away.</span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-white/55">
                Create your account to book pickups, manage packages, and
                follow your deliveries from collection to destination.
              </p>

              <div className="mt-12 space-y-5">
                {[
                  {
                    icon: Package,
                    title: "Easy package booking",
                    description: "Arrange deliveries without the hassle.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Delivery visibility",
                    description: "Keep up with your package's progress.",
                  },
                  {
                    icon: UserRound,
                    title: "One account, one place",
                    description: "Manage your deliveries in one dashboard.",
                  },
                ].map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/[0.07] text-[#FF6B1A]">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h2 className="text-sm font-semibold">{title}</h2>
                      <p className="mt-1 text-sm text-white/45">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="mx-auto w-full max-w-md">
              <div className="mb-7 lg:hidden">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B1A] text-[#17100C]">
                  <Package size={25} />
                </div>

                <h1 className="text-3xl font-semibold tracking-tight">
                  Create your account
                </h1>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  Join Velocourier and make your deliveries easier.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.09] bg-[#11141B]/90 p-6 shadow-2xl shadow-black/20 sm:p-9">
                <div className="mb-7 hidden lg:block">
                  <h2 className="text-3xl font-semibold tracking-tight">
                    Create account
                  </h2>

                  <p className="mt-2 text-sm text-white/50">
                    Enter your details to get started.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Full name
                    </label>

                    <div className="relative">
                      <UserRound
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
                      />

                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your full name"
                        required
                        minLength={2}
                        value={fullName}
                        onChange={(event) => {
                          setFullName(event.target.value);
                          setError("");
                          setNotice("");
                        }}
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#0B0D12] pl-11 pr-4 text-sm outline-none transition placeholder:text-white/25 focus:border-[#FF6B1A]/70 focus:ring-2 focus:ring-[#FF6B1A]/10"
                      />
                    </div>
                  </div>

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
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#0B0D12] pl-11 pr-4 text-sm outline-none transition placeholder:text-white/25 focus:border-[#FF6B1A]/70 focus:ring-2 focus:ring-[#FF6B1A]/10"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Password
                    </label>

                    <div className="relative">
                      <LockKeyhole
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
                      />

                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="At least 8 characters"
                        required
                        minLength={8}
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                          setError("");
                          setNotice("");
                        }}
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#0B0D12] pl-11 pr-12 text-sm outline-none transition placeholder:text-white/25 focus:border-[#FF6B1A]/70 focus:ring-2 focus:ring-[#FF6B1A]/10"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((value) => !value)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-white/40 hover:text-white"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm password */}
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Confirm password
                    </label>

                    <div className="relative">
                      <LockKeyhole
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
                      />

                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="Enter your password again"
                        required
                        value={confirmPassword}
                        onChange={(event) => {
                          setConfirmPassword(event.target.value);
                          setError("");
                          setNotice("");
                        }}
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#0B0D12] pl-11 pr-12 text-sm outline-none transition placeholder:text-white/25 focus:border-[#FF6B1A]/70 focus:ring-2 focus:ring-[#FF6B1A]/10"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword((value) => !value)
                        }
                        aria-label={
                          showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-white/40 hover:text-white"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>

                    {confirmPassword && !passwordsMatch && (
                      <p className="mt-2 text-xs text-red-300">
                        Passwords do not match.
                      </p>
                    )}
                  </div>

                  {/* Terms */}
                  <label className="flex cursor-pointer items-start gap-3 py-1 text-sm leading-5 text-white/55">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(event) => {
                        setAcceptedTerms(event.target.checked);
                        setError("");
                        setNotice("");
                      }}
                      className="mt-1 h-4 w-4 shrink-0 accent-[#FF6B1A]"
                    />

                    <span>
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="text-[#FF8A48] underline underline-offset-4 hover:text-[#FFB080]"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-[#FF8A48] underline underline-offset-4 hover:text-[#FFB080]"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>

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

                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B1A] px-5 text-sm font-semibold text-[#17100C] transition hover:bg-[#FF8240] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/30"
                  >
                    Create account
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-white/50">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-[#FF8A48] hover:text-[#FFB080]"
                  >
                    Sign in
                  </Link>
                </p>
              </div>

              <p className="mt-6 text-center text-xs text-white/30">
                Your deliveries, all in one place.
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
