import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />

      <section className="min-h-screen bg-[#0B3D2E] text-white flex items-center">
        <div className="container py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Ogun State House of Assembly
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Otunba (Hon.) Bisi Oyedele
          </h1>

          <p className="mt-4 text-2xl font-medium text-white/80">
            Citiside
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Member Representing Ipokia/Idiroko State Constituency
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full bg-[#C9A227] px-7 py-3 font-semibold text-[#171717] transition hover:bg-[#d9b33a]"
            >
              Explore His Story
            </a>

            <a
              href="#service"
              className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Record of Service
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            About
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#0B3D2E]">
            A Life of Leadership and Public Service
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            [Biography placeholder. This section will be replaced with
            verified information about Otunba Bisi Oyedele&apos;s background,
            professional journey, leadership experience and public service.]
          </p>
        </div>
      </section>

      <section
        id="service"
        className="section-padding bg-[#F7F4EC]"
      >
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Public Service
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#0B3D2E]">
            Record of Service
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            [Placeholder for constituency projects, legislative achievements,
            community interventions and other verified accomplishments.]
          </p>
        </div>
      </section>
    </main>
  );
}