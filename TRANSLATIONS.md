# Translations

Translations of web-site content are managed by [Weblate][weblate] with additional scripts available from this repo. 

**(!) Please don't edit localized Markdown files (`.lang.md`) manually. Use [Weblate][weblate] instead.**

## How it works

The translation process has three steps:

**English Markdown to .PO files**. A special [po4a][po4a] tool parses English source files (i.e. without `.lang.` suffix) to extract all localizable strings into `.po` files in `po/` directory. Markdown files are tokenized by the tool to extract individual paragraphs, list items and other elements into separate translatable strings. The source English files are never changed by the tool. English Markdown files can be freely edited directly in the repo without any issues. Every re-run of `./i18n.sh` script will re-scan English sources to update `.pot` and `.po` files in `./po` directory. The tool does the best to perform fuzzy matching over previous translation strings whenever it is possible. Updated `.pot` and `.po` and files should be committed together with changed English Markdown files. 

**Translation of .PO files**.  [Weblate][weblate] automatically pulls recent data from `.pot` and `.po` files from the `master` of the repo and makes new strings available for translation. Translation teams works in their pace to localize new strings via [Weblate][weblate] web-interface. Weblate sends Pull Requests with updated PO files once per day if any changes available. Weblate never touches Markdown files. It is also possible edit `.po` files directly in the repo - Weblate will updated when changes are pushed into `master`.

**.PO to localized Markdown files**. The second function of [po4a][po4a] tool is to incorporate new translations from `.po` files into localized (`.lang.md`) files. Localized Markdown files are always regenerated from the source English file by performing simple replacement of English strings with localized strings from `.po` files. Formatting of the original English source files is always fully preserved and replicated to all other locales as a result of this simple process. All strings without localization in `.po` files are kept untouched in English.

### Prerequiresites

Install [po4a][po4a] tool. Version 0.68 is tested and supported. All other versions are tested.

**Debian/Ubuntu**:

```
apt-get install po4a
```

**Fedora/RedHat**:

```
dnf install po4a
```

**macOS**:
```
brew install po4a
```

## Use-cases

### I am a content writer

- Add/edit source **English** Markdown files in the repo.
- Refresh `.pot` and `.po` files when English is changed by running `./i18n.sh`.
- Push both updated content and refreshed `.pot`/`.po` files in the single PR to GitHub.
- Translation teams will be notified via Weblate when your PR is merged.
- All new strings will be in English until localized (see the next step).

### I am a translator

- Use [Weblate][weblate] web interface to update translations.
- It is also OK to update `.po` files directly in repo.
- Don't touch localized `.lang.md` files.

### I am a repository maintainer

- Checkout `weblate-i18n branch when it is updated by Weblate.
- Run `./i18n.sh` tool to regenerate `.lang.md` files from updated `.po` files.
- Update `.config.toml` if a new language is added.
- Run `zola server` to check changes locally.
- Create or update PR with incorporated `.lang.md` changes.
- Get your PR merged into `master`.
- Never force-push to `master` branch - it will lock Weblate.

[po4a]: https://po4a.org/index.php.en
[weblate]: https://hosted.weblate.org/projects/organicmaps/website/
