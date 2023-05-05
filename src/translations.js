const languages = {
  FI: "fi",
  EN: "en",
};

const translations = {
  tournamentTitle: {
    [languages.FI]: "League of Legends Opiskelijoiden SM-kisat 2023",
    [languages.EN]: "League of Legends Finnish Student Championships 2023",
  },
  tournamentTitleShort: {
    [languages.FI]: "LoL OSM 2023",
    [languages.EN]: "LoL FSC 2023",
  },
  homePageLink: {
    [languages.FI]: `https://osm.aaltogamers.fi`,
    [languages.EN]: `https://osm.aaltogamers.fi`,
  },
  siteDescription: {
    [languages.FI]:
      "Vastaa kutsuun - League of Legendsin opiskelijoiden SM-kisat tulevat 13.-27.5.2023!",
    [languages.EN]:
      "Answer the Call - League of Legends Finnish Student Championships are coming on 13.-27.5.2023!",
  },
  titles: {
    landingTitle1: {
      [languages.FI]: "LEAGUE OF LEGENDS",
      [languages.EN]: "LEAGUE OF LEGENDS",
    },
    landingTitle2: {
      [languages.FI]: "OPISKELIJOIDEN SM-KISAT",
      [languages.EN]: "FINNISH STUDENT CHAMPIONSHIPS",
    },
  },
};
module.exports = {
  languages,
  translations,
};
