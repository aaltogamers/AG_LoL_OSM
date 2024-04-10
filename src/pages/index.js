import React, { useContext } from "react";
import Hero from "../components/Hero";
import Module from "../components/Module";
import { graphql, useStaticQuery } from "gatsby";
import SocialIcons from "../components/SocialIcons";
import { LanguageContext } from "../contexts/Language";
//
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
