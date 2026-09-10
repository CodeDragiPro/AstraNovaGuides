import { Gamepad2 } from "lucide-react";
import SearchBar from "../components/SearchBar";


export default function Hero() {
  return (
    <>
      <section className=" overflow-hidden border-b-2 border-arcade">
        <div className="mx-auto px-5 py-20 sm:px-8 md:py-28">
          <p className="mx-auto mb-5 flex w-fit items-center gap-2 border-2 border-sun bg-sun px-3 py-1 text-xs font-black uppercase tracking-widest text-paper text-center">
            <Gamepad2 size={20} /> Communauté Francophone de Chasseur de Succès Rétro
          </p>
          <h1 className="mx-auto max-w-4xl text-center font-pixel text-5xl leading-[.92] tracking-tighter sm:text-7xl">
            Ton prochain <span className="text-arcade animate-pulse">100 %</span>
            <br />
            commence ici.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-ink/75">
            Cherche ton jeu, consulte le guide, puis débloque chaque succès avec
            les astuces et vidéos de la communauté.
          </p>
          <div className="mx-auto mt-9">
            <SearchBar large />
          </div>
        </div>
      </section>
    </>
  );
}
