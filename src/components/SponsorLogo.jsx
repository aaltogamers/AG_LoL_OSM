import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const SponsorLogo = ({ sponsor, logos }) => {
  const getImageUrl = (logoName) => {
    return logos.find((logo) =>
      logo.images.sources.some((source) => source.srcSet.includes(logoName))
    );
  };

  return (
    <div className="p-5 w-1/3 md:w-60">
      <a href={sponsor.link}>
        <GatsbyImage
          className="overflow-visible"
          image={getImageUrl(sponsor.logoName)}
          alt={sponsor.label}
        />
      </a>
    </div>
  );
};

export default SponsorLogo;
