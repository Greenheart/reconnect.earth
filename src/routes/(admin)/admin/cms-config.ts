import { AppValidation, ResourceValidation } from '#lib/content/constants.js'
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
      name: 'resources',
      label: '📚️ Resources',
      file: 'src/data/resources.json',
      fields: [
        {
          name: 'resources',
          label: 'All resources',
          widget: 'list',
          comment:
            'Tip: To easily find a specific resource to edit it, search in the browser using CTRL+F or CMD+F',
          fields: [
            {
              name: 'title',
              comment: 'A short descriptive title',
              maxlength: ResourceValidation.title.max,
            },
            {
              name: 'description',
              label: 'Description',
              comment:
                'Why is this relevant for Reconnect.earth? What are some key topics and insights?',
              widget: 'text',
              maxlength: ResourceValidation.description.max,
            },
            {
              name: 'link',
              label: 'Link',
              widget: 'string',
              type: 'url',
            },
            {
              name: 'featured',
              comment: 'Whether or not this resource should be featured',
              widget: 'boolean',
              default: false,
            },
            {
              name: 'quality',
              label: `Production quality (${ResourceValidation.quality.min}-${ResourceValidation.quality.max})`,
              comment:
                "Generally, resources with a higher production quality are preferred to respect people's time. However, sometimes the topic or insights are worth adding despite a lower production quality.",
              widget: 'number',
              min: 1,
              max: 5,
              default: 3,
            },
          ],
        },
      ],
    },
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
              label: 'Name',
              widget: 'string',
              maxlength: AppValidation.name.max,
            },
            {
              name: 'description',
              label: 'Description',
              widget: 'text',
              maxlength: AppValidation.description.max,
            },
            {
              name: 'link',
              label: 'Link',
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
              label: 'Image',
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
