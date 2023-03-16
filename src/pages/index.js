import React, { useContext } from "react";
import { LanguageProvider } from "../contexts/Language";
import Head from "../components/Head";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Module from "../components/Module";
import { graphql, useStaticQuery } from "gatsby";
import SocialIcons from "../components/SocialIcons";
import LanguageSelector from "../components/LanguageSelector";
import { LanguageContext } from "../contexts/Language";

const IndexPage = () => {
  const [langState] = useContext(LanguageContext);
  const modulesData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
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
      const { title, order } = node.frontmatter;
      return { content, title, order, lang };
    })
    .filter(({ lang }) => lang === langState);
  return (
    <main className="bg-black font-mono">
      <Head />
      <LanguageSelector />
      <Hero />
      <div className="text-center px-8 md:px-48 md:text-left">
        {modules
          .sort((a, b) => a.order - b.order)
          .map((moduleData) => (
            <Module moduleData={moduleData} key={moduleData.title} />
          ))}
        <SocialIcons />
      </div>
      <Footer />
    </main>
  );
};

const IndexWithProviders = () => (
  <LanguageProvider>
    <IndexPage></IndexPage>
  </LanguageProvider>
);

export default IndexWithProviders;
