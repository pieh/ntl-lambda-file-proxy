export default async (req, context) => {
  // this might generally not work - at least edge functions don't allow rewrites for external urls
  return context.rewrite(`https://www.gatsbyjs.com/Gatsby-Logo.svg`);
};
