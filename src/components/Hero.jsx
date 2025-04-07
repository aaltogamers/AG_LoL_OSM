import React, { useContext } from "react";
import { translations } from "../translations";
import { LanguageContext } from "../contexts/Language";
import { translate } from "../utils";
import SponsorList from "./SponsorsList";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "landing.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  const imageData = data.desktop.childImageSharp.fluid;
  const [langState] = useContext(LanguageContext);
  const t = (translation) => translate(translation, langState);
  return (
    <BackgroundImage
      fluid={imageData}
      className="bg-cover bg-fixed bg-no-repeat bg-center min-h-screen min-w-screen flex flex-col justify-end items-center text-center tracking-widest px-2"
    >
      <div className="md:mb-0 md:bg-none bg-[radial-gradient(closest-side,_var(--tw-gradient-stops))] from-darkred from-50 to-transparent" >
        <h1 className="font-outfit-bold text-4xl [text-shadow:_2px_2px_2px_rgb(255_255_255_/_40%)] lg:text-[7rem]">
          {t(translations.titles.landingTitle1)}
        </h1>
        <div className="md:pt-5 pt-2">
          <h2 className="font-outfit-regular [text-shadow:_2px_2px_2px_rgb(255_255_255_/_40%)] md:mt-8 text-xl lg:text-6xl">{t(translations.titles.landingTitle2)}</h2>
          <h2 className="font-space-grotesk-regular [text-shadow:_2px_2px_2px_rgb(255_255_255_/_40%)] md:pt-4 text-xl lg:text-5xl">
            1000€ Prize Pool
          </h2>
        </div>
      </div>
      <SponsorList />
    </BackgroundImage>
  );
};

export default Hero;
