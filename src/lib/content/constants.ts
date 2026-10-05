// IDEA: 1) Define which fields are required: false in constants.ts
// IDEA: 2) Use the required: false in the cms-config to mark optional fields.
// IDEA: 2.1) Maybe mark the validation rules below as `Record<string, { min?: number, max?: number, required?: false }>`
//       and add more properties from Sveltia CMS config as needed.
//       Or Pick<SveltiaCMS.Field, 'min' | 'max' | 'required' | 'pattern'>
// IDEA: 3) In schemas.ts, wrap each schema in a function call that checks each field
// and conditionally marks each field as `field.optional()`. We could likely return a new schema.
//
// The value of this change is that we can define the schema validation in one place
// and used in both the CMS and app content parsing.

export const TagValidation = {
  label: { max: 50 },
  kind: { topic: 'topic', 'media-type': 'media-type' },
} as const

export const ResourceValidation = {
  title: { max: 125 },
  description: { max: 500 },
  tags: { min: 1, max: 5 },
  quality: { min: 1, max: 5 },
} as const

export const ActivityValidation = {
  title: { max: 125 },
  participants: { min: 2 },
  summary: { max: 500 },
  targetAudience: { max: 200 },
} as const

export const AppValidation = {
  name: { max: 100 },
  description: { max: 300 },
} as const
