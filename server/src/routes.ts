import express, { Express, Request, Response } from 'express';
import fetch from 'cross-fetch';

const router: Express = express();
const path = require('path');
const port = process.env.PORT || 3011;

router.use(express.static(path.join(__dirname, "..", "/pages")))

router.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "..", "/pages", "index.html"));
});

router.get('/doglist', async (req: Request, res: Response) => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all")

  if (!response.ok) {
    return res.json({ msg: `Error! Request Code: ${response.statusText}` })
  }

  response.json().then(dogs => res.send(dogs));
});

router.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});