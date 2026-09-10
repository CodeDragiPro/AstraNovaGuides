import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GuideCard from "../components/GuideCard";
import { pokemonBlue } from "../data/games";

const guides = [pokemonBlue];

export default function LastGuides() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 ">
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-arcade">
            Derniers guides
          </p>
        </div>

        <Link
          to="/guides"
          className="hidden items-center gap-1 font-bold underline decoration-moss sm:flex"
        >
          Tous les guides
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>

      <div className="mt-8 sm:hidden">
        <Link
          to="/guides"
          className="flex items-center justify-center gap-2 border-2 border-ink px-4 py-3 font-black"
        >
          Tous les guides
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
