import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPinned,
  Users,
} from "lucide-react";

const priorities = [
  "Community Development",
  "Youth Empowerment",
  "Education & Human Capital",
  "Infrastructure",
  "Healthcare & Welfare",
  "Economic Opportunities",
];

const projects = [
  {
    title: "[Constituency Project Placeholder]",
    category: "Infrastructure",
    description:
      "[Add a verified description of the project, location, date and impact here.]",
    image: "/images/bisi-traditional.jpg",
  },
  {
    title: "[Community Initiative Placeholder]",
    category: "Community Development",
    description:
      "[Add a verified description of the initiative, beneficiaries and outcome here.]",
    image: "/images/bisi-suit.jpg",
  },
  {
    title: "[Empowerment Programme Placeholder]",
    category: "Youth & Empowerment",
    description:
      "[Add a verified description of the programme and the people reached here.]",
    image: "/images/bisi-formal.jpg",
  },
];

export default function Constituency() {
  return (
    <section
      id="constituency"
      className="section-padding bg-white"
    >
      <div className="container">

        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                The Constituency
              </p>
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-[#0B3D2E] sm:text-5xl">
              Putting the people of Ipokia/Idiroko at the heart of
              representation.
            </h2>
          </div>

          <p className="text-lg leading-8 text-gray-500">
            [Placeholder introduction to the constituency and the approach
            to representing its people at the Ogun State House of Assembly.]
          </p>
        </div>

        {/* Location / People Banner */}
        <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#0B3D2E]">
          <div className="grid items-center lg:grid-cols-2">

            <div className="p-8 sm:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C9A227] text-[#171717]">
                <MapPinned size={23} />
              </div>

              <h3 className="mt-7 text-3xl font-bold text-white">
                Ipokia / Idiroko
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-white/60">
                [Placeholder for information about the constituency,
                communities, people and key development priorities.]
              </p>

              <div className="mt-8 flex items-center gap-3">
                <Users size={19} className="text-[#C9A227]" />

                <span className="text-sm font-semibold text-white/80">
                  Serving the people of the constituency
                </span>
              </div>
            </div>

            <div className="relative min-h-[320px]">
              <Image
                src="/images/bisi-traditional.jpg"
                alt="Otunba Bisi Oyedele"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D2E] via-[#0B3D2E]/20 to-transparent lg:bg-gradient-to-r" />
            </div>

          </div>
        </div>

        {/* Priorities */}
        <div className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Priorities
          </p>

          <h3 className="mt-3 text-3xl font-bold text-[#0B3D2E]">
            Areas that matter
          </h3>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {priorities.map((priority) => (
              <div
                key={priority}
                className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-[#F7F4EC] px-5 py-4"
              >
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-[#C9A227]"
                />

                <span className="text-sm font-semibold text-[#0B3D2E]">
                  {priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-20">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Projects & Initiatives
              </p>

              <h3 className="mt-3 text-3xl font-bold text-[#0B3D2E]">
                Work in the communities
              </h3>
            </div>

            <a
              href="#gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B3D2E] transition hover:text-[#C9A227]"
            >
              View gallery
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full bg-[#C9A227] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#171717]">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#0B3D2E]">
                    {project.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {project.description}
                  </p>

                  <div className="mt-5 h-px w-10 bg-[#C9A227]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}