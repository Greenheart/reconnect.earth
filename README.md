# Reconnect.earth

> Co-creating a future where both humanity and the living planet thrive together.
>
> <https://reconnect.earth>

---

This document describes various ways you can contribute to the project.

## Editing content

Reconnect.earth consists of several types of content:

- **Resources** - Relevant books, videos, podcasts, research papers (and more) to spark curiosity, reflection and learning.
- **Activities** - Workshops, facilitation guidelines and inspiration for hosting events.
- **Tags** - Various ways to categorize content.
- **Apps** - [Free and open source software](https://fsfe.org/freesoftware/) developed by and for the community.

There are three ways to change content, and the easiest methods are to use our CMS. If you are curious, here's a good intro to [learn more about how Sveltia CMS works](https://sveltiacms.app/en/docs/intro).

### 1. Using the hosted CMS on the live site

As a _member_ of the Reconnect.earth GitHub repository, you can visit [reconnect.earth/admin/](https://reconnect.earth/admin/) to sign in to the CMS with your GitHub account. Then you can make changes and save to publish them.

If you are not yet a member and would like to suggest changes - please [open an issue](https://github.com/Greenheart/reconnect.earth/issues/new) and share your ideas.

You can also read below for how to run the CMS locally and suggest changes by opening pull requests directly to the project.

### 2. Running the CMS locally on your computer

You can run the CMS locally together with the website. First, follow the [development setup instructions](#developing) to install tools and get started.

Then you can start the CMS by running `pnpm dev`. This makes the CMS available on <http://localhost:5173/admin/> where you can make changes and save them to the filesystem.

When you are happy with the changes, create a Git commit to save a new version. Then you can publish your changes to your fork of the repository and open a pull request to let the team review your changes.

> ![NOTE]
> While Firefox and any modern browser works well when editing via the live website, the CMS unfortunately [doesn't yet support Firefox for local editing](https://github.com/sveltia/sveltia-cms/issues/38). To edit locally, it's recommended to use a Chromium-based browser like [Helium](https://helium.computer/).

### (Bonus) 3. Changing the content files directly

Since all content is stored in Git, both files and other assets like images can be modified with any local program like code editors, text editors or image editors.

## Developing

This project requires [Node.js](https://nodejs.org), [pnpm](https://pnpm.io/) and [Git](https://git-scm.com/) to be installed on your computer.

To run the project locally, install the tools listed above and start the development server by running the following commands in a terminal:

```bash
pnpm install
pnpm dev
```

## Updating embedded apps

First, make sure you have a local, updated copy of the Git repository for each app.

The [lifewheel](https://github.com/Greenheart/lifewheel) app can be updated via a script, assuming the Git repository is a sibling directory to this project:

```bash
pnpm update-lifewheel
```

## Building for production

To create a production version the project:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.
