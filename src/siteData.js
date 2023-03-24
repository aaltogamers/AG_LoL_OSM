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
      label: "Espoo",
      link: "https://www.espoo.fi/fi",
      logoName: "espoologo",
    },
    {
      label: "Digia",
      link: "https://digia.com/rekrytointi",
      logoName: "digialogo",
    },
    {
      label: "OSM",
      link: "https://www.osmkisat.fi/",
      logoName: "OSM-LOGO",
    },
    /*
    {
      label: "ED",
      link: "https://www.hartwall.fi/juomat/energiajuomat/ed/",
      logoName: "edlogo",
    },
    */
    {
      label: "Lenovo",
      link: "https://www.lenovo.com/us/en/legion/",
      logoName: "legion",
      invert: true,
    },
    {
      label: "K-market Otaniemi",
      link: "https://www.k-ruoka.fi/kauppa/k-market-otaniemi",
      logoName: "kmarket",
      invert: true,
    },
  ],
};

export const markdownReplacements = {
  registrationStartDate: "31.03.",
  registrationEndDate: "10.05.",
  qualifiersDate: "13.05.",
  finalsDate: "27.05.",
};
