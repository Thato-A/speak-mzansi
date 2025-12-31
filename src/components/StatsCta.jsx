export default function StatsCta() {
  return (
    <section className="mx-auto max-w-6xl pb-20">
      {/* Stats Bar */}
      <div className="rounded-[22px] p-8 md:p-10 shadow-soft text-white bg-gradient-to-r from-brandOrange to-red-600">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <Stat number="11" label="Official Languages" />
          <Stat number="100+" label="Expert Tutors" />
          <Stat number="50+" label="Cultural Resources" />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          Ready to Start Your Journey?
        </h3>
        <p className="mt-4 text-black/70 max-w-2xl mx-auto">
          Join thousands of learners discovering the beauty of South African
          languages and culture
        </p>

        <button className="mt-10 bg-brandOrange hover:bg-brandOrangeDark text-white font-semibold px-8 py-3 rounded-full shadow-soft inline-flex items-center gap-2">
          Browse Languages <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-extrabold">{number}</div>
      <div className="mt-2 text-white/90 font-semibold">{label}</div>
    </div>
  );
}
