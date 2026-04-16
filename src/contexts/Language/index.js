import React from "react";
import { getUserLocales } from "get-user-locale";
import { languages } from "../../translations";
import { languageReducer, languageInitialState } from "./reducer";

export const LANGUAGE_STORAGE_KEY = "lol-osm-lang";

export const LanguageContext = React.createContext({
  state: languageInitialState,
  dispatch: () => null,
});

const primaryLanguageSubtag = (locale) =>
  locale.split(/[-_]/)[0].toLowerCase();

const prefersEnglishLocale = (locale) =>
  primaryLanguageSubtag(locale) === languages.EN;

const prefersFinnishLocale = (locale) =>
  primaryLanguageSubtag(locale) === languages.FI;

export const LanguageProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    languageReducer,
    languageInitialState
  );

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (stored === languages.FI || stored === languages.EN) {
        dispatch({ type: "set_language", value: stored });
        return;
      }
    } catch {
      /* ignore private mode / denied */
    }
    const userLocales = getUserLocales();
    const firstEn = userLocales.findIndex(prefersEnglishLocale);
    const firstFi = userLocales.findIndex(prefersFinnishLocale);
    const enRank = firstEn === -1 ? Number.POSITIVE_INFINITY : firstEn;
    const fiRank = firstFi === -1 ? Number.POSITIVE_INFINITY : firstFi;
    const wantsFi = fiRank < enRank;
    dispatch({
      type: "set_language",
      value: wantsFi ? languages.FI : languages.EN,
    });
  }, []);

  return (
    <LanguageContext.Provider value={[state, dispatch]}>
      {children}
    </LanguageContext.Provider>
  );
};
