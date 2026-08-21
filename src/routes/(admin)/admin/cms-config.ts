import { AppValidation } from '#lib/content/constants.js'
import { type CmsConfig } from '@sveltia/cms'

export default {
  load_config_file: false,
  app_title: 'CMS',
  backend:
    import.meta.env.DEV && navigator.userAgent.includes('Firefox/')
      ? { name: 'test-repo' }
      : {
          name: 'github',
          repo: 'Greenheart/reconnect.earth',
          branch: 'main',
        },
  media_folder: 'src/assets',
  public_folder: '/',
  singletons: [
    {
      name: 'apps',
      label: '📱️ Apps',
      file: 'src/data/apps.json',
      fields: [
        {
          name: 'apps',
          widget: 'list',
          fields: [
            {
              name: 'name',
              widget: 'string',
              maxlength: AppValidation.name.max,
            },
            { name: 'description', widget: 'text', maxlength: AppValidation.description.max },
            {
              name: 'link',
              widget: 'string',
              type: 'url',
              comment:
                'An link to a live demo (for web projects), or where to get more information.',
            },
            {
              name: 'git',
              label: 'Git repository link',
              comment:
                'Link to the source code of the project. Only [libre software (FOSS)](https://fsfe.org/freesoftware/) apps may be listed.',
            },
            {
              name: 'image',
              widget: 'image',
              media_folder: 'src/assets',
              comment: 'Screenshot or other app image',
            },
          ],
        },
      ],
    },
  ],
} satisfies CmsConfig
