import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B3D2E] text-white">
      {/* Background glow */}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-black/20 blur-3xl" />

      <div className="container relative z-10 flex min-h-screen items-center pt-28 pb-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.85fr]">

          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Ogun State House of Assembly
              </p>
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Otunba (Hon.)
              <br />
              <span className="text-white">Bisi Oyedele</span>
            </h1>

            <p className="mt-5 text-2xl font-semibold tracking-wide text-[#C9A227]">
              Citiside
            </p>

            <div className="mt-6 flex items-center gap-2 text-white/70">
              <MapPin size={17} className="text-[#C9A227]" />

              <p className="text-sm font-medium uppercase tracking-wide">
                Ipokia/Idiroko State Constituency
              </p>
            </div>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              Representing the people of Ipokia/Idiroko with a commitment to
              effective leadership, responsible representation and community
              development.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-7 py-3.5 text-sm font-bold text-[#171717] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d9b33a]"
              >
                Discover His Story
                <ArrowDown size={17} />
              </a>

              <a
                href="#service"
                className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-[#C9A227] hover:bg-white/5"
              >
                View Record of Service
              </a>
            </div>

            {/* Small trust/identity line */}
            <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-white/40">
              <span className="h-px w-8 bg-white/20" />
              <span>Leadership • Service • Representation</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">

            {/* Gold frame */}
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-[#C9A227]/30" />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#123F32]">
              <Image
                src="/images/bisi-suit.jpg"
                alt="Otunba Bisi Oyedele"
                width={800}
                height={1000}
                priority
                className="h-auto w-full object-cover"
              />

              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B3D2E]/70 to-transparent" />
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-white px-5 py-4 shadow-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Public Service
              </p>

              <p className="mt-1 text-sm font-bold text-[#0B3D2E]">
                Ipokia / Idiroko
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition hover:text-[#C9A227] md:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>

        <ArrowDown size={16} />
      </a>
    </section>
  );
}