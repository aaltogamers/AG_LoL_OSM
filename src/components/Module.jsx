import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { markdownReplacements } from "../siteData";
import rehypeRaw from 'rehype-raw'
import { Link } from "gatsby";

const H2 = ({ children }) => (
  <h2 className="text-3xl md:text-5xl font-outfit-bold mb-8 uppercase">{children}</h2>
);

const H3 = ({ children }) => (
  <h2 className="text-xl font-outfit-bold mb-2">{children}</h2>
);

const P = ({ children }) => <p className="mb-8">{children}</p>;

const A = ({ children, href }) => (
  <Link className="text-link hover:cursor-pointer hover:text-link-hover" to={href} >
    {children}
  </Link>
);

// Note, this behaves like ul without marker
const UL = ({ children }) => (
  <ul className="list-inside ml-4">
    {children}
  </ul>
);

const OL = ({ children }) => {
  return (
    <ol className="list-decimal list-inside ml-4">
      {children}
    </ol>
  )
};

const LI = ({ children }) => (
  <li className="my-2" >
    {children}
  </li>
);

//Custom List type, has to be used with <li> in MD
const CL = ({ children }) => {
  return (
    <ul className="ml-4 list-inside list-disc" >
      {children}
    </ul>
  )
};

const LX = ({ children }) => {
  return (
    <li className="list-inside list-disc" >
      {children}
    </li>
  )
};


const Module = ({ moduleData }) => {
  const components = {
    h2: H2,
    h3: H3,
    p: P,
    a: A,
    ul: UL,
    ol: OL,
    li: LI,
    cl: CL,
    lx: LX,
  };
  const { title } = moduleData;
  var { content } = moduleData;
  Object.entries(markdownReplacements).forEach(([key, value]) => {
    content = content.replaceAll(`$${key}$`, value);
  });

  return (
    <div className="pt-8" id={title}>
      <ReactMarkdown components={components} rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  );
};

export default Module;
