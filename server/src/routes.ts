import express, { Express, Request, Response } from 'express';

const app: Express = express();
const path = require('path');
const port = process.env.PORT || 3011;

app.use(express.static(path.join(__dirname, "..", "/pages")))

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "..", "/pages", "index.html"));
});

// app.get('/doglist', (req: Request, res: Response)) => {

// }

app.get('/yes', (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});