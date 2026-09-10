import { Heart, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t-2 border-arcade text-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Présentation */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <span className="grid h-10 w-10 place-items-center bg-arcade text-ink">
                <Trophy size={23} strokeWidth={2.5} />
              </span>

              <span className="font-pixel text-xl text-ink">
                ASTRANOVA<span className="text-arcade"> GUIDES</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink">
              Des guides rétro en français pour les chasseurs de succès,
              les nostalgiques et tous ceux qui veulent compléter leurs jeux.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-arcade">
              Navigation
            </h2>

            <nav className="mt-4 flex flex-col gap-3 text-sm font-bold text-ink">
              <Link
                to="/"
                className="w-fit transition hover:text-arcade"
              >
                Accueil
              </Link>

              <Link
                to="/guides"
                className="w-fit transition hover:text-arcade"
              >
                Guides
              </Link>

              <Link
                to="/musee"
                className="w-fit transition hover:text-arcade"
              >
                Musée
              </Link>
            </nav>
          </div>

          {/* Liens */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-arcade">
              AstraNova
            </h2>

            <div className="mt-4 flex flex-col gap-3 text-sm font-bold text-ink">
              <Link
                to="/login"
                className="w-fit transition hover:text-arcade"
              >
                Connexion
              </Link>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="my-10" />

        {/* Bas du footer */}
        <div className="flex flex-col gap-4 text-xs font-bold text-ink sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AstraNova Guides. Tous droits réservés.</p>

          <p className="flex items-center gap-1">
            Fait avec
            <Heart size={13} className="text-arcade" fill="currentColor" />
            pour le rétro.
          </p>
        </div>
      </div>
    </footer>
  );
}