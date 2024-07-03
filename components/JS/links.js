const diceGame = "https://dicegame-dun-eta.vercel.app/";
const drumKit = "https://drumkitjs-nine.vercel.app";
const choCountries = "https://cho-countries.vercel.app/";
const recipeBook = "https://recipe-book-lemon.vercel.app";
const animeVault = "https://animelist-eight.vercel.app/";
const bibleapp = "https://bible-ochre.vercel.app/";
const moviehub = "https://movieapi-gcve.onrender.com/"
const ytlinker = "https://ytlinker.vercel.app/"
const projects = [
  diceGame,
  drumKit,
  moviehub,
  choCountries,
  animeVault,
  recipeBook,
  ytlinker,
  bibleapp,
];
const images = [
  "dice.png",
  "drumkit.png",
  "moviehub.png",
  "cho-countries.png",
  "animevault.png",
  "recipebook.png",
  "ytlinker.png",
  "bibleapp.png",
];
const descs = [
  "A simple 2 player web based dice game",
  "A web based drum kit for practising beats",
  "An API for getting movies and series info, you can also find suggestions based on recommend route and putting in a genre",
  "Explore details on any Country in the world, such as call codes, population, coat of arms and more",
  "Explore the diverse realm of Animes, in order of popularity according to MAL",
  "Looking for what you can make with the ingredients you have, or if you're looking for something vegan or desserts? Why not come over and visit recipe book, with tons of amazing recipes, and with an easy way of filtering out by categories ",
  "Download youtube videos for free, just paste the youtube URL and goo",
  "This is basically an online Bible with tons of modern features, like multiple Bible versions, and the ability to look up a verse based on relevant text or keyphrase",
];
const stacks = [
    "HTML, CSS, JavaScript",
    "HTML, CSS, JavaScript",
    "Go, Gin",
    "HTML, CSS, JavaScript",
    "Framer, Next, TailwindCSS",
    "Next, TailwindCSS, TypeScript and JavaScript",
    "React, JavaScript, TailwindCSS",
    "Next, TailwindCSS, TypeScript and JavaScript"
]
let projectObject = projects.map((project, i) => {
  return {
    link:project,
    name: images[i].slice(0, -4),
    image: images[i],
    desc:descs[i], 
    stack:stacks[i]
  };
});
export const projectObjSort = projectObject.reverse();
