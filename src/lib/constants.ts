export const SITE_NAME = 'Reconnect.earth'
export const GITHUB_LINK = 'https://github.com/Greenheart/reconnect.earth'

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
    'Talk',
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
    'Ecology',
    'Not-for-profit-worldModel',
    'Solarpunk',
    'SocialSustainability'
]

export const RESOURCE_TAGS = [...RESOURCE_TYPES, ...RESOURCE_CATEGORIES]

export type ResourceType = (typeof RESOURCE_TYPES)[number]
export type ResourceCategory = (typeof RESOURCE_CATEGORIES)[number]
export type ResourceTag = (typeof RESOURCE_TAGS)[number]
