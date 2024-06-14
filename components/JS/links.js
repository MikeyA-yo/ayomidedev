const diceGame = "https://dicegame-dun-eta.vercel.app/";
const drumKit = "https://drumkitjs-nine.vercel.app";
const choCountries = "https://cho-countries.vercel.app/";
const recipeBook = "https://recipe-book-lemon.vercel.app";
const animeVault = "https://animelist-eight.vercel.app/";
const bibleapp = "https://bible-ochre.vercel.app/";

const projects = [
  diceGame,
  drumKit,
  choCountries,
  animeVault,
  recipeBook,
  bibleapp,
];
const images = [
  "dice.png",
  "drumkit.png",
  "cho-countries.png",
  "animevault.png",
  "recipebook.png",
  "bibleapp.png",
];
const descs = [
  "A simple 2 player web based dice game",
  "A web based drum kit for practising beats",
  "Explore details on any country in the world, such as call codes, population, coat of arms and more",
  "Explore the diverse realm of animes, in order of popularity according to MAL",
  "Looking for what you can make with the ingredients you have, or if you're looking for something vegan or desserts? Why not come over and visit recipe book, with tons of amazing recipes, and with an easy way of filtering out by categories ",
  "This is basically an online bible with tons of modern features, like multiple bible versions, and the ability to look up a verse based on relevant text or keyphrase",
];
const stacks = [
    "HTML, CSS, JavaScript",
    "HTML, CSS, JavaScript",
    "HTML, CSS, JavaScript",
    "Framer, Next, Tailwind",
    "Next, Tailwind",
    "Next, Tailwind, CSS"
]
let projectObject = projects.map((project, i) => {
  return {
    name: images[i].slice(0, -4),
    image: images[i],
    desc:descs[i], 
    stack:stacks[i]
  };
});
console.log(projectObject);
export const projectObjSort = projectObject.reverse();
