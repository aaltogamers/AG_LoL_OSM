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
      className="bg-cover bg-no-repeat bg-center min-h-screen min-w-screen flex flex-col justify-center items-center text-center font-phage tracking-widest px-2"
    >
      <h1 className="text-4xl lg:text-[5rem]">
        {t(translations.titles.landingTitle1)}
      </h1>
      <div className="text-xl lg:text-3xl">
        <h2 className="pt-4">{t(translations.titles.landingTitle2)}</h2>
        <h2 className="pt-4">
          2000<span className="font-ethno">€</span> PRIZE POOL
        </h2>
      </div>
      <SponsorList></SponsorList>
    </BackgroundImage>
  );
};

export default Hero;
