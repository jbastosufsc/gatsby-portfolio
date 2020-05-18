module.exports = {
  siteMetadata: {
    title: `Jorge de Almeida Bastos Jr`,
    titleTemplate: `Personal Jorge's Webpage`,
    description: `Kick off in my first Gatsby project.`,
    author: `@jorgebastos10`,
    siteURL: `http://jorgebastos.tk/`,
    social: {
      github: `/jbastosufsc`,
      linkedin: `/jorgebastosjr`,
      instagram: `@jorgebastos10`
    },
    menuLinks: [
      {
        name: `Sobre mim`,
        link: `/`
      },
      {
        name: `Projetos`,
        link: `/projetos`
      },
      {
        name: `Tecnologias`,
        link: `/tecnologias`
      },
      {
        name: `Contato`,
        link: `/contato`
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [ `**/\.*` ] // ignore files starting with a dot
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
