import { AppValidation, ResourceValidation, TagValidation } from '#lib/content/constants.js'
import { type CmsConfig } from '@sveltia/cms'

export default {
  load_config_file: false,
  app_title: 'CMS',
  publish_mode: 'editorial_workflow',
  backend: {
    name: 'github',
    repo: 'Greenheart/reconnect.earth',
    branch: 'main',
  },
  media_folder: 'src/assets',
  public_folder: '/',
  collections: [
    {
      name: 'resources',
      label: '📚️ Resources',
      label_singular: 'Resource',
      slug: '{{uuid_shorter}}',
      folder: 'src/data/resources',
      extension: 'json',
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
          name: 'tags',
          widget: 'relation',
          collection: 'tags',
          comment:
            'Add relevant tags to describe this resource. Use "TitleCasing" to format tags consistently.',
          multiple: true,
          display_fields: ['label'],
          min: ResourceValidation.tags.min,
          max: ResourceValidation.tags.max,
        },
        {
          name: 'featured',
          comment: 'Whether or not this resource should be featured',
          widget: 'boolean',
          default: false,
          required: false,
        },
        {
          name: 'quality',
          label: `Production quality (${ResourceValidation.quality.min}-${ResourceValidation.quality.max})`,
          comment:
            "Generally, resources with a higher production quality are preferred to respect people's time. However, sometimes the topic or insights are worth adding despite a lower production quality.",
          widget: 'number',
          min: ResourceValidation.quality.min,
          max: ResourceValidation.quality.max,
          default: 3,
          required: false,
        },
      ],
    },
    {
      name: 'apps',
      label: '📱️ Apps',
      label_singular: 'App',
      identifier_field: 'name',
      folder: 'src/data/apps',
      extension: 'json',
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
          comment: 'An link to a live demo (for web projects), or where to get more information.',
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
    {
      divider: true,
    },
    {
      name: 'tags',
      label: '🏷️ Tags',
      label_singular: 'Tag',
      slug: '{{fields.label}}',
      summary: '**{{fields.label}}** — _{{fields.kind}}_',
      folder: 'src/data/tags',
      format: 'json',
      view_filters: {
        filters: [
          {
            label: 'Media types',
            field: 'kind',
            name: TagValidation.kind['media-type'],
            pattern: TagValidation.kind['media-type'],
          },
          {
            label: 'Topics',
            field: 'kind',
            name: TagValidation.kind.topic,
            pattern: TagValidation.kind.topic,
          },
        ],
      },
      fields: [
        {
          name: 'label',
          label: 'Tag',
          comment: 'Tag in TitleCase format used to describe resources and other content.',
          pattern: [
            /^[A-Za-z1-9]+$/,
            'Tags should be in TitleCase format without spaces and only include letters and numbers.',
          ],
        },
        {
          name: 'kind',
          label: 'Tag kind',
          comment:
            'What kind of tag is this? Media types indicate the format, e.g. Book, Video, Podcast and similar. Topics describe specific themes and concepts.',
          widget: 'select',
          options: [
            {
              label: 'Topic',
              value: TagValidation.kind.topic,
            },
            {
              label: 'Media type',
              value: TagValidation.kind['media-type'],
            },
          ],
          default: TagValidation.kind.topic,
        },
      ],
    },
  ],
} satisfies CmsConfig
