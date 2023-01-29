#!/bin/bash

# This script creates required _index files to properly process news translations.
# TODO: Automatize it or find a way to avoid required translated _index files.

set -euo pipefail

if [ -z ${1:-} ]; then
  find content/news -type f -name 'index.*.md' -exec ./fix_news_translations.sh {} \;
else
  PARENT_DIR="$(dirname $1)/.."
  LANG_INDEX=$(basename $1)
  rsync -a "$PARENT_DIR/_index.md" "$PARENT_DIR/_$LANG_INDEX"
fi
