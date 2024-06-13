const diceGame = 'https://dicegame-dun-eta.vercel.app/';
const drumKit = 'https://drumkitjs-nine.vercel.app';
const choCountries = 'https://cho-countries.vercel.app/';
const recipeBook = 'https://recipe-book-lemon.vercel.app'
const animeVault = 'https://animelist-eight.vercel.app/';
const bibleapp = 'https://bible-ochre.vercel.app/';

 const projects = [diceGame, drumKit, choCountries, animeVault, recipeBook, bibleapp];
 const images = ['','drumkit.png', 'cho-countries.png', 'animevault.png', 'recipebook.png','bibleapp.png']
let projectObject =  projects.map((project, i) => {
    return {
        name:images[i].slice(0,-4),
        image:images[i]
    }
 });
 export const projectObjSort = projectObject.reverse(); 