import { NavLink } from "react-router-dom";
import { Home, Languages, Landmark, MapPin, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-brandOrange text-white grid place-items-center font-bold">
            SM
          </div>
          <div className="leading-tight">
            <p className="font-extrabold text-lg">Speak</p>
            <p className="font-extrabold text-lg -mt-1">Mzansi</p>
          </div>
        </div>

        {/* Nav Pills */}
        <nav className="flex items-center gap-2 bg-white rounded-full px-2 py-2 shadow-soft">
          <NavItem to="/" icon={<Home size={18} />} label="Home" />
          <NavItem
            to="/languages"
            icon={<Languages size={18} />}
            label="Languages"
          />
          <NavItem
            to="/culture"
            icon={<Landmark size={18} />}
            label="Culture"
          />
          <NavItem
            to="/destinations"
            icon={<MapPin size={18} />}
            label="Destinations"
          />
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

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        [
          "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition",
          isActive
            ? "bg-slate-900 text-white"
            : "text-slate-800 hover:bg-slate-100",
        ].join(" ")
      }
    >
      {icon}
      {label}
    </NavLink>
  );
}
