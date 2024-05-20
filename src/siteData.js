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
      url: "http://www.instagram.com/aaltogamers/",
      Icon: FaInstagram,
    },
    {
      label: "Telegram",
      url: "https://t.me/+1nNBzegP0hthMmM0",
      Icon: FaTelegram,
    },
    {
      label: "Discord",
      url: "https://discord.gg/Ew7nGQqHgc",
      Icon: FaDiscord,
    },
    {
      label: "Twitch",
      url: "http://twitch.tv/aaltogamers",
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
      label: "TTER",
      link: "https://tter.ayy.fi/en/tte-fund/",
      logoName: "tterlogo",
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
      label: "ED",
      link: "https://www.edenergydrink.fi/",
      logoName: "EDlogo",
    },
  ],
};

export const markdownReplacements = {
  registrationStartDate: "10.04.",
  registrationEndDate: "10.05.",
  qualifiersDate: "18.05.",
  finalsDate: "26.05.",
  qualifiersStart: "12:00",
  qualifiersEnd: "19:00",
  finalsStart: "12:00",
  finalsEnd: "23:00",
  signUpLink: "https://forms.gle/SbyPrXWqzJwDnS3GA",
};
