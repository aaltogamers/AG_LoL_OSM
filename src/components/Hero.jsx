import React, { useContext } from "react";
import { translations } from "../translations";
import { LanguageContext } from "../contexts/Language";
import { translate } from "../utils";
import SponsorList from "./SponsorsList";

const LandingModule = () => {
  const [langState] = useContext(LanguageContext);
  const t = (translation) => translate(translation, langState);
  return (
    <div className="bg-[url('../images/landing.webp')] bg-cover bg-no-repeat bg-center min-h-screen min-w-screen flex flex-col justify-center items-center text-center font-phage tracking-widest px-2">
      <h1 className="text-4xl lg:text-[5rem]">
        {t(translations.titles.landingTitle1)}
      </h1>
      <div className="text-xl lg:text-3xl">
        <h2 className="pt-4">{t(translations.titles.landingTitle2)}</h2>
        <h2 className="pt-4">{t(translations.titles.landingTitle3)}</h2>
      </div>
      <SponsorList></SponsorList>
    </div>
  );
};

export default LandingModule;
