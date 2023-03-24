import React, { useContext } from "react";
import { languages } from "../translations.js";
import { LanguageContext } from "../contexts/Language";
import { getUserLocales } from "get-user-locale";

const LanguageSelector = () => {
  const [langState, dispatch] = useContext(LanguageContext);
  const userLocales = getUserLocales();
  const setLanguageTo = (langString) => {
    dispatch({ type: "set_language", value: langString });
  };
  if (langState) {
  } else if (
    userLocales.find((locale) => locale.toLowerCase().includes(languages.FI))
  ) {
    setLanguageTo(languages.FI);
  } else {
    setLanguageTo(languages.EN);
  }
  return (
    <div className="justify-between fixed right-0 top-0 z-10">
      {Object.entries(languages).map(([key, langString]) => (
        <button
          className={`text-xl p-4 ${
            langString === langState && "text-link font-bold"
          }`}
          key={key}
          onClick={() => setLanguageTo(langString)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
