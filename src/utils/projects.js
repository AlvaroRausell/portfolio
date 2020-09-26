const silver = "#BDC3C7";
const bronze = "#A07934";
const special = "#99A0AE";
export default [
  {
    img: require("../images/easyNakup.png"),
    title: "easy nákup",
    description:
      "Street-based shopping portal that connects local business in rural areas to the wider population by using facial recognition to link to a user profile and processing hand-written shopping lists provided by that user",
    git: "https://github.com/lukakralj/easyNakup",
    devpost: "https://devpost.com/software/easy-nakup",
    awards: ["🥇 1st Place at Hack Kosice", "🥇 Best IoT Hack"],
    tags: ["IoT", "Face Recognition", "React.js"],
  },
  {
    img: require("../images/Alpaca.png"),
    title: "Alpaca",
    description:
      "Summarises lecture content by processing the slides and video recording using natural language processing and speech recognition technology",
    git: "https://github.com/AlvaroRausell/Alpaca",
    devpost: "https://devpost.com/software/alpaca-074ags",
    tags: ["NLP", "Java", "Speech-to-Text"],
    awards: ["🥇 1st Place at Royal Hackaway"],
  },
  {
    img: require("../images/hacktrain.png"),
    title: "traffiK",
    description:
      "Data visualisation tool to diagnose causes behind dwelling times in train stations, by allowing users to link delays to real life events",
    git: "https://github.com/AlvaroRausell/traffiK",
    devpost: "https://devpost.com/software/traffik",
    otherDistinctions: [
      { text: "🥉 3rd Place at Hacktrain 5.0", color: bronze },
    ],
  },
  {
    img: require("../images/btd.jpeg"),
    title: "Blood Test Diary",
    description:
      "Blood test appointment system developed for King's College Hospital",
    git: "https://github.com/AlvaroRausell/BloodTestDiary",
    tags: ["React.js", "Electron", "Node.js"],
  },
];
