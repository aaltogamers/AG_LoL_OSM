const languages = {
  FI: "fi",
  EN: "en",
};

const translations = {
  tournamentTitle: {
    [languages.FI]: "League of Legends Opiskelijoiden SM-kisat 2026",
    [languages.EN]: "League of Legends Finnish Student Championships 2026",
  },
  tournamentTitleShort: {
    [languages.FI]: "LoL OSM 2026",
    [languages.EN]: "LoL FSC 2026",
  },
  homePageLink: {
    [languages.FI]: `https://osm.aaltogamers.fi`,
    [languages.EN]: `https://osm.aaltogamers.fi`,
  },
  siteDescription: {
    [languages.FI]:
      "Vastaa kutsuun - League of Legendsin opiskelijoiden SM-kisat tulevat 16.- 23.5.2026!",
    [languages.EN]:
      "Answer the Call - League of Legends Finnish Student Championships are coming on 16.-23.5.2026!",
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
