#!/usr/bin/env bash
# exit on error
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b gh-pages
git add -A
git commit -m 'deploy'

# Replace USERNAME and REPO with your details
git push -f https://github.com/Ashutoshp-dev/todo-app.git gh-pages

cd -