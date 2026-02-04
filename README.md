# Reconnect.earth

## Developing

This project requires [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io/) to be installed on your computer.

To run the project locally, install dependencies and start the development server by running the following commands in a terminal:

```bash
pnpm install
pnpm dev
```

## Editing content

- Add or update resources, by making changes in `resources.json`.
- Before new tags can be used, they need to be defined in [./src/lib/constants.ts](./src/lib/constants.ts).
    - Resource types always appear first in the list of tags and show the type of content (written/spoken/visual).
    - Resource categories can be added to connect resources to the most important keywords.

## Building

To create a production version the project:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.

The lifewheel app can be updated via a script:

```bash
pnpm update-lifewheel
```
