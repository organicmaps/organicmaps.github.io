#!/usr/bin/env bash

set -euo pipefail

if ! which po4a; then
    echo "ERROR: Missing po4a">&2
    echo " brew install po4a">&2
    echo " apt install po4a">&2
    echo " dnf install po4a">&2
    exit 1
fi

po4a .po4a.cfg

sed -e '/"PO-Revision-Date/d' -e '/"POT-Creation-Date/d' -i'~' po/content.*.po
rm -f po/content.*.po~
