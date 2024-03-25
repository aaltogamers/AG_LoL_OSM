import { siteInfo } from "../../siteData";

export const languageReducer = (state, action) => {
  switch (action.type) {
    case "set_language":
      localStorage.setItem("locale", action.value);
      return action.value;

    default:
      return null;
  }
};

const getLocale = () => {
  const locale = localStorage.getItem("locale");
  if (["fi", "en"].includes(locale)) {
    return locale;
  }
  return siteInfo.defaultLocale;
};

export const languageInitialState = getLocale() ?? siteInfo.defaultLocale;
