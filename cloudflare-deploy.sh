#!/bin/bash
# Script for deploying to Cloudflare Pages

# Check if API token is provided
if [ -z "$1" ]; then
  echo "Error: Cloudflare API token is required."
  echo "Usage: ./cloudflare-deploy.sh RJytHT5T-ywqnbMFMDo63FjTHpd_AIL0E_3u7Lev"
  exit 1
fi

# Set the API token
export CLOUDFLARE_API_TOKEN="$1"

# Build the site
echo "Building Next.js site..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed, aborting deployment."
  exit 1
fi

echo "Build successful, deploying to Cloudflare Pages..."
DEPLOY_OUTPUT=$(npm run deploy 2>&1)
echo "$DEPLOY_OUTPUT"

# Extract the deployment URL from the output
DEPLOY_URL=$(echo "$DEPLOY_OUTPUT" | grep -o 'https://[^ ]*\.pages\.dev' | tail -1)

echo "Deployment complete!"
if [ ! -z "$DEPLOY_URL" ]; then
  echo "Your portfolio is now live at: $DEPLOY_URL"
fi
echo "You can also access it at: https://lauryn-portfolio.pages.dev"

# Inform about custom domain setup
echo ""
echo "To set up your custom domain laurynhudson.com:"
echo "Run ./setup-domain.sh to see detailed instructions"