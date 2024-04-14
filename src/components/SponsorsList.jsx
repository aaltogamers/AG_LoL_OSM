import React from "react";
import { siteInfo } from "../siteData";
import SponsorLogo from "./SponsorLogo";
import { graphql, useStaticQuery } from "gatsby";

const SponsorList = () => {
  //Fetch both duotone and original image as TTERLogo can't use it due to black + white
  const logos = useStaticQuery(graphql`
    query {
      logos: allFile(filter: { sourceInstanceName: { eq: "logos" } }) {
        edges {
          node {
            childImageSharp {
              transformedImageData: gatsbyImageData(
                layout: CONSTRAINED
                height: 100
                placeholder: TRACED_SVG
                transformOptions: {
                  duotone: { highlight: "#f7f7f7", shadow: "#f7f7f7" }
                }
              ),
              originalImageData: gatsbyImageData(
                layout: CONSTRAINED
                height: 100
                placeholder: TRACED_SVG
              )
            }
          }
        }
      }
    }
  `).logos.edges.map((edge) => [edge.node.childImageSharp.transformedImageData, edge.node.childImageSharp.originalImageData]);

  return (
    <div className="md:mt-10 mt-5 md:px-5 md:pb-5 pb-2 flex items-center self-start flex-wrap">
      {siteInfo.sponsors.map((sponsor) => (
        <SponsorLogo
          sponsor={sponsor}
          logos={logos}
          key={sponsor.label}
        ></SponsorLogo>
      ))}
    </div>
  );
};

export default SponsorList;
