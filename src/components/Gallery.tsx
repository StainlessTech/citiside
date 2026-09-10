import Image from "next/image";
import { ArrowUpRight, Camera } from "lucide-react";

const galleryItems = [
  {
    image: "/images/bisi-hero.jpg",
    title: "[Gallery Image Placeholder]",
    category: "Public Service",
  },
  {
    image: "/images/bisi-formal.jpg",
    title: "[Gallery Image Placeholder]",
    category: "Community",
  },
  {
    image: "/images/bisi-suit.jpg",
    title: "[Gallery Image Placeholder]",
    category: "Leadership",
  },
  {
    image: "/images/bisi-traditional.jpg",
    title: "[Gallery Image Placeholder]",
    category: "Engagement",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-[#F7F4EC]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Gallery
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B3D2E] sm:text-5xl">
              Moments from service and leadership.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-500">
              [Placeholder introduction to photographs from public service,
              constituency engagements, community activities and official
              events.]
            </p>
          </div>

          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0B3D2E] text-[#C9A227] sm:flex">
            <Camera size={24} />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <article
              key={`${item.image}-${index}`}
              className={`group relative overflow-hidden rounded-3xl bg-[#0B3D2E] ${
                index === 0 ? "sm:row-span-2 lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0
                    ? "aspect-[4/5] sm:h-full"
                    : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                {/* Category */}
                <span className="absolute left-5 top-5 rounded-full bg-[#C9A227] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#171717]">
                  {item.category}
                </span>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
                        Photography
                      </p>

                      <h3 className="mt-2 text-lg font-bold text-white">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition duration-300 group-hover:border-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-[#171717]">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Future gallery note */}
        <div className="mt-10 flex items-center gap-3 border-t border-[#0B3D2E]/10 pt-6">
          <span className="h-2 w-2 rounded-full bg-[#C9A227]" />

          <p className="text-sm text-gray-500">
            [More verified photographs and event records can be added here.]
          </p>
        </div>
      </div>
    </section>
  );
}