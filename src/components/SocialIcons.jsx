import React from "react";
import { siteInfo } from "../siteData";

const SocialIcons = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      {siteInfo.socialMedia.map(({ url, Icon, label }) => (
        <a
          href={url}
          key={label}
          className="my-2 text-white hover:text-red flex items-center gap-4"
        >
          <Icon size={40} /> {label}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
