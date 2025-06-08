#!/bin/bash
echo "🔍 Running lint..."

if [ -f package.json ]; then
  npx eslint . || true
else
  echo "No lint configured."
fi
