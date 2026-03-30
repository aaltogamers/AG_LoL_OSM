import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const SponsorLogo = ({ sponsor, logos }) => {
  const getImageUrl = (logoName) => {
    const logo = logos.find(([oneToneLogo, _]) =>
      oneToneLogo.images.sources.some((source) =>
        source.srcSet.includes(logoName),
      ),
    );
    // Workaround for duotone not working for TTERLogo
    console.log(logo);
    return logo[sponsor.label === "TTER" ? 1 : 0];
  };

  return (
    <div className="md:p-5 py-2 px-2 w-1/3 md:w-60 md:max-w-fit flex justify-center">
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
