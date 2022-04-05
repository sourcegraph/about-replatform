#!/bin/sh

echo "Creating static data directory"

mkdir -p public/data

echo "Creating a placeholder static fileCache file"

echo "{}" > public/data/fileCache.json

echo "Creating a placeholder static slugCache file"

echo "{}" > public/data/slugCache.json

echo "Starting dev server"

yarn build:cache && next dev || exit 1
