export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl mt-8">
      <div className="relative overflow-hidden rounded-[28px] shadow-soft">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1523978591478-c753949ff840?auto=format&fit=crop&w=2000&q=80"
          alt="South Africa landscape"
          className="h-[520px] w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-white font-extrabold text-4xl md:text-6xl leading-[1.05] max-w-2xl">
            Learn South African <br /> Languages
          </h1>

          <p className="mt-6 text-white/90 max-w-2xl text-base md:text-lg">
            Embrace the Rainbow Nation&apos;s linguistic diversity. Connect with
            expert tutors, explore rich cultures, and discover beautiful
            destinations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-brandOrange hover:bg-brandOrangeDark text-white font-semibold px-6 py-3 rounded-full shadow-soft inline-flex items-center gap-2">
              Start Learning <span aria-hidden>→</span>
            </button>

            <button className="bg-white/15 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full border border-white/30">
              Explore Culture
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
