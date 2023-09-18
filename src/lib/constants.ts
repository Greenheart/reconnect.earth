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
    'Motivation',
    'Interconnectedness',
]

export type ResourceType = (typeof RESOURCE_TYPES)[number]
export type ResourceCategories = (typeof RESOURCE_CATEGORIES)[number]

export const GITHUB_LINK = 'https://github.com/Greenheart/reconnect.earth'
