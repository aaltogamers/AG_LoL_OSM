import { translations, languages } from "./translations";
import {
  FaDiscord,
  FaTelegram,
  FaInstagram,
  FaTwitch,
  FaGlobe,
} from "react-icons/fa";

export const siteInfo = {
  timezone: "Europe/Helsinki",
  defaultLocale: languages.EN,
  title: translations.tournamentTitle,
  shortTitle: translations.tournamentTitleShort,
  description: translations.siteDescription,
  author: "Aalto Gamers",
  domain: translations.homePageLink,
  socialMedia: [
    {
      label: "Telegram",
      url: "https://aaltogamers.fi/link/telegram?ref=osmwebsite",
      Icon: FaTelegram,
    },
    {
      label: "Discord",
      url: "https://aaltogamers.fi/link/discord?ref=osmwebsite",
      Icon: FaDiscord,
    },
    {
      label: "Instagram",
      url: "https://aaltogamers.fi/link/instagram?ref=osmwebsite",
      Icon: FaInstagram,
    },
    {
      label: "Twitch",
      url: "https://aaltogamers.fi/link/twitch?ref=osmwebsite",
      Icon: FaTwitch,
    },
    {
      label: "Aaltogamers.fi",
      url: "http://aaltogamers.fi",
      Icon: FaGlobe,
    },
  ],
  sponsors: [
    {
      label: "AG",
      link: "http://aaltogamers.fi",
      logoName: "aglogo",
    },
    {
      label: "OSM",
      link: "https://www.osmkisat.fi/",
      logoName: "OSM-LOGO",
    },
    {
      label: "Espoo",
      link: "https://www.espoo.fi/fi",
      logoName: "espoologo",
    },
    {
      label: "Lenovo",
      link: "https://www.lenovo.com/us/en/legion/",
      logoName: "legion",
    },
    {
      label: "Monster",
      link: "https://www.monsterenergy.com/fi-fi/",
      logoName: "monsterlogo",
    },
  ],
};

export const markdownReplacements = {
  registrationStartDate: "16.04.",
  registrationEndDate: "10.05.",
  qualifiersDate: "16.05.",
  finalsDate: "23.05.",
  qualifiersStart: "12:00",
  qualifiersEnd: "19:00",
  finalsStart: "12:00",
  finalsEnd: "23:00",
  signUpLink:
    "https://docs.google.com/forms/d/e/1FAIpQLSey7mWrfU4sW1mbKEYbHhLMAdnm8ClkFBtbfEHuc9j0BpysBQ/viewform?usp=dialog",
  ticketLink: "https//aaltogamers.fi/link/osmtickets?ref=osmwebsite", // TODO
  firstPrize: "500",
  secondPrize: "250",
  thirdPrize: "125",
  earliestGraduationDate: "01.01.2025",
};
