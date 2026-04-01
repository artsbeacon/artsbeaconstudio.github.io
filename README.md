# Gatsby Starter: Prismic

A typography-heavy & light-themed Gatsby Starter which uses the Headless CMS [Prismic](https://prismic.io/).

[Demo Website](https://prismic.lekoarts.de)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LekoArts/gatsby-starter-prismic)

[![CircleCI](https://circleci.com/gh/LekoArts/gatsby-starter-prismic.svg?style=svg)](https://circleci.com/gh/LekoArts/gatsby-starter-prismic) [![Netlify Status](https://api.netlify.com/api/v1/badges/f06e32cf-ef46-4544-b37d-0de548c0ea1b/deploy-status)](https://app.netlify.com/sites/gatsby-starter-prismic/deploys)

## About Me

I hope you like my starters and create something awesome! To see some of my work you can visit my [website](https://www.lekoarts.de) or support me on [Patreon](https://www.patreon.com/lekoarts) to get some neat rewards (4K images, project files, tutorial insights). Every pledge on Patreon helps me creating more free starters!

Also check out the other _gatsby-starters_:

- [gatsby-starter-portfolio-emma](https://github.com/LekoArts/gatsby-starter-portfolio-emma)
- [gatsby-starter-portfolio-emilia](https://github.com/LekoArts/gatsby-starter-portfolio-emilia)
- [gatsby-starter-portfolio-jodie](https://github.com/LekoArts/gatsby-starter-portfolio-jodie)
- [gatsby-starter-portfolio-bella](https://github.com/LekoArts/gatsby-starter-portfolio-bella)
- [gatsby-starter-portfolio-cara](https://github.com/LekoArts/gatsby-starter-portfolio-cara)
- [gatsby-starter-minimal-blog](https://github.com/LekoArts/gatsby-starter-minimal-blog)
- [gatsby-starter-prismic-i18n](https://github.com/LekoArts/gatsby-starter-prismic-i18n)

Check out the [Gatsby Starter Portfolio Overview](https://gatsby-starter-portfolio.netlify.com/)!

## Features

Multiple features of Prismic are used in this starter:

- **Slices**: Enrich your blogposts with custom quotes, images or codeblocks. You can order them how you like. When you used the _Image-Slice_ the image will get inserted and optimized by **gatsby-image**
- **Labels**: When marking a single word or a whole block with the given labels, Prism.js will transform these to syntax-highlighted codeblocks
- **Relationship fields**: Categorize your blogposts in Categories via a relationship field. You can change categories on the fly
- **Both custom types (Single / Repeatable)**: (Nearly) Every aspect of the website is managed with Prismic. The social media links or the recent projects get both managed in Prismic, no hardcoded entries!

Therefore the starter has following features:

- Prismic as Headless CMS
- Emotion for styling
- Cypress for End-to-End testing
- PrismJS highlighting
- Responsive images (gatsby-image)
  - The right image size for every screen size
  - Traced SVG Loading (Lazy-Loading)
  - WebP Support
- SEO
  - Sitemap
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags
  - Favicons
- Offline Support
- WebApp Manifest Support
- Typography.js
- Configurable
  - Use the `website.js` to easily change the most important information
  - Themeable with `theme.js`

## Instructions

### Quick start guide

The easiest way to deploy this starter is to use the same setup, meaning that your Prismic repository is configured the same way as this starter. The rest of this README aims to explain exactly that. You can read through the instructions with this high-level overview in mind:

1. Clone and install the starter
2. Register an account on Prismic
3. Configure your custom types
4. Create an API key and store it in an ENV variable
5. Go to your content tab
6. Create new documents for the `Homepage, Hero Links, Projects` type and fill out every input field
7. Create at least one document for the `Category` type
8. Create at least one document for the `Post` type. Every _Slice_ needs to be used at least one time and it needs to have one category assigned! _Note: You could for example create one post with every slice and one category in it._
9. Your project is ready for development and production

### Custom setup

Changes to your Prismic repository imply the need to change the React/GraphQL code of this starter, e.g. if you change the names (and therefore API IDs) of custom types or their input fields, you'll need to change the corresponding GraphQL queries.

#### Example: Use other slices

Let's say you don't need to use the `Quote` slice. How would you get Gatsby to work without this slice?

In this case the `Quote` slice gets queried in the `src/templates/post.jsx` file:

```graphql
... on PrismicPostBodyQuote {
  slice_type
  id
  primary {
    quote {
      html
      text
    }
  }
}
```

Remove that bit from the query and Gatsby won't look for the Quote slice anymore (you also can remove the `src/slices/Quote.jsx` file). Vice versa you'd add a file in the `src/slices` directory, add it to `src/components/SliceZone.jsx`, and add it to the template query.

## Install

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:

- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

To copy and install this starter run this command (with "project-name" being the name of your folder you wish to install it in):

```shell
gatsby new project-name https://github.com/LekoArts/gatsby-starter-prismic
cd project-name
```

## Setup

You have to know the basics of Prismic's interface in order to be able to make the necessary changes / setup your project accordingly. You can also checkout the document ["Sourcing from Prismic"](https://www.gatsbyjs.org/docs/sourcing-from-prismic/) I wrote for the official Gatsby documentation.

### Custom types

To configure the exact same custom type as this starter, follow these steps:

1. Go to your custom types tab
2. Click the button "Create New" and choose "Repeatable Type". Give it the name `Post` (the API ID should be `post` automatically)
3. On the right side you have a sidebar with **Build mode** and **JSON editor**. Open the **JSON editor** tab and insert the data from `.prismic/post.json`. Save your type

Follow the second and third step (with the respective file from `.prismic`) for the following types:

| Name       | API ID     | Type       |
| ---------- | ---------- | ---------- |
| Category   | category   | Repeatable |
| Hero Links | hero_links | Single     |
| Homepage   | homepage   | Single     |
| Projects   | projects   | Single     |

These are the exact same custom types I used for this starter.

### gatsby-config

#### repositoryName

Don't forget to change the default `repositoryName` in the plugin's option. The `repositoryName` is the name you have entered at the creation of the repository (you’ll also find it as the subdomain in the URL)

#### lang

If you only have one language in your Prismic repository you should remove the `lang: 'en-gb'` option in the config. If you want to grab multiple languages, you can also remove this line.

#### API key

You need to define the API Key for your Prismic repository in `gatsby-config.js` ([Video tutorial](https://www.youtube.com/watch?v=iH0P4KcOeVc)). You can retrieve the key here:

- You can generate an access token in the **API & Security** section of your repository settings. Setting a **Callback URL** is not necessary.
- The token will be listed under "Permanent access tokens".

It's best to store the API Key in an environment variable. Create the file `.env` in the root dir of your project. Its content should be:

`API_KEY=OIJSOJIO-YOURKEYHERE-EAJNALÖKND`

If you deploy to Netlify you can also setup an environment variable.

More information on the source plugin: [gatsby-source-prismic](https://github.com/angeloashmore/gatsby-source-prismic)

### Labels

Prismic gives you the tool called **Label** in the Rich Text field. You can wrap single words or complete text blocks with a label (they will have a yellow background when labeled). Normally this is just a `<span>` with a name, but the `gatsby-config.js` converts these marked words/blocks into code blocks with PrismJS classnames (and therefore syntax highlighting 🎉).

The two usecases:

- You mark a single word / sentence and apply the `text` label: Inline code (single backtick in markdown)
- You choose the `Preformatted` block (where can also choose the Headings) and apply any other (except `text`) label: Code block (three backticks in markdown)

### Slices

The `Post` custom types offers four slices in the slice zone:

- **Code Block**: This slice automatically inserts a `Preformatted` field in which you can paste your code. Before inserting you should choose a **Label** for the correct syntax highlighting
- **Quote**: A quote in a `blockquote`
- **Text**: Your normal _Rich Text_ field
- **Image**: This image won't be inlined with a Prismic URL, but downloaded and processed with `gatsby-image`

## Development

**Before running the local development server you'll need to add Content to your Prismic repository!**

Go to your documents (`https://your-name.prismic.io/documents/`) and create content with the newly created types. Fill out the `Homepage`, `Hero Links`, and `Projects` single type. Create some categories and add at least one Post. This post needs to contain all available slices and at least one category. If you create multiple posts make sure that every slice gets used at least one time.

**Please note**: You have to publish all these documents (not only saving them)!

After that you can run the local server:

```shell
npm run develop
```

## Prismic Publish Automation

This repository can auto-deploy when content is published in Prismic.

### How it works

1. A document is published in Prismic.
2. Prismic sends a webhook request to a Cloudflare Worker relay endpoint.
3. The relay validates the webhook secret and calls the GitHub Repository Dispatch API with event type `prismic_publish`.
4. GitHub Actions receives `repository_dispatch` and runs the deploy workflow in `.github/workflows/main.yml`.
5. The deploy action builds Gatsby and publishes to `gh-pages`.

### Files involved

- `.github/workflows/main.yml` - deploy workflow and triggers
- `cloudflare-relay.js` - Worker relay example code

### Required secrets

GitHub repository secrets (Settings -> Secrets and variables -> Actions):

- `PRISMIC_API_KEY` - existing Prismic API token used by Gatsby build
- `GH_PAGES_TOKEN` - PAT used by deploy action to push to `gh-pages`
  - Fallback: `ACCESS_TOKEN` is also supported by the workflow for backward compatibility

Cloudflare Worker secrets:

- `GH_DISPATCH_TOKEN` - PAT used by Worker to call GitHub repository dispatch
- `PRISMIC_WEBHOOK_SECRET` - shared secret used to validate incoming Prismic webhook payloads

### Setup checklist

1. Confirm `.github/workflows/main.yml` includes:
  - `on.repository_dispatch.types: [ prismic_publish ]`
2. In `cloudflare-relay.js`:
  - Replace `OWNER` in the GitHub API URL with your GitHub org/user name.
  - Deploy the Worker and copy its public URL.
3. In Prismic (Settings -> Webhooks):
  - URL: your Worker URL
  - Secret: the same value as `PRISMIC_WEBHOOK_SECRET`
  - Triggers: enable publish/unpublish or release triggers as needed
4. In GitHub repo secrets:
  - Set `GH_PAGES_TOKEN` and `PRISMIC_API_KEY`
5. Test end-to-end:
  - Click Prismic "Trigger it" (connectivity test)
  - Publish a real document (should trigger GitHub Action run)

### Common errors and fixes

- Error: `No personal access token found. Please provide one by setting the access-token input for this action.`
  - Cause: missing `GH_PAGES_TOKEN` (or `ACCESS_TOKEN`) in GitHub repo secrets
  - Fix: add `GH_PAGES_TOKEN` with repo write access

- Error: `Resource not accessible by personal access token` (HTTP 403)
  - Cause: dispatch token cannot access the target repo
  - Fix: recreate token with correct resource owner, repo selection, and permissions (`contents: write`)

- Error: relay returns HTTP 502 after publish
  - Cause: Worker failed while forwarding to GitHub dispatch (often bad token/repo config)
  - Fix: inspect Worker logs, verify dispatch endpoint and token permissions

### Security notes

- Rotate tokens immediately if they are ever pasted into logs, docs, terminal history, or chat.
- Never commit live secrets to the repository.
- Keep webhook and token secrets in platform secret stores only (GitHub/Cloudflare/Prismic settings).

## Handoff Runbook

Use this runbook when transferring day-to-day ownership of this site.

### Services and ownership map

- Domain registrar and DNS: GoDaddy (artsbeacon.com)
- CMS and content publishing: Prismic repository
- Source code and CI/CD: GitHub repository and GitHub Actions
- Publish relay: Cloudflare Worker
- Analytics and search: Google Analytics 4 and Google Search Console

### Transfer checklist

1. Domain and DNS (GoDaddy)
  - Transfer registrar account ownership or grant delegated admin access.
  - Verify nameservers, A records, CNAME records, TXT records, and mail records are unchanged after transfer.
2. Prismic
  - Add new owner/admin users.
  - Review webhook settings and confirm the webhook URL points to the active Cloudflare Worker.
  - Confirm publish permissions for editors.
3. GitHub
  - Transfer repository ownership or grant admin rights.
  - Confirm branch protections and required checks.
  - Confirm repository secrets are present and valid.
4. Cloudflare Worker
  - Transfer account access for Workers.
  - Verify Worker URL and deployed script version.
  - Confirm Worker secrets are present and current.
5. GA4 and GSC
  - Add new admin users.
  - Verify property ownership and access levels.

### Secret rotation procedure

Run this after access transfer or any suspected exposure.

1. Create new tokens/secrets:
  - GitHub dispatch token for Worker (`GH_DISPATCH_TOKEN`)
  - GitHub deploy token for Actions (`GH_PAGES_TOKEN`)
  - Prismic webhook secret (`PRISMIC_WEBHOOK_SECRET`)
2. Update destination systems in this order:
  - GitHub repository secrets
  - Cloudflare Worker secrets
  - Prismic webhook secret
3. Revoke old tokens/secrets.
4. Remove any exposed values from notes, terminal history, and shared docs.

### Post-transfer validation

1. Publish a test document in Prismic.
2. Confirm the webhook call succeeds in Prismic webhook logs.
3. Confirm Cloudflare Worker logs show a successful dispatch to GitHub.
4. Confirm GitHub Actions starts from `repository_dispatch` and deploys successfully.
5. Confirm updated site content is live on production.

### Operational quick checks

- If publish does not trigger deploy:
  - Check Prismic webhook URL and secret match Worker secret.
  - Check Worker has valid `GH_DISPATCH_TOKEN`.
  - Check workflow trigger includes `repository_dispatch` for `prismic_publish`.
- If workflow starts but deploy fails:
  - Check `GH_PAGES_TOKEN` (or fallback `ACCESS_TOKEN`) exists in GitHub repo secrets.
- If dispatch returns 403:
  - Recreate PAT with correct resource owner, repository selection, and `contents: write` permission.

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/plugins/)

### Building your site

```shell
npm run build
```

Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in `config/website`:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Gatsby Starter - Prismic.io', // Navigation and Site Title
  titleAlt: 'Gatsby Prismic.io', // Title for JSONLD
  description: 'A typography-heavy & light-themed Gatsby Starter which uses the Headless CMS Prismic.',
  headline: 'Writing and publishing content for LekoArts', // Headline for schema.org JSONLD
  url: 'https://prismic.lekoarts.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Prismic', // shortname for manifest. MUST be shorter than 12 characters
  author: 'LekoArts', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@starter_prismicio', // Twitter Username
  facebook: 'gatsby-prismic', // Facebook Site Name

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
```

You can also change the colors, container widths and other stuff in `src/styles/theme`:

```JS
const theme = {
  colors: {
    primary: '#3D63AE',
    bg: '#fff',
    black: '#000',
    greyLight: '#EBEDF2',
    greyBlue: '#a2bce2',
    grey: '#595C62',
    greyDark: '#303643',
    greyDarker: '#1c252b',
  },
  maxWidth: '1000px',
  maxWidthText: '720px',
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
}

export default theme
```

**Attention:** You also need to edit `static/robots.txt` to include your domain!
