import express from "express";
import { __dirname } from './__dirname.js';
import cors from 'cors';
import mongodb from 'mongodb';



const app = express();
app.use(cors());
app.listen(3001);



const mongoClient = new mongodb.MongoClient('mongodb://127.0.0.1:27017/');



const connect = async () => {
	try {
		let db = mongoClient.db('store');
		let collection = db.collection('goods');
    let goods = await collection.find().toArray();

    app.get('/img/:num', (req, res) => {
      res.sendFile(__dirname + `/img/goods/${req.params.num}.jpg`)
    });
		
		app.get('/db/:cat', (req, res) => {
      if (req.params.cat === 'popular') {
        res.send([53, 70, 75, 1, 12, 5, 32, 29, 15, 36, 9, 39].map(code => goods[code - 1]));
        return;
      }
      res.send(goods.filter(good => req.params.cat === good.category));
    });
		
	} catch (error) {
		console.log(error);
	}
};

connect();