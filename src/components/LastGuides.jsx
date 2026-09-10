import { ArrowRight, Gamepad2, Trophy, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { pokemonBlue } from "../data/games";


export default function LastGuides() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-arcade">
              Guide à la une
            </p>
          </div>
          <Link
            to="/jeux"
            className="hidden items-center gap-1 font-bold underline decoration-moss sm:flex"
          >
            Tous les jeux <ArrowRight size={18} />
          </Link>
        </div>
        <Link
          to={`/jeux/${pokemonBlue.slug}`}
          className="group mt-8 grid overflow-hidden border-2 border-moss bg-cream transition hover:-translate-y-1 hover:border-arcade md:grid-cols-[300px_1fr]"
        >
          <div className="grid min-h-56 place-items-center bg-[#113f87] text-center text-4xl text-sun">
            {pokemonBlue.cover}
            <span className="text-8xl">{pokemonBlue.image}</span>
            <span className="text-sm text-ink">VERSION BLEUE</span>
          </div>
          <div className="p-7">
            <p className="text-sm font-black uppercase tracking-widest text-moss">
              {pokemonBlue.console} · {pokemonBlue.year}
            </p>
            <h3 className="mt-2 text-4xl group-hover:text-arcade">
              {pokemonBlue.title}
            </h3>
            <p className="mt-4 max-w-xl leading-relaxed text-ink/70">
              Feuille de route, succès importants, difficulté estimée et
              solutions vidéo pour compléter le set.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-black">
              <span className="flex items-center gap-2">
                <Trophy size={17} className="text-sun" />{" "}
                {pokemonBlue.achievements} succès
              </span>
              <span className="flex items-center gap-2">
                <Video size={17} className="text-arcade" /> Solutions vidéo
              </span>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
