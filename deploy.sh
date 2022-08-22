cd client/
npm run build
cd ..
mv client/build/ server/pages

git add .
git commit --allow-empty -m "redeploying"
git subtree push --prefix server heroku master

rm -r server/pages