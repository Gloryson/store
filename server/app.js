import express from "express";
import { __dirname } from './__dirname.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/users', (req, res) => {
  res.sendFile(__dirname + '/img/Blu.jpg');
})

app.listen(3001, () => {
  console.log('running');
});