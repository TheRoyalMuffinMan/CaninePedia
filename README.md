# CaninePedia

### Live Link: https://caninepedia.herokuapp.com/

Enter a breed of a dog and gett a collection of images back.

## Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## Dependencies
### General
- TypeScript: https://www.typescriptlang.org/

### Front-end
- React: https://reactjs.org/
- Chakra UI: https://chakra-ui.com/
- react-responsive-carousel: https://github.com/leandrowd/react-responsive-carousel

### Back-end
- Koa: https://koajs.com/
- koa-bodyparser: https://github.com/koajs/bodyparser
- koa-mount: https://github.com/koajs/mount
- koa-router: https://github.com/koajs/router
- koa-static: https://github.com/koajs/static
- cross-fetch: https://www.npmjs.com/package/cross-fetch
- nodemon: https://github.com/remy/nodemon
- Dogs API: https://dog.ceo/dog-api/breeds-list

## Getting started

You will need to install Node.js.

For best results, use [Node.js 16 or higher](https://nodejs.org/).

You can check your current version of Node.js with

```sh
$ node --version
v16.17.0
```
## Running The Application
Below are the steps required to run the application (assuming you have Node.js installed).
#### In The Project Directory:
```sh
# NOTE: This section can be skipped if you use the dep-build.sh script
cd client/
npm install

# In a seperate terminal, starting in the project directory:
cd server/
npm install
```
Now you have install your dependencies, from there you can run both servers at the same time in two different terminals:
#### Terminal 1
```sh
cd server/
# This will start the back-end web server
npm run dev
```
#### Terminal 2
```sh
cd client/
# This will start the front-end web server
npm start
```
The two servers will be working through a proxy and the website will be located on: http://localhost:3000/

## Building The Application

In order to build this web application, the scripts down below can assist in getting it built:
#### dep-build.sh
This script will install of your dependencies required to the run the web application (this includes the node_module dependencies for the back-end & front-end).
#### build-run.sh
This script will build the front-end and move the directory to the back-end directory, after that the application will be running on port 3011. It is recommended to run the dep-build.sh script prior to this one, so that that node_modules are pre-loaded.

## Icons & Images
<a href="https://stocksnap.io/photo/brown-hair-W1EYIBKV4N">Photo</a> by <a href="https://stocksnap.io/author/32719">Andrew Branch</a> on <a href="https://stocksnap.io">StockSnap</a> \
<a href="https://www.flaticon.com/free-icons/dog" title="dog icons">Dog icons created by Freepik - Flaticon</a>
