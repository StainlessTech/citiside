import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Users,
} from "lucide-react";

const statistics = [
  {
    value: "XX+",
    label: "Projects",
    description: "Projects and interventions",
  },
  {
    value: "XX",
    label: "Communities",
    description: "Communities reached",
  },
  {
    value: "XX+",
    label: "Initiatives",
    description: "People-focused initiatives",
  },
  {
    value: "XX",
    label: "Years",
    description: "Of leadership and service",
  },
];

const serviceAreas = [
  {
    icon: Building2,
    title: "Infrastructure",
    description:
      "[Placeholder for verified infrastructure projects and community development interventions.]",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "[Placeholder for verified educational programmes, scholarships and student-focused initiatives.]",
  },
  {
    icon: Users,
    title: "Youth & Empowerment",
    description:
      "[Placeholder for verified youth development, skills acquisition and empowerment programmes.]",
  },
  {
    icon: HeartPulse,
    title: "Community Welfare",
    description:
      "[Placeholder for verified healthcare, social welfare and community support initiatives.]",
  },
];

export default function ServiceRecord() {
  return (
    <section
      id="service"
      className="section-padding overflow-hidden bg-[#F7F4EC]"
    >
      <div className="container">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Public Service
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B3D2E] sm:text-5xl">
            A record that speaks through service.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            [Placeholder introduction to Otunba Bisi Oyedele&apos;s record
            of public service, legislative representation and constituency
            development.]
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[#0B3D2E]/10 bg-[#0B3D2E]/10 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-7 transition hover:bg-[#0B3D2E] group"
            >
              <p className="text-4xl font-bold text-[#0B3D2E] transition group-hover:text-[#C9A227]">
                {stat.value}
              </p>

              <p className="mt-2 font-bold text-gray-800 transition group-hover:text-white">
                {stat.label}
              </p>

              <p className="mt-1 text-sm text-gray-500 transition group-hover:text-white/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="mt-20">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Areas of Focus
              </p>

              <h3 className="mt-3 text-3xl font-bold text-[#0B3D2E]">
                Serving people. Building communities.
              </h3>
            </div>

            <a
              href="#constituency"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B3D2E] transition hover:text-[#C9A227]"
            >
              Explore constituency work
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {serviceAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="rounded-3xl border border-[#0B3D2E]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B3D2E] text-[#C9A227]">
                    <Icon size={22} />
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-[#0B3D2E]">
                    {area.title}
                  </h4>

                  <p className="mt-3 leading-7 text-gray-500">
                    {area.description}
                  </p>

                  <div className="mt-6 h-px w-12 bg-[#C9A227]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}