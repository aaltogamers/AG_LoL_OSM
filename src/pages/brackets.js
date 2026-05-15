import React from "react";

const Brackets = () => {
  return (
    <div className="container min-h-[100vh]">
      <h1 className="text-3xl md:text-5xl font-outfit-bold uppercase pl-4 md:pl-10 pt-10 absolute ">
        OSM 2026 Brackets
      </h1>

      <iframe
        src="https://aaltogamers.fi/tournaments/osm-2026?stream&textColor=%23e8fefb&teamNameColor=%23302a4b&loseScoreColor=%236EA4BF&winScoreColor=%23FAA916&roundColor=%23211e36&connectorColor=%23FAA916&dividerColor=%23331E36&titleFontSize=30&basicFontSize=24&teamHeight=36&teamWidth=200&teamGapX=20"
        title="OSM 2026 Brackets"
        className="w-[100vw] h-[100vh] md:pl-10 pb-10 pt-28"
      ></iframe>
    </div>
  );
};

export default Brackets;
