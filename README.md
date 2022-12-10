# Organic Maps

This website is build with [Zola](https://www.getzola.org/) and Cloudflare Pages.

## Development

Use `zola serve` for a local preview or `zola build` to generate static site in the `public` folder.

`npm i && npm run format` will pretty-format Markdown and scss.

Upgrade npm dependencies with `npm run upgrade`, make sure that you have installed `npm-check-updates` package.

## Deployment

Every PR deploys a preview version of the site at unique url.

Every merge into the _master_ branch deploys changes into the production at https://organicmaps.app

### Updating News

Run `npm run news` to automatically download news from our [Telegram channel](https://t.me/OrganicMapsApp),
then create a git commit and push it.

## Contribution

Any good ideas and help with web site improvement are appreciated. And it's always better to discuss
any improvement before implementing it to sync with our vision and plans.

## Translations

Please help us with translating this web-site in your language. See [TRANSLATIONS.md](TRANSLATIONS.md) file for detailed instructions.
