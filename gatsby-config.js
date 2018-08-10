module.exports = {
  siteMetadata: {
    title: 'Big +',
    desc: 'A new Blog'
  },
  plugins: ['gatsby-plugin-react-helmet', 
            'gatsby-plugin-styled-components', 
            {
            resolve: 'gatsby-source-filesystem', 
            options: {
                name: "img",
                path: `${__dirname}/src/images`
              }
            },
            {
            resolve: 'gatsby-source-filesystem', 
            options: {
                name: "img",
                path: `${__dirname}/static/assets`
              }
            },
            {
              resolve: 'gatsby-source-filesystem', 
              options: {
                name: "src",
                path: `${__dirname}/src/`
              }
            },
            'gatsby-transformer-sharp',
            'gatsby-plugin-sharp',
            'gatsby-plugin-resolve-src',
            {
              resolve: `gatsby-source-contentful`,
              options: {
                spaceId: "a2hslmfsg3ch",
                accessToken: "77fc5cec9204f214b70fd51c0db1ce47daddb48c9b0bdacfa910d0ccdd7fa616"
              }
            },
            'gatsby-transformer-remark'            
          ]
        }
        // pathPrefix:"/gatsby",
