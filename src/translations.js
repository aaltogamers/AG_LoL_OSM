const languages = {
  FI: "fi",
  EN: "en",
};

const translations = {
  tournamentTitle: {
    [languages.FI]: "League of Legends Opiskelijoiden SM-kisat 2024",
    [languages.EN]: "League of Legends Finnish Student Championships 2024",
  },
  tournamentTitleShort: {
    [languages.FI]: "LoL OSM 2024",
    [languages.EN]: "LoL FSC 2024",
  },
  homePageLink: {
    [languages.FI]: `https://osm.aaltogamers.fi`,
    [languages.EN]: `https://osm.aaltogamers.fi`,
  },
  siteDescription: {
    [languages.FI]:
      "Vastaa kutsuun - League of Legendsin opiskelijoiden SM-kisat tulevat 18.-26.5.2024!",
    [languages.EN]:
      "Answer the Call - League of Legends Finnish Student Championships are coming on 18.-26.5.2024!",
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
