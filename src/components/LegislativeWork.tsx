import {
  ArrowUpRight,
  FileText,
  Gavel,
  Landmark,
  MessageSquare,
} from "lucide-react";

const legislativeItems = [
  {
    year: "20XX",
    type: "Bill",
    title: "[Bill / Legislative Initiative Placeholder]",
    description:
      "[Add a verified description of the bill, its purpose, legislative stage and relevance to the people of Ipokia/Idiroko.]",
    icon: FileText,
  },
  {
    year: "20XX",
    type: "Motion",
    title: "[Motion Placeholder]",
    description:
      "[Add a verified description of the motion, the issue addressed and its significance to the constituency.]",
    icon: MessageSquare,
  },
  {
    year: "20XX",
    type: "Committee Work",
    title: "[Committee Assignment Placeholder]",
    description:
      "[Add verified information about committee membership, responsibilities and contributions.]",
    icon: Landmark,
  },
  {
    year: "20XX",
    type: "Legislative Contribution",
    title: "[Legislative Contribution Placeholder]",
    description:
      "[Add a verified description of a legislative contribution, advocacy effort or policy intervention.]",
    icon: Gavel,
  },
];

export default function LegislativeWork() {
  return (
    <section
      id="legislative"
      className="section-padding overflow-hidden bg-[#0B3D2E] text-white"
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Legislative Work
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Representation that extends beyond the constituency.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            [Placeholder introduction to Otunba Bisi Oyedele&apos;s
            legislative activities, contributions and work within the Ogun
            State House of Assembly.]
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-10">
            {legislativeItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={`${item.type}-${index}`}
                  className="relative md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-[#C9A227]/40 bg-[#123F32] md:flex">
                    <Icon size={18} className="text-[#C9A227]" />
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:border-[#C9A227]/30 hover:bg-white/[0.07] sm:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-[#C9A227] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#171717]">
                            {item.type}
                          </span>

                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                            {item.year}
                          </span>
                        </div>

                        <h3 className="mt-5 text-2xl font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-2xl leading-7 text-white/55">
                          {item.description}
                        </p>
                      </div>

                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40 sm:flex">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-sm leading-6 text-white/40">
            Note: Legislative records and project information should be
            updated with verified details before publication.
          </p>
        </div>
      </div>
    </section>
  );
}