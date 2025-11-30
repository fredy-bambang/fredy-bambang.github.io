#!/bin/bash

# Quick Deploy Script for Personal Website
# Usage: ./quick-deploy.sh "Your commit message"

set -e

echo "🚀 Starting deployment process..."
echo ""

# Navigate to project folder
cd project

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Go back to root
cd ..

# Clean old build files
echo "🧹 Cleaning old files..."
rm -rf assets

# Copy new build files
echo "📋 Copying new build files..."
cp -r dist/assets assets
cp dist/index.html index.html

# Remove temp dist folder
rm -rf dist

# Git operations
echo "📤 Committing and pushing changes..."
git add .

# Use provided commit message or default
COMMIT_MSG="${1:-Update website content}"
git commit -m "$COMMIT_MSG"

git push origin main

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site will be live at: https://fredy-bambang.github.io/"
echo ""
