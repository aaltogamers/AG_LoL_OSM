import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { markdownReplacements } from "../siteData";

const H2 = ({ children }) => (
  <h2 className="text-3xl md:text-5xl font-orbitron-black mb-8 uppercase">{children}</h2>
);

const H3 = ({ children }) => (
  <h2 className="text-xl font-barlow-bold mb-2">{children}</h2>
);

const P = ({ children }) => <p className="mb-8">{children}</p>;

const A = ({ children, href }) => (
  <a className="text-link hover:cursor-pointer hover:text-rose-300" href={href}>
    {children}
  </a>
);

const Module = ({ moduleData }) => {
  const components = {
    h2: H2,
    h3: H3,
    p: P,
    a: A,
  };
  const { title } = moduleData;
  var { content } = moduleData;
  Object.entries(markdownReplacements).forEach(([key, value]) => {
    content = content.replaceAll(`$${key}$`, value);
  });

  return (
    <div className="pt-8" id={title}>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
};

export default Module;
