import { ArrowUpRight, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export default function GuideCard({ guide }) {
  return (
    <Link
      to={`/jeux/${guide.slug}`}
      className="group relative block overflow-hidden border-2 border-ink bg-cream transition-transform duration-300 hover:-translate-y-2"
    >
      {/* Cadre de l'affiche */}
      <div>
        <div className="relative aspect-[3/4] overflow-hidden bg-[#120728]">
          {/* Cover */}
          <img
            src={guide.cover}
            alt={`Couverture de ${guide.title}`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Dégradé pour le texte */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Console */}
          <div className="absolute left-4 top-4">
            <span className="border-2 border-white bg-arcade px-3 py-1 text-xs font-black uppercase tracking-widest text-white">
              {guide.console}
            </span>
          </div>
          {/* Informations en bas */}
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-sun">
              Guide complet
            </p>

            <h3 className="mt-2 text-3xl font-black uppercase leading-[0.9] tracking-tight">
              {guide.title}
            </h3>

            <div className="mt-4 flex items-center justify-between border-t border-white/30 pt-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase">
                <Trophy size={15} className="text-sun" />
                {guide.achievements} succès
              </div>

              <span className="text-xs font-black">{guide.year}</span>
            </div>
          </div>

          {/* Bouton au hover */}
          <div className="absolute bottom-5 right-5 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="grid h-11 w-11 place-items-center bg-arcade text-white">
              <ArrowUpRight size={21} />
            </span>
          </div>
        </div>
      </div>

      {/* Bandeau inférieur façon jaquette */}
      <div className="flex items-center justify-between border-t-2 border-ink px-4 py-3">
        <span className="text-xs font-black uppercase tracking-widest text-moss">
          AstraNova
        </span>

        <span className="text-xs font-black">
          {guide.console} · {guide.year}
        </span>
      </div>
    </Link>
  );
}
