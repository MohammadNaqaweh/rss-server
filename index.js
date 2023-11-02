import cors from 'cors';
import express  from 'express';
import { getJobs } from './getJobs.js';
import { getCoordinates } from './getCoordinates.js'

let app = express();
app.use(cors());

app.get('/getJobPosts', (req, res) => {
  getJobs(req, res);
})

app.get('/getCoordinates' , (req, res) => {
  getCoordinates(req, res);
})

const server = app.listen("4000", () => {
  console.log("App is active");
});

export default server;
