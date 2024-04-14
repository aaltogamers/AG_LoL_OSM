import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const SponsorLogo = ({ sponsor, logos }) => {
  const getImageUrl = (logoName) => {
    const logo = logos.find(([transformedLogo, _]) =>
      transformedLogo.images.sources.some((source) => source.srcSet.includes(logoName))
    );
    // Workaround for duotone not working for TTERLogo
    return logo[sponsor.label === "TTER" ? 1 : 0]
  };

  return (
    <div className="md:p-5 py-3 px-5 w-1/2 md:w-60 md:max-w-fit flex justify-center">
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
