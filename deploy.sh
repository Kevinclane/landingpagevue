#!/usr/bin/env sh
# abort on errors
set -e
# build
cd clientsrc
npm run build
cd ..
# navigate into the build output directory
cd client
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
# git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/Kevinclane/landingpagevue.git master:gh-pages
cd -