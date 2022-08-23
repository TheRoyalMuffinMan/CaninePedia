import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import fetch from 'cross-fetch';

const path: any = require('path');

const router: Express = express();
const jsonParser: any = bodyParser.json();
const port: string | number = process.env.PORT || 3011;

router.use(express.static(path.join(__dirname, "..", "/pages")))

router.get('/', (req: Request, res: Response): void => {
  res.sendFile(path.resolve(__dirname, "..", "/pages", "index.html"));
});

router.get('/list', async (req: Request, res: Response): Promise<any> => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all")
  if (!response.ok) {
    res.send({ msg: `Error! Request Code: ${response.statusText}` })
  }

  response.json().then(breeds => res.send(breeds));
});

router.post('/breed', jsonParser, async (req: Request, res: Response): Promise<any> => {
  const breed = req.body.value[0]
  const subBreed = (req.body.value.length > 1) ? '/' + req.body.value[1] : '';
  const response = await fetch(`https://dog.ceo/api/breed/${breed + subBreed}/images/random`);
  if (!response.ok) {
    res.send({ msg: `Error! Request Code: ${response.statusText}` })
  }
  response.json().then(image => res.send(image));
});

router.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});