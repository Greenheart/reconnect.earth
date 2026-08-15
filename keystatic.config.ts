import { ResourceSchema } from './src/lib/schema.ts'
import { config, singleton, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    resources: singleton({
      label: 'Resources',
      format: 'json',
      path: 'src/data/resources',
      schema: {
        resources: fields.array(
          fields.object({
            title: fields.text({
              label: 'Title',
              description: 'A short descriptive title',
              validation: {
                length: { max: ResourceSchema.shape.title.maxLength! },
                isRequired: true,
              },
            }),
            description: fields.text({
              label: 'Description',
              description:
                'Why is this relevant for Reconnect.earth? What are some key topics and insights?',
              multiline: true,
              validation: {
                length: { max: ResourceSchema.shape.description.maxLength! },
                isRequired: true,
              },
            }),
            link: fields.url({
              label: 'Link',
              validation: { isRequired: true },
            }),
            // TODO: See if we can get the max number of tags from the schema, or if we should define the constants somewhere else instead.
            tags: fields.array(fields.text({ label: 'Tag' }), {
              label: 'Tags',
              description:
                'Add relevant tags to describe this resource. Use "TitleCasing" to format tags consistently.',
              validation: { length: { min: 1, max: 5 } },
              itemLabel: (item) => item.value,
            }),
            featured: fields.checkbox({
              label: 'Featured',
              description: 'Whether or not this resource should be featured',
              defaultValue: false,
            }),
            quality: fields.integer({
              label: 'Production quality',
              description:
                "Generally, resources with a higher production quality are preferred to respect people's time. However, sometimes the topic or insights are worth adding despite a lower production quality.",
              validation: {
                isRequired: false,
                min: ResourceSchema.shape.quality.minValue!,
                max: ResourceSchema.shape.quality.maxValue!,
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
    // apps: singleton({
    //   label: 'Apps',
    //   format: 'json',
    //   path: './src/data/apps.json',
    //   schema: {},
    // }),
  },
})
