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
    image: `src/images/jorge.jpeg`,
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'http://jorgebastos.tk/',
        sitemap: 'http://jorgebastos.tk/sitemap.xml',
        env: {
          development: {
            policy: [ { userAgent: '*', disallow: [ '/' ] } ]
          },
          production: {
            policy: [ { userAgent: '*', allow: '/' } ]
          }
        }
      }
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-next-seo`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `company-analytics-id`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jorge Bastos`,
        short_name: `jbastos`,
        start_url: `/`
        // background_color: `$predominant-color`
        // theme_color: `$predominant-color`,
        // display: `minimal-ui`,
        // icon: `content/assets/$icon-name.svg`,
      }
    },
    'gatsby-plugin-offline'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
