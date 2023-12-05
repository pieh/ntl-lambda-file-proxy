export default async (req, context) => {
  return fetch(`https://www.gatsbyjs.com/Gatsby-Logo.svg`);
};

export const config = {
  path: `/edge-proxy`,
};
