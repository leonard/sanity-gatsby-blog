export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8e1d52784e3e582e4cd271',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nkenxfcy',
                  apiId: '2153bf07-1923-42b8-825a-14fe7623d90d'
                },
                {
                  buildHookId: '5d8e1d52031b81454b286077',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-98i5pn2e',
                  apiId: '5c57853c-1301-4662-87c7-2533b6331a9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leonard/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-98i5pn2e.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
