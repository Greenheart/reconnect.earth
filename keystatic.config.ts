import { AppValidation, ResourceValidation } from './src/lib/schema.ts'
import { config, singleton, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    resources: singleton({
      label: '📚️ Resources',
      format: 'json',
      path: 'src/data/resources',
      schema: {
        resources: fields.array(
          fields.object({
            title: fields.text({
              label: 'Title',
              description: 'A short descriptive title',
              validation: {
                length: { max: ResourceValidation.title.max },
                isRequired: true,
              },
            }),
            description: fields.text({
              label: 'Description',
              description:
                'Why is this relevant for Reconnect.earth? What are some key topics and insights?',
              multiline: true,
              validation: {
                length: { max: ResourceValidation.description.max },
                isRequired: true,
              },
            }),
            link: fields.url({
              label: 'Link',
              validation: { isRequired: true },
            }),
            tags: fields.array(fields.text({ label: 'Tag' }), {
              label: 'Tags',
              description:
                'Add relevant tags to describe this resource. Use "TitleCasing" to format tags consistently.',
              validation: {
                length: { min: ResourceValidation.tags.min, max: ResourceValidation.tags.max },
              },
              itemLabel: (item) => item.value,
            }),
            featured: fields.checkbox({
              label: 'Featured',
              description: 'Whether or not this resource should be featured',
              defaultValue: false,
            }),
            quality: fields.integer({
              label: `Production quality (${ResourceValidation.quality.min}-${ResourceValidation.quality.max})`,
              description:
                "Generally, resources with a higher production quality are preferred to respect people's time. However, sometimes the topic or insights are worth adding despite a lower production quality.",
              validation: {
                isRequired: false,
                min: ResourceValidation.quality.min,
                max: ResourceValidation.quality.max,
              },
            }),
          }),
          {
            label: 'All resources',
            description:
              'Tip: To easily find a specific resource to edit it, search in the browser using CTRL+F or CMD+F',
            itemLabel: (item) => item.fields.title.value,
          },
        ),
      },
    }),
    apps: singleton({
      label: '📱️ Apps',
      format: 'json',
      path: './src/data/apps',
      schema: {
        apps: fields.array(
          fields.object({
            name: fields.slug({
              name: {
                label: 'Name',
                validation: { isRequired: true, length: { max: AppValidation.name.max } },
              },
            }),
            description: fields.text({
              label: 'Description',
              validation: { isRequired: true, length: { max: AppValidation.description.max } },
            }),
            link: fields.text({
              label: 'Link',
              description:
                'A link to a live demo (for web projects), or where to get more information.',
              validation: { isRequired: true },
            }),
            git: fields.url({
              label: 'Git repository link',
              description:
                'Link to where the source core for the project is hosted. Only libre software apps may be listed.',
              validation: { isRequired: true },
            }),
            image: fields.image({
              label: 'Image',
              description: 'Screenshot or other app image',
              directory: './src/assets',
              validation: { isRequired: true },
            }),
          }),
          { itemLabel: (item) => item.fields.name.value.name, slugField: 'name' },
        ),
      },
    }),
  },
  collections: {
    tags: collection({
      label: '🏷️ Tags',
      path: 'src/data/tags/*',
      slugField: 'label',
      format: 'json',
      schema: {
        label: fields.slug({
          name: {
            label: 'Tag',
            description: 'Tag in TitleCase format used to describe resources and other content.',
            validation: { isRequired: true },
          },
        }),
        kind: fields.select({
          label: 'Tag kind',
          description:
            'What kind of tag is this? Media types indicate the format, e.g. Book, Video, Podcast and similar. Topics describe specific themes and concepts.',
          options: [
            {
              label: 'Topic',
              value: 'topic',
            },
            {
              label: 'Media type',
              value: 'media-type',
            },
          ],
          defaultValue: 'topic',
        }),
      },
    }),
  },
})
