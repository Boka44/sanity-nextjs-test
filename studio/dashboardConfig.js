export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5edd2a0c3846e08fdea233fc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-test-studio-go33pfhq',
                  apiId: '5edb5a7c-313e-46b0-b83d-4b1a89cc70a0'
                },
                {
                  buildHookId: '5edd2a0c1311f80e5cd11259',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-test-web-i9s5r1qw',
                  apiId: '9156e881-358b-4948-b421-5bb77eae95f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Boka44/sanity-nextjs-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-test-web-i9s5r1qw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
