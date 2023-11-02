import cors from 'cors';
import express  from 'express';

let app = express();
app.use(cors());

const server = app.listen("4000", () => {
  console.log("App is active");
});

export default server;
