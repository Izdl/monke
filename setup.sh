npm install
rm -rf frontend
rm -rf public
git clone -b official-servers https://github.com/Abyss-Services/frontend
cd frontend
npm install
npm run build
cp -r ./public ../public
cd ..
