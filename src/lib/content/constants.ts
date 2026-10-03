export const TagValidation = {
  label: { max: 50 },
  kind: { topic: 'topic', 'media-type': 'media-type' },
} as const

export const ResourceValidation = {
  title: { max: 125 },
  description: { max: 500 },
  tags: { min: 1, max: 5 },
  quality: { min: 1, max: 5 },
}

export const ActivityValidation = {
  title: { max: 125 },
  participants: { min: 2 },
  summary: { max: 500 },
}

export const AppValidation = {
  name: { max: 100 },
  description: { max: 300 },
}
