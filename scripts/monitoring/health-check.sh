#!/bin/bash
echo "🩺 Checking service health..."

if curl -sSf http://localhost:8000/health > /dev/null; then
  echo "✅ Service is UP"
else
  echo "❌ Service is DOWN"
fi
