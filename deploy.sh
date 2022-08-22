cd client/
npm run build
cd ..
mv client/build/ server/pages

cd /server
git add .
git commit --allow-empty -m "redeploying"
git push -f heroku main

rm -r server/pages