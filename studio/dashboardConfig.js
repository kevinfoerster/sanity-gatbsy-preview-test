export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6253f914d01d8539e1d5a1d0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatbsy-preview-test-studio',
                  apiId: '17906196-d58f-4a64-abc6-f655dc3b541f'
                },
                {
                  buildHookId: '6253f914dc23b14d447cc740',
                  title: 'Portfolio Website',
                  name: 'sanity-gatbsy-preview-test',
                  apiId: 'd22b8ed8-ef92-42b2-95f0-0753ab2ba8d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kevinfoerster/sanity-gatbsy-preview-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatbsy-preview-test.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
