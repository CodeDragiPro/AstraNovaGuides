import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar({ large = false }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();
    if (query.trim().toLowerCase().includes("pokemon"))
      navigate("/jeux/pokemon-version-bleue");
    else navigate("/jeux");
  }

  return (
    <form
      onSubmit={submit}
      className={`mx-auto flex rounded-full border-2 border-moss bg-paper ${large ? "max-w-2xl  shadow-[0_0_30px_rgba(0,229,213,.18)]" : ""}`}
    >
      <Search className="m-3 shrink-0 text-moss" size={large ? 24 : 18} />
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className={`min-w-0 flex-1 bg-transparent outline-none placeholder:text-ink/45 ${large ? "py-3 text-lg" : "py-2 text-sm"}`}
        placeholder="Rechercher un jeu : Pokémon Version Bleue…"
        aria-label="Rechercher un jeu"
      />
      <button
        className="rounded-full bg-arcade px-4 font-medium  hover:bg-moss hover:text-paper"
        type="submit"
      >
        Rechercher
      </button>
    </form>
  );
}
