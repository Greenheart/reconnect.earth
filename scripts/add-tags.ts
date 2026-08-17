// import constants
// add tag files
// update code to read from JSON files instead of constants
// Warn if there are unknown tags used by some resource

import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

export const RESOURCE_MEDIA_TYPES = [
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

export const RESOURCE_TOPICS = [
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

for (const tag of RESOURCE_MEDIA_TYPES) {
  writeFileSync(
    resolve('src/data/tags/', `${tag.trim().toLowerCase()}.json`),
    JSON.stringify({ label: tag, kind: 'media-type' }),
    'utf-8',
  )
}

for (const tag of RESOURCE_TOPICS) {
  writeFileSync(
    resolve('src/data/tags/', `${tag.trim().toLowerCase()}.json`),
    JSON.stringify({ label: tag, kind: 'topic' }),
    'utf-8',
  )
}
