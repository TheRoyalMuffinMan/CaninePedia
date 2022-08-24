cd client/
npm run build
cd ..
mv client/build/ server/pages

cd server/
npm run build
npm start
