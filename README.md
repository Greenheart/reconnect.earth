# Reconnect.earth

## Developing

Once you've installed dependencies with `pnpm install`, start a development server:

```bash
pnpm dev
```

**NOTE:** We're using `https` for local development to enable some browser features needed for the lifewheel app.

## Editing content

-   Add or update resources, by making changes in `resources.json`.
-   Before new tags can be used, they need to be defined in [./src/lib/constants.ts](./src/lib/constants.ts).
    -   Resource types always appear first in the list of tags and show the type of content (written/spoken/visual).
    -   Resource categories can be added to connect resources to the most important keywords.

## Building

To create a production version the project:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.
