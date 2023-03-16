const languages = {
  FI: "fi",
  EN: "en",
};

const translations = {
  tournamentTitle: {
    [languages.FI]: "League of Legends Opiskelijoiden SM-kisat 2022",
    [languages.EN]: "League of Legends Finnish Student Championships 2022",
  },
  tournamentTitleShort: {
    [languages.FI]: "LoL OSM 2022",
    [languages.EN]: "LoL FSC 2022",
  },
  homePageLink: {
    [languages.FI]: `https://osm.aaltogamers.fi`,
    [languages.EN]: `https://osm.aaltogamers.fi`,
  },
  siteDescription: {
    [languages.FI]:
      "Vastaa kutsuun - League of Legendsin opiskelijoiden SM-kisat tulevat 14.-21.5.2022!",
    [languages.EN]:
      "Answer the Call - League of Legends Finnish Student Championships are coming on 14.-21.5.2022!",
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
    landingTitle3: {
      [languages.FI]: "2000€ PRIZE POOL",
      [languages.EN]: "2000€ PRIZE POOL",
    },
  },
};
module.exports = {
  languages,
  translations,
};
