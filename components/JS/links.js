const diceGame = "https://dicegame-dun-eta.vercel.app/";
const drumKit = "https://drumkitjs-nine.vercel.app";
const choCountries = "https://cho-countries.vercel.app/";
const recipeBook = "https://recipe-book-lemon.vercel.app";
const animeVault = "https://animelist-eight.vercel.app/";
const bibleapp = "https://bible-ochre.vercel.app/";
const moviehub = "https://movieapi-gcve.onrender.com/"
const ytlinker = "https://ytlinker.vercel.app/"
const businessManager = "https://businessmanager-khaki.vercel.app/"
const projects = [
  diceGame,
  drumKit,
  moviehub,
  choCountries,
  animeVault,
  recipeBook,
  ytlinker,
  bibleapp,
  businessManager,
];
const images = [
  "dice.png",
  "drumkit.png",
  "moviehub2.png",
  "cho-countries.png",
  "animevault.png",
  "recipebook.png",
  "ytlinker.png",
  "bibleapp.png",
  "business-manager.png"
];
const descs = [
  "A simple 2 player web based dice game",
  "A web based drum kit for practising beats",
  "An API for getting movies and series info, you can also find suggestions based on recommend route and putting in a genre",
  "Explore details on any Country in the world, such as call codes, population, coat of arms and more",
  "Explore the diverse realm of Animes, in order of popularity according to MAL",
  "Explore recipes of different meals, search by ingredients, categories or even countries",
  "Download youtube videos for free, just paste the youtube URL and goo(down for now)",
  "This is basically an online Bible with tons of modern features, like multiple Bible versions, and the ability to look up a verse based on relevant text or keyphrase",
  "Manage Your daily Business transactions and calculate profits, create invoices for your transactions, and monitor your Business growth with charts"
];
const stacks = [
    "HTML, CSS, JavaScript",
    "HTML, CSS, JavaScript",
    "Go, Gin",
    "HTML, CSS, JavaScript",
    "Framer, Next, TailwindCSS",
    "Next, TailwindCSS, TypeScript and JavaScript",
    "React, JavaScript, TailwindCSS",
    "Next, TailwindCSS, TypeScript and JavaScript",
    "Next, TailwindCSS, TypeScript"
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
