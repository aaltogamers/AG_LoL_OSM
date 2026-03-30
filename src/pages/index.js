import React, { useContext } from "react";
import Hero from "../components/Hero";
import Module from "../components/Module";
import { graphql, useStaticQuery } from "gatsby";
import SocialIcons from "../components/SocialIcons";
import { LanguageContext } from "../contexts/Language";
import longCrest from "../images/crest_long.png";
import longerCrest from "../images/crest_longer.png";

const IndexPage = () => {
  const [langState] = useContext(LanguageContext);
  const modulesData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            page
            order
          }
          rawMarkdownBody
          fileAbsolutePath
        }
      }
    }
  `);
  const modules = modulesData.allMarkdownRemark.nodes
    .map((node) => {
      const content = node.rawMarkdownBody;
      const lang = node.fileAbsolutePath.includes("finnish") ? "fi" : "en";
      const { title, page, order } = node.frontmatter;
      return { content, title, page, order, lang };
    })
    .filter(({ lang, page }) => lang === langState && page === "index");
  return (
    <>
      <Hero />
      <div className="relative">
        <img
          src={longCrest}
          alt="Demacia Crest"
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full block md:hidden"
        />
        <img
          src={longerCrest}
          alt="Demacia Crest"
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full hidden md:block"
        />
      </div>
      <div className="container mx-auto pt-8 px-8 md:px-48 text-left">
        {modules
          .sort((a, b) => a.order - b.order)
          .map((moduleData) => (
            <Module moduleData={moduleData} key={moduleData.title} />
          ))}
        <SocialIcons />
      </div>
    </>
  );
};

export default IndexPage;
