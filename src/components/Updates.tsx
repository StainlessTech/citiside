import Image from "next/image";
import { ArrowUpRight, CalendarDays } from "lucide-react";

const updates = [
  {
    date: "DD MONTH 20XX",
    category: "Community",
    title: "[Community Engagement Placeholder]",
    excerpt:
      "[Add a verified summary of a recent community engagement, meeting or constituency activity.]",
    image: "/images/bisi-traditional.jpg",
  },
  {
    date: "DD MONTH 20XX",
    category: "Legislative",
    title: "[Legislative Update Placeholder]",
    excerpt:
      "[Add a verified summary of a legislative activity, motion, bill or official engagement.]",
    image: "/images/bisi-suit.jpg",
  },
  {
    date: "DD MONTH 20XX",
    category: "Public Service",
    title: "[Public Service Update Placeholder]",
    excerpt:
      "[Add a verified summary of a public-service activity, programme or community initiative.]",
    image: "/images/bisi-formal.jpg",
  },
];

export default function Updates() {
  return (
    <section id="updates" className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Updates
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B3D2E] sm:text-5xl">
              Keeping the people informed.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-500">
              [Placeholder introduction for official updates, community
              engagements, legislative activities and public-service news.]
            </p>
          </div>

          <span className="hidden rounded-full border border-[#0B3D2E]/10 bg-[#F7F4EC] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#0B3D2E] sm:block">
            Latest Updates
          </span>
        </div>

        {/* Updates */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {updates.map((update) => (
            <article
              key={update.title}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={update.image}
                  alt={update.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-[#C9A227] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#171717]">
                  {update.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                  <CalendarDays size={14} className="text-[#C9A227]" />
                  <span>{update.date}</span>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-snug text-[#0B3D2E]">
                  {update.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {update.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B3D2E]">
                    Read Update
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0B3D2E]/10 text-[#0B3D2E] transition duration-300 group-hover:border-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-[#171717]">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Backend-ready note */}
        <div className="mt-10 rounded-3xl bg-[#0B3D2E] p-6 sm:p-7">
          <p className="text-sm leading-6 text-white/60">
            [Backend-ready: these updates can later be loaded dynamically
            from the admin content management system.]
          </p>
        </div>
      </div>
    </section>
  );
}