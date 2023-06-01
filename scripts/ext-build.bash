#!/usr/bin/env bash
PACKAGE_VERSION="$(jq -r ".version" package.json)"
MANIFEST_VERSION="$(jq -r ".version" public/manifest.json)"

if [ "$PACKAGE_VERSION" != "$MANIFEST_VERSION" ]; then
  echo "Version mismatch: package.json: $PACKAGE_VERSION, manifest.json: $MANIFEST_VERSION"
  exit 1
fi

OUT_FILE="web-ext-artifacts/twotab-$PACKAGE_VERSION-src.zip"
rm -f "$OUT_FILE"

mkdir -p web-ext-artifacts

# NOTE: We actually want word splitting here, since the files
# should be passed as separate arguments to zip.
# shellcheck disable=2046
zip -r "$OUT_FILE" $(git ls-files)

pnpm run build
pnpm web-ext build --source-dir ./dist --overwrite-dest

