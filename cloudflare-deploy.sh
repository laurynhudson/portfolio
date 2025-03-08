#!/bin/bash
# Script for deploying to Cloudflare Pages

# Build the site
echo "Building Next.js site..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed, aborting deployment."
  exit 1
fi

echo "Build successful, deploying to Cloudflare Pages..."
npm run deploy

echo "Deployment complete!"