import { type CmsConfig } from '@sveltia/cms'

export default {
  load_config_file: false,
  app_title: 'CMS',
  backend: {
    name: 'test-repo',
  },
  media_folder: 'src/assets',
  public_folder: 'static',
  singletons: [
    {
      name: 'apps',
      label: '📱️ Apps',
      file: 'src/data/apps.json',
      fields: [{ name: 'name', label: 'name' }],
    },
  ],
} satisfies CmsConfig
