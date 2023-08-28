export const SITE_NAME = 'Reconnect.earth'

export const RESOURCE_TYPES = <const>[
    'Video',
    'Book',
    'Podcast',
    'Website',
    'Report',
    'Article',
    'Guide',
    'Toolkit',
    'Webinar',
    'Movie',
    'Documentary',
    'Research',
    'Course',
]

export const RESOURCE_CATEGORIES = <const>[
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
]

export type ResourceType = (typeof RESOURCE_TYPES)[number]
export type ResourceCategories = (typeof RESOURCE_CATEGORIES)[number]
