#!/usr/bin/env python3

import os
import tomlkit
import yaml
import shutil

os.chdir(os.path.dirname(os.path.abspath(__file__)) + "/..")

ZOLA_CONFIG_TOML = "config.toml"
TRANSLATIONS_YAML = "translations.yaml"

# Read config.yaml
with open(ZOLA_CONFIG_TOML, "r") as f:
    config = tomlkit.loads(f.read())

# Extract [translations]
translations = {}
for (k, v) in config['translations'].items():
    translations[str(k)] = str(v)

# Write translations.yaml
with open(TRANSLATIONS_YAML, "w") as f:
    yaml.dump(translations, f, allow_unicode=True, sort_keys=False)
shutil.copystat(ZOLA_CONFIG_TOML, TRANSLATIONS_YAML)
