import React from "react";

const Brackets = () => {
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  const isMobile = windowWidth < 768;

  const bracketsConfig = {
    mobile: {
      textColor: "#e8fefb",
      teamNameColor: "#302a4b",
      loseScoreColor: "#6EA4BF",
      winScoreColor: "#FAA916",
      roundColor: "#211e36",
      connectorColor: "#FAA916",
      dividerColor: "#331E36",
      titleFontSize: 20,
      basicFontSize: 16,
      teamHeight: 20,
      teamWidth: 200,
      teamGapX: 16,
    },
    desktop: {
      textColor: "#e8fefb",
      teamNameColor: "#302a4b",
      loseScoreColor: "#6EA4BF",
      winScoreColor: "#FAA916",
      roundColor: "#211e36",
      connectorColor: "#FAA916",
      dividerColor: "#331E36",
      titleFontSize: 30,
      basicFontSize: 24,
      teamHeight: 36,
      teamWidth: 200,
      teamGapX: 20,
    },
  };

  const buildBracketsUrl = (config) => {
    const baseUrl = "https://aaltogamers.fi/tournaments/osm-2026?stream";
    const params = new URLSearchParams();

    Object.entries(config).forEach(([key, value]) => {
      params.append(key, value);
    });

    return `${baseUrl}&${params.toString()}`;
  };

  const config = isMobile ? bracketsConfig.mobile : bracketsConfig.desktop;
  const url = buildBracketsUrl(config);

  return (
    <div className="container min-h-[100vh]">
      <h1 className="text-3xl md:text-5xl font-outfit-bold uppercase pl-4 md:pl-10 pt-10 absolute ">
        OSM 2026 Brackets
      </h1>

      <iframe
        src={url}
        title="OSM 2026 Brackets"
        className="w-[100vw] h-[100vh] md:pl-10 pb-10 pt-28"
      ></iframe>
    </div>
  );
};

export default Brackets;
