import React, { useContext } from "react";
import { translations } from "../translations";
import { LanguageContext } from "../contexts/Language";
import { translate } from "../utils";
import SponsorList from "./SponsorsList";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "landing.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const imageData = data.desktop.childImageSharp.fluid;
  const [langState] = useContext(LanguageContext);
  const t = (translation) => translate(translation, langState);
  return (
    <BackgroundImage
      fluid={imageData}
      className="bg-cover bg-fixed bg-no-repeat bg-center min-h-screen min-w-screen flex flex-col justify-end items-center text-center tracking-widest px-2"
    >
      <div
        className="w-full h-full absolute z-0"
        style={{
          background: "linear-gradient(0deg, #00000050 50%, #ffffff44 100%)", // Makes text readable against background
        }}
      ></div>

      <div className="md:mb-0 z-10">
        <h1 className="font-outfit-bold text-5xl lg:text-8xl [text-shadow:_2px_4px_4px_rgb(255_255_255_/_40%)]">
          {t(translations.titles.landingTitle1)}
        </h1>
        <div className="pt-2">
          <h2 className="font-outfit-regular md:mt-8 text-xl lg:text-6xl [text-shadow:_2px_4px_4px_rgb(255_255_255_/_40%)]">
            {t(translations.titles.landingTitle2)}
          </h2>
          <h2 className="font-space-grotesk-regular md:pt-4 text-xl lg:text-5xl [text-shadow:_2px_4px_4px_rgb(255_255_255_/_40%)]">
            1000€ Prize Pool
          </h2>
        </div>
      </div>
      <SponsorList />
    </BackgroundImage>
  );
};

export default Hero;
