export const pokemonBlue = {
  slug: "pokemon-version-bleue",
  title: "Pokémon Version Bleue",
  console: "Game Boy",
  year: "1996",
  image: "🔵",
  cover: 'https://www.gamecash.fr/thumbnail-400-450/pokemon-bleu-gb-e106882.jpg',
  difficulty: "7,4",
  votes: 128,
  completion: "18–25 h",
  achievements: 151,
  intro:
    "De Bourg Palette au Panthéon, voici une feuille de route pensée pour t’aider à obtenir chaque succès sans rater les objectifs importants.",
};

export const games = [pokemonBlue];

export const achievementExamples = [
  {
    id: 1,
    icon: "⚡",
    title: "Premier pas à Kanto",
    description: "Choisis ton premier Pokémon chez le Professeur Chen.",
    points: 5,
    difficulty: "Facile",
    video: false,
  },
  {
    id: 2,
    icon: "🏆",
    title: "La Ligue de Kanto",
    description: "Bats le Conseil 4 et deviens Maître de la Ligue Pokémon.",
    points: 25,
    difficulty: "Moyen",
    video: true,
  },
  {
    id: 3,
    icon: "🗺️",
    title: "Explorateur de Kanto",
    description: "Obtiens les 8 badges de la région.",
    points: 10,
    difficulty: "Moyen",
    video: false,
  },
  {
    id: 4,
    icon: "⭐",
    title: "Attrape-les tous",
    description: "Complète le Pokédex avec les 151 Pokémon.",
    points: 50,
    difficulty: "Difficile",
    video: true,
  },
];
