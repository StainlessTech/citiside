import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "[official email placeholder]",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "[official phone placeholder]",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "[official office address placeholder]",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#F7F4EC]">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Contact
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B3D2E] sm:text-5xl">
              Stay connected.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-500">
              [Placeholder introduction for constituents, community members,
              organisations and members of the public who wish to get in
              touch.]
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.label}
                    className="flex items-center gap-4 rounded-2xl border border-[#0B3D2E]/10 bg-white p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B3D2E] text-[#C9A227]">
                      <Icon size={19} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                        {detail.label}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#0B3D2E]">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] bg-[#0B3D2E] p-7 shadow-xl sm:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Send a Message
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                We&apos;d like to hear from you.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                [Messages submitted through this form will later be processed
                through the website backend.]
              </p>
            </div>

            <form className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#C9A227]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#C9A227]"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#C9A227]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#C9A227]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3.5 text-sm font-bold text-[#171717] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d9b33a]"
              >
                Send Message
                <Send size={17} />
              </button>
            </form>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 border-t border-[#0B3D2E]/10 pt-6">
          <p className="text-xs leading-6 text-gray-400">
            [Backend integration will be added later. Until then, this form
            is a visual interface only.]
          </p>
        </div>
      </div>
    </section>
  );
}