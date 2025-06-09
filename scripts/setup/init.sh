#!/bin/bash
set -e

echo "🛠 Setting up dev environment..."

sudo apt-get update
sudo apt-get install -y docker.io docker-compose

if [ -f requirements.txt ]; then
  pip3 install -r requirements.txt || true
fi

if [ -f package.json ]; then
  npm install || true
fi

echo "✅ Setup complete!"
