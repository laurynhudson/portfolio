#!/bin/bash
# Script for setting up custom domain for Cloudflare Pages

echo "To set up your custom domain laurynhudson.com, please follow these steps:"
echo ""
echo "1. Log into your Cloudflare dashboard at https://dash.cloudflare.com"
echo "2. Select 'Pages' from the sidebar menu"
echo "3. Click on your 'lauryn-portfolio' project"
echo "4. Go to the 'Custom domains' tab"
echo "5. Click 'Set up a custom domain'"
echo "6. Enter 'laurynhudson.com' and follow the prompts"
echo ""
echo "If your domain is already managed by Cloudflare:"
echo "  - Cloudflare will automatically configure your DNS records"
echo ""
echo "If your domain is NOT managed by Cloudflare:"
echo "  - Add a CNAME record at your domain registrar pointing laurynhudson.com to lauryn-portfolio.pages.dev"
echo ""
echo "Note: DNS changes can take up to 24-48 hours to fully propagate."