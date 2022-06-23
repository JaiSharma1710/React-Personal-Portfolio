import tindog from "../../Assets/Projects/tindog.png";
import Skynews from "../../Assets/Projects/SkyNews.png";
import Dicegame from "../../Assets/Projects/Dicegame.png";
import Drumkit from "../../Assets/Projects/drumkit.png";
import imnofood from "../../Assets/Projects/imnofood.png";
import keeper from "../../Assets/Projects/keeper.png";
import Simongame from "../../Assets/Projects/Simongame.png";
import textutils from "../../Assets/Projects/textutils.png";
import todo from "../../Assets/Projects/todo.png";
import TributePage from "../../Assets/Projects/TributePage.png";
import Weather from "../../Assets/Projects/weather.png";
import Peach from "../../Assets/Projects/peach.png";

const data = [
  {
    id: 1,
    title: "SkyNews App",
    img: Skynews,
    github: "https://github.com/JaiSharma1710/Sky-News-Web-App",
    live: "https://github.com/JaiSharma1710/Sky-News-Web-App",
  },
  {
    id: 2,
    title: "Weather App",
    img: Weather,
    github: "https://github.com/JaiSharma1710/Weather-App",
    live: "https://62b42e94508b4f685ae02284--enchanting-torrone-4c13df.netlify.app/",
  },
  {
    id: 3,
    title: "Keeper App",
    img: keeper,
    github: "https://github.com/JaiSharma1710/Keeper-App-React",
    live: "https://62b431fb1c17666d408077f4--euphonious-kheer-de6eb6.netlify.app/",
  },
  {
    id: 4,
    title: "Todo App",
    img: todo,
    github: "https://github.com/JaiSharma1710/React-Todo-List",
    live: "https://62b42f6886ac7f67c8b472d5--bucolic-malabi-b65f02.netlify.app/",
  },
  {
    id: 5,
    title: "Textutils",
    img: textutils,
    github: "https://github.com/JaiSharma1710/TextUtils-React",
    live: "https://62b42e0186ac7f6792b46fe5--peppy-selkie-86b179.netlify.app/",
  },
  {
    id: 6,
    title: "Omnifood Landing",
    img: imnofood,
    github: "https://github.com/JaiSharma1710/Omnifood-Landing-Page",
    live: "https://jaisharma1710.github.io/Omnifood-Landing-Page/",
  },
];

const fullData = [
  ...data,

  {
    id: 7,
    title: "Peach Landing",
    img: Peach,
    github: "https://github.com/JaiSharma1710/Peach-Frontend-for-fiverr-client",
    live: "https://jaisharma1710.github.io/Peach-Frontend-for-fiverr-client/",
  },
  {
    id: 8,
    title: "Tindog",
    img: tindog,
    github: "https://github.com/JaiSharma1710/tindog",
    live: "https://jaisharma1710.github.io/tindog/",
  },

  {
    id: 9,
    title: "Simon game",
    img: Simongame,
    github: "https://github.com/JaiSharma1710/Simon-Game-In-JS",
    live: "https://jaisharma1710.github.io/Simon-Game-In-JS/",
  },
  {
    id: 10,
    title: "Dice game",
    img: Dicegame,
    github: "https://github.com/JaiSharma1710/diceGame",
    live: "https://jaisharma1710.github.io/diceGame/",
  },
  {
    id: 11,
    title: "Drumkit",
    img: Drumkit,
    github: "https://github.com/JaiSharma1710/Drum-kit",
    live: "https://jaisharma1710.github.io/Drum-kit/",
  },
  {
    id: 12,
    title: "Tribute Page",
    img: TributePage,
    github: "https://github.com/JaiSharma1710/tribute-page-freecode-camp",
    live: "https://jaisharma1710.github.io/technical-documentation-page-freecodecamp/",
  },
];

export { data, fullData };
