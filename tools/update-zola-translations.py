#!/usr/bin/env python3

import os
import sys
from glob import glob
import tomlkit
import polib

assert sys.version_info >= (3, 7, 0), "Python 3.7+ is required"

os.chdir(os.path.dirname(os.path.abspath(__file__)) + "/..")

ZOLA_CONFIG_TOML = "config.toml"
TRANSLATIONS_YAML = "translations.yaml"
ZOLA_COMMENT_PREFIX = 'type: Hash Value: '

# Read config.yaml
with open(ZOLA_CONFIG_TOML, "r") as f:
    config = tomlkit.loads(f.read())

# Merge changes from .po files into config.yaml
languages = config['languages']
sources = config['translations']
for index_path in glob('content/_index.*.md'):
    lang = index_path.removeprefix('content/_index.').removesuffix('.md')
    po_path = f"po/content.{lang}.po"
    if not os.path.exists(po_path):
        continue

    # Add a new section to TOML if needed
    if lang not in languages:
        languages[lang] = tomlkit.table()
        languages[lang]['translations'] = tomlkit.table()

    translations = languages[lang]['translations']

    # Update translations
    po_file = polib.pofile(po_path)
    for entry in po_file:
        if not entry.comment.startswith(ZOLA_COMMENT_PREFIX):
            continue
        for (file, no) in entry.occurrences:
            if file == TRANSLATIONS_YAML:
                break
        else:
            continue
        key = entry.comment.removeprefix(ZOLA_COMMENT_PREFIX).strip()
        if entry.msgstr and entry.msgstr != translations.get(key, ''):
            translations[key] = entry.msgstr

# Add default values and remove old keys
for lang, sections in languages.items():
    old_translations = sections['translations']
    new_translations = {}
    for key, default in sources.items():
        new_translations[key] = old_translations.get(key, default)
    sections['translations'] = new_translations

# Write config.yaml
with open(ZOLA_CONFIG_TOML, "w") as f:
    f.write(tomlkit.dumps(config, sort_keys=True))
