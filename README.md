# Reconnect.earth

## Developing

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Editing content

-   Add or update resources, by making changes in `resources.json`.
-   Before new tags can be used, they need to be defined in [./src/lib/constants.ts](./src/lib/constants.ts).
    -   Resource types always appear first in the list of tags and show the type of content (written/spoken/visual).
    -   Resource categories can be added to connect resources to the most important keywords.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
