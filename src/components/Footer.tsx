import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Service Record", href: "#service" },
  { name: "Constituency", href: "#constituency" },
  { name: "Gallery", href: "#gallery" },
  { name: "Updates", href: "#updates" },
];

export default function Footer() {
  return (
    <footer className="bg-[#06271E] text-white">
      <div className="container">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wide">
                BISI OYEDELE
              </span>

              <span className="mt-1 text-xs font-medium uppercase tracking-[0.3em] text-[#C9A227]">
                Citiside
              </span>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              [Placeholder description of Otunba Bisi Oyedele&apos;s public
              service, leadership and representation of the people of
              Ipokia/Idiroko State Constituency.]
            </p>

            <div className="mt-7 h-px w-12 bg-[#C9A227]" />
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Navigation
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-white/60 transition hover:text-[#C9A227]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Contact
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#C9A227]"
                />

                <span className="text-sm leading-6 text-white/60">
                  [official email placeholder]
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#C9A227]"
                />

                <span className="text-sm leading-6 text-white/60">
                  [official phone placeholder]
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#C9A227]"
                />

                <span className="text-sm leading-6 text-white/60">
                  [official office address placeholder]
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Bisi Oyedele. All rights reserved.
          </p>

          <a
            href="#"
            className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/50 transition hover:text-[#C9A227]"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}