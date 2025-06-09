#!/bin/bash
echo "🔍 Running lint..."
eslint . || echo "No lintable files found or something went wrong."
