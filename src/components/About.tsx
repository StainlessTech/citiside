import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Public Service",
  "Legislative Representation",
  "Community Development",
  "People-Centred Leadership",
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}
          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] border border-[#C9A227]/40" />

            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="/images/bisi-formal.jpg"
                alt="Otunba Bisi Oyedele"
                width={800}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="absolute -right-5 bottom-8 hidden rounded-2xl bg-[#0B3D2E] px-6 py-5 shadow-xl sm:block">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A227]">
                Serving
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Ipokia / Idiroko
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              About Otunba Bisi Oyedele
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B3D2E] sm:text-5xl">
              Leadership rooted in service.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              [Biography placeholder. Replace this section with a verified
              biography covering Otunba Bisi Oyedele&apos;s background,
              education, professional journey, community involvement and path
              into public service.]
            </p>

            <p className="mt-5 text-base leading-7 text-gray-500">
              [Additional placeholder for his leadership philosophy, personal
              values and commitment to the people of Ipokia/Idiroko State
              Constituency.]
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#C9A227]"
                  />

                  <span className="text-sm font-semibold text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#service"
              className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#0B3D2E] transition hover:text-[#C9A227]"
            >
              Explore the record of service
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}