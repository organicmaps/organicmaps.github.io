# Organic Maps

This website is build with [Zola](https://www.getzola.org/) and Cloudflare Pages.

## Development

Use `zola serve` for a local preview or `zola build` to generate static site in the `public` folder.

`npm i && npm run format` will pretty-format Markdown and scss.

## Deployment

Every PR deploys a preview version of the site at unique url.

Every merge into the *master* branch deploys changes into the production at https://organicmaps.app
