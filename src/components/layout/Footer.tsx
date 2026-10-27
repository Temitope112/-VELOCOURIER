
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const footerLinks = {
  platform: [
    { label: "Our services", href: "services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Book a delivery", href: "/book-delivery" },
    { label: "Track a package", href: "/track" },
  ],
  company: [
    { label: "About us", href: "/about" },
    { label: "Become a rider", href: "/rider/register" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "Help center", href: "/help" },
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of service", href: "/terms" },
  ],
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: FaXTwitter,
  },
];

export default function Footer() {
const currentYear = 2026;

  return (
    <footer className="relative overflow-hidden bg-[#090A0F] px-5 pb-6 pt-16 text-white sm:px-8 lg:px-16 lg:pt-20">
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#FF6B1A]/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10 lg:pb-16">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="Velocourier home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6B1A] text-lg font-black text-white">
                V
              </span>

              <span className="text-xl font-bold tracking-tight">
                velo<span className="text-[#FF6B1A]">courier</span>
              </span>
            </a>

            <p className="mt-5 text-sm leading-7 text-white/50">
              Moving your everyday forward. Arrange local deliveries with
              greater convenience, clearer updates, and less stress.
            </p>

            <a
              href="mailto:hello@velocourier.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#FF8A4C]"
            >
              <Mail size={16} />
              hello@velocourier.com
              <ArrowUpRight size={14} />
            </a>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6B1A]/50 hover:bg-[#FF6B1A]/10 hover:text-[#FF8A4C]"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h3 className="text-sm font-semibold">Platform</h3>

            <ul className="mt-5 space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-[#FF8A4C]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold">Company</h3>

            <ul className="mt-5 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-[#FF8A4C]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="text-sm font-semibold">Support</h3>

            <ul className="mt-5 space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-[#FF8A4C]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-7 space-y-3">
              <p className="flex items-start gap-2 text-xs leading-5 text-white/40">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                Local delivery, built around your city.
              </p>

              <a
                href="tel:+2340000000000"
                className="flex items-center gap-2 text-xs text-white/40 transition-colors hover:text-[#FF8A4C]"
              >
                <Phone size={14} />
                Contact our team
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Velocourier. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Built to keep your city moving.
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B1A]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
