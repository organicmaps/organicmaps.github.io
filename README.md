# Organic Maps

This website is build with [Zola](https://www.getzola.org/) and Cloudflare Pages.

## Development

Use `zola serve` for a local preview or `zola build` to generate static site in the `public` folder.

`npm i && npm run format` will pretty-format Markdown and scss.

## Deployment

Every PR deploys a preview version of the site at unique url.

Every merge into the _master_ branch deploys changes into the production at https://organicmaps.app

## Contribution

Any good ideas and help with web site improvement are appreciated. And it's always better to discuss
any improvement before implementing it to sync with our vision and plans.

## Translations

You can help us by contributing site content translations (creating markdown files in your language).
For example, to add French translation, create a copy of any `.md` file in `contents` directory and name it
like `_index.fr.md` or `privacy.fr.md`, and then translate its content. Or just [send us](mailto:hello@organicmaps.app)
the text, and we'll add translations.

Here are more details about it: https://www.getzola.org/documentation/content/multilingual/
