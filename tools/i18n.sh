#!/usr/bin/env bash

set -euo pipefail

cd "$(dirname "$0")"
TOOLS="$(pwd)"

if ! which po4a; then
    echo "ERROR: Missing po4a">&2
    echo " brew install po4a">&2
    echo " apt install po4a">&2
    echo " dnf install po4a">&2
    exit 1
fi

set -x

if [ ! -x venv/bin/python3 ]; then
    python3 -m venv venv
fi
source venv/bin/activate
pip3 install -r requirements.txt

cd ..
npm ci

$TOOLS/extract-zola-translations.py

touch content/_index.md po/content.pot po/*.po # force re-generation
po4a .po4a.cfg

sed -e '/"PO-Revision-Date/d' -e '/"POT-Creation-Date/d' -i'~' po/content.*.po po/content.pot
rm -f po/content.*.po*~ po/content.pot~

$TOOLS/update-zola-translations.py

npm run format
