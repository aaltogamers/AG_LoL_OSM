import React, { useContext } from "react";
import { useLocation } from "@reach/router";
import { languages } from "../translations.js";
import { LanguageContext, LANGUAGE_STORAGE_KEY } from "../contexts/Language";

const LanguageSelector = () => {
  const [langState, dispatch] = useContext(LanguageContext);
  const location = useLocation();

  const pathname =
    (location && location.pathname) ||
    (typeof window !== "undefined" &&
      window.location &&
      window.location.pathname) ||
    "";

  const normalizedPathname = pathname.replace(/\/+$/, "");

  if (normalizedPathname === "/brackets") {
    return null;
  }

  const setLanguageTo = (langString) => {
    dispatch({ type: "set_language", value: langString });
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, langString);
    } catch {
      /* ignore */
    }
  };
  return (
    <div className="justify-between font-barlow fixed right-0 top-0 z-10">
      {Object.entries(languages).map(([key, langString]) => (
        <button
          className={`text-xl p-4 ${
            langString === langState && "text-dark font-bold"
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
