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
  defaultLocale: languages.FI,
  title: translations.tournamentTitle,
  shortTitle: translations.tournamentTitleShort,
  description: translations.siteDescription,
  author: "Aalto Gamers",
  domain: translations.homePageLink,
  socialMedia: [
    {
      label: "Instagram",
      url: "https://aaltogamers.fi/link/instagram?ref=osmwebsite",
      Icon: FaInstagram,
    },
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
      label: "Eduix",
      link: "https://www.eduix.fi/",
      logoName: "eduixlogo",
    },
    {
      label: "Lenovo",
      link: "https://www.lenovo.com/us/en/legion/",
      logoName: "legion",
    },
    {
      label: "TTERWhite", // Change to "TTER" if this needs to be black
      link: "https://tter.ayy.fi/en/tte-fund/",
      logoName: "tterlogo",
    },    
    {
      label: "Cave Entertainment",
      link: "https://www.caveentertainment.fi/",
      logoName: "Cave_entertainment_logo",
    },
    /* TODO: Uncomment once deal is official
    {
      label: "Monster",
      link: "https://www.monsterenergy.com/fi-fi/",
      logoName: "monsterlogo",
    },
    */
  ],
};

export const markdownReplacements = {
  registrationStartDate: "14.04.",
  registrationEndDate: "11.05.",
  qualifiersDate: "17.05.",
  finalsDate: "24.05.",
  qualifiersStart: "12:00",
  qualifiersEnd: "19:00",
  finalsStart: "12:00",
  finalsEnd: "23:00",
  signUpLink: "https://forms.gle/SbyPrXWqzJwDnS3GA", // TODO: Update once new link is available
  ticketLink: "https://kide.app/events/52662ade-10d0-4863-af06-578036125f7b", // TODO: Update once new link is available
  firstPrize: "500",
  secondPrize: "250",
  thirdPrize: "125"
};
