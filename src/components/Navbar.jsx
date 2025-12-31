import { Home, Languages, Landmark, MapPin, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-brandOrange text-white grid place-items-center font-bold">
            SA
          </div>
          <div className="leading-tight">
            <p className="font-extrabold text-lg">Learn SA</p>
            <p className="font-extrabold text-lg -mt-1">Languages</p>
          </div>
        </div>

        {/* Nav Pills */}
        <nav className="hidden md:flex items-center gap-2 bg-white rounded-full px-2 py-2 shadow-soft">
          <NavItem icon={<Home size={18} />} label="Home" active />
          <NavItem icon={<Languages size={18} />} label="Languages" />
          <NavItem icon={<Landmark size={18} />} label="Culture" />
          <NavItem icon={<MapPin size={18} />} label="Destinations" />
        </nav>

        {/* Sign in */}
        <button className="inline-flex items-center gap-2 bg-brandOrange hover:bg-brandOrangeDark text-white font-semibold px-4 py-2.5 rounded-full shadow-soft">
          <User size={18} />
          Sign In / Sign Up
        </button>
      </div>
    </header>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <button
      className={[
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition",
        active ? "bg-ink text-white" : "text-ink hover:bg-black/5",
      ].join(" ")}
    >
      {icon}
      {label}
    </button>
  );
}
