#!/bin/bash
set -e

# Verificar si el directorio locales-dashboard existe
if [ -d "locales-dashboard" ]; then
  echo "Building from locales-dashboard directory..."
  cd locales-dashboard
  npm install
  npm run build
  echo "Build completed successfully!"
else
  echo "Error: locales-dashboard directory not found"
  echo "Current directory contents:"
  ls -la
  exit 1
fi
