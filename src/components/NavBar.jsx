import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LogIn, Menu, Trophy, X } from "lucide-react";

const navItems = [
  { label: "Accueil", to: "/" },
  { label: "Guides", to: "/guides" },
  { label: "Musée", to: "/musee" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-9 w-9 place-items-center bg-arcade text-white pixel-shadow">
            <Trophy size={30} strokeWidth={2} />
          </span>
          <span className="font-pixel text-xl tracking-tight">
            ASTRANOVA <span className="text-arcade"> GUIDES</span>
            <span className="text-moss"></span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navigation principale"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-bold transition ${isActive ? "border-b-2 border-arcade" : "hover:bg-cream"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="rounded-full ml-3 flex items-center gap-2 bg-arcade px-4 py-2 text-sm font-black text-paper"
          >
            <LogIn size={16} /> Connexion
          </Link>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t-2 border-ink bg-paper px-5 py-4 md:hidden"
          aria-label="Navigation mobile"
        >
          <div className="mx-auto grid max-w-6xl gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className="rounded px-3 py-3 font-bold hover:bg-cream"
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/connexion"
              onClick={closeMenu}
              className="rounded mt-2 bg-arcade px-3 py-3 text-center font-black text-paper"
            >
              Connexion / Inscription
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
