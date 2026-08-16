export const SITE_NAME = 'Reconnect.earth'
export const GITHUB_LINK = 'https://github.com/Greenheart/reconnect.earth'

export const RESOURCE_TYPES = [
  'Video',
  'Book',
  'Podcast',
  'Webpage',
  'Report',
  'Article',
  'Guide',
  'Toolkit',
  'Webinar',
  'Movie',
  'Documentary',
  'Research',
  'Course',
  'Talk',
  'Audio',
] as const

export const RESOURCE_CATEGORIES = [
  'Meaning',
  'Wellbeing',
  'Metacrisis',
  'WellbeingEconomics',
  'Freedom',
  'SurveillanceCapitalism',
  'Attention',
  'SystemsThinking',
  'Law',
  'Philosophy',
  'Culture',
  'Technology',
  'Economics',
  'Motivation',
  'Interconnectedness',
  'Ecology',
  'NotForProfit',
  'Solarpunk',
  'SocialSustainability',
  'Politics',
  'Communication',
  'Collaboration',
  'Fiction',
  'Design',
  'History',
  'Food',
] as const

export const RESOURCE_TAGS = [...RESOURCE_TYPES, ...RESOURCE_CATEGORIES]

export type ResourceType = (typeof RESOURCE_TYPES)[number]
export type ResourceCategory = (typeof RESOURCE_CATEGORIES)[number]
export type ResourceTag = (typeof RESOURCE_TAGS)[number]
