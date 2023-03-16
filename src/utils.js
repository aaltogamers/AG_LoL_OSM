import { siteInfo } from "./siteData";

export const translate = (translation, locale) => {
  if (!locale) {
    locale = siteInfo.defaultLocale;
  }
  return translation[locale] || "";
};
