import { Languages, Users, Landmark, MapPin } from "lucide-react";

const items = [
  {
    iconBg: "bg-blue-600",
    icon: <Languages className="text-white" size={22} />,
    title: "Learn 11 Official Languages",
    desc: "Explore all 11 official languages of South Africa, from Zulu to Afrikaans",
  },
  {
    iconBg: "bg-green-600",
    icon: <Users className="text-white" size={22} />,
    title: "Expert Tutors",
    desc: "Connect with experienced native speakers who will guide your learning journey",
  },
  {
    iconBg: "bg-purple-600",
    icon: <Landmark className="text-white" size={22} />,
    title: "Cultural Heritage",
    desc: "Discover traditional attire, customs, and rich cultural traditions",
  },
  {
    iconBg: "bg-red-600",
    icon: <MapPin className="text-white" size={22} />,
    title: "Tourist Destinations",
    desc: "Explore popular destinations across the beautiful South Africa",
  },
];

export default function Offers() {
  return (
    <section className="mx-auto max-w-6xl mt-12 mb-10">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold">
        What We Offer
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((it) => (
          <div
            key={it.title}
            className="bg-white rounded-[22px] shadow-soft border border-black/5 p-8"
          >
            <div
              className={`h-12 w-12 rounded-2xl ${it.iconBg} grid place-items-center`}
            >
              {it.icon}
            </div>

            <h3 className="mt-5 text-xl font-extrabold">{it.title}</h3>
            <p className="mt-2 text-black/70">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
