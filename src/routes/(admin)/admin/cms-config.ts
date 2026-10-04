import { SITE_NAME } from '#lib/constants.js'
import {
  AppValidation,
  ResourceValidation,
  ActivityValidation,
  TagValidation,
} from '#lib/content/constants.js'
import { type CmsConfig, type Collection } from '@sveltia/cms'

const resources: Collection = {
  name: 'resources',
  label: '📚️ Resources',
  label_singular: 'Resource',
  slug: '{{uuid_shorter}}',
  folder: 'src/data/resources',
  extension: 'json',
  fields: [
    {
      name: 'title',
      label: 'Title',
      hint: 'A short descriptive title',
      maxlength: ResourceValidation.title.max,
    },
    {
      name: 'description',
      label: 'Description',
      hint: 'Why is this relevant for Reconnect.earth? What are some key topics and insights?',
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
      label: 'Tags',
      widget: 'relation',
      collection: 'tags',
      hint: 'Add relevant tags to describe this resource. First the media type, and then the main topics.',
      multiple: true,
      display_fields: ['label'],
      min: ResourceValidation.tags.min,
      max: ResourceValidation.tags.max,
    },
    {
      name: 'featured',
      label: 'Featured',
      hint: 'Whether or not this resource should be featured',
      widget: 'boolean',
      default: false,
      required: false,
    },
    {
      name: 'quality',
      label: `Production quality (${ResourceValidation.quality.min}-${ResourceValidation.quality.max})`,
      hint: "Generally, resources with a higher production quality are preferred to respect people's time. However, sometimes the topic or insights are worth adding despite a lower production quality.",
      widget: 'number',
      min: ResourceValidation.quality.min,
      max: ResourceValidation.quality.max,
      default: 3,
      required: false,
    },
  ],
}

const activities: Collection = {
  name: 'activities',
  label: '👥️ Activities',
  label_singular: 'Activity',
  fields: [
    {
      name: 'title',
      label: 'Title',
      hint: 'A short descriptive title',
      maxlength: ActivityValidation.title.max,
    },
    {
      name: 'duration',
      label: 'Duration',
      hint: 'The (approximate) duration of the activity, in hours (h) and/or minutes (min)',
      widget: 'datetime',
      type: 'time',
      // TODO: Can the "Now" button be removed? It is not needed when entering time durations.
      // IDEA: Or maybe even add a dedicated duration widget that saves a Temporal.Duration? That would be the best option.
    },
    {
      name: 'minParticipants',
      label: 'Minimum number of participants',
      widget: 'number',
      min: ActivityValidation.participants.min,
    },
    {
      name: 'maxParticipants',
      label: 'Maximum number of participants',
      widget: 'number',
      min: ActivityValidation.participants.min,
    },
    {
      name: 'targetAudience',
      label: 'Target audience',
      hint: 'Which type(s) of participants that the acitivity is aimed for, e.g. kids/ youth/ adults, or the general public, or e.g. people who already have basic knowledge about a specific topic.',
      max: ActivityValidation.targetAudience.max,
      required: false,
    },
    {
      name: 'summary',
      label: 'Short summary',
      hint: 'Summary of the activity, which is visible in the overview list of activities, as well as a lead on the page of the activity.',
      maxlength: ActivityValidation.summary.max,
      widget: 'text',
      // TODO: Add validation
    },
    {
      name: 'body',
      label: 'Detailed description',
      hint: 'The detailed description of the activity, which can include a facilitation guide. It can also be good to include different needed organiser roles, such as workshop facilitator, venue host, technician, person responsible for communications, person organising snacks/ food/ drinks.',
      widget: 'richtext',
      minimal: true,
      buttons: [
        'heading-one',
        'heading-two',
        'heading-three',
        'heading-four',
        'bold',
        'italic',
        'link',
        'quote',
      ],
      editor_components: ['image'],
    },
    {
      name: 'location',
      label: 'Suggested location(s)',
      hint: 'The type(s) of location(s) suitable for the activity - possibly including any certain furniture, e.g. classroom, lecture hall, cinema setting, room with chairs, room with an open space, park.',
      // TODO: Add validation - max length?
    },
    {
      name: 'materials',
      label: 'Materials needed for the activity',
      hint: 'The materials needed for the activity - if any. It can be, for example, a big TV screen/ projector, speakers, pens, post-it notes, large sheets of paper, masking tape.',
      // TODO: Add validation - bullet point list
      required: false,
    },
    {
      name: 'relevantResources',
      label: 'Relevant resources',
      hint: 'Here you can add resources from the resource library which are relevant for the activity. Participants could read/watch/listen to them to prepare before the activity.',
      // TODO: Add relation to select Resources from the library
      required: false,
    },
    {
      name: 'inDepthResources',
      label: 'In-depth resources',
      hint: 'Here you can add resources from the resource library that may help participants to learn more, for example as next steps after the activity.',
      // TODO: Add relation to select Resources from the library
      required: false,
    },
  ],
  folder: 'src/data/activities',
  extension: 'md',
}

const apps: Collection = {
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
      hint: 'An link to a live demo (for web projects), or where to get more information.',
    },
    {
      name: 'git',
      label: 'Git repository link',
      hint: 'Link to the source code of the project. Only [libre software (FOSS)](https://fsfe.org/freesoftware/) apps may be listed.',
    },
    {
      name: 'image',
      label: 'Image',
      widget: 'image',
      media_folder: '/src/assets/apps',
      hint: 'Screenshot or other app image',
    },
  ],
}

const tags: Collection = {
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
      hint: 'Tag in TitleCase format used to describe resources and other content.',
      pattern: [
        /^[A-Za-z1-9]+$/.toString(),
        'Tags should be in TitleCase format without spaces and only include letters and numbers.',
      ],
    },
    {
      name: 'kind',
      label: 'Tag kind',
      hint: 'What kind of tag is this? Media types indicate the format, e.g. Book, Video, Podcast and similar. Topics describe specific themes and concepts.',
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
}

export default {
  load_config_file: false,
  app_title: `${SITE_NAME} - CMS`,
  publish_mode: 'editorial_workflow',
  backend: {
    name: 'github',
    repo: 'Greenheart/reconnect.earth',
    branch: 'main',
  },
  media_folder: 'src/assets/global',
  public_folder: '/',
  collections: [resources, activities, apps, { divider: true }, tags],
} satisfies CmsConfig
