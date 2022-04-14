import express from 'express';
import mongoose from 'mongoose';
import router from './routes.js';
import 'dotenv/config';

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', error => {
	console.log(error);
});
database.once('connected', () => {
	console.log('Database Connected');
});

const app = express();
app.use('/api', router);
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
	console.log(`Sever Started at ${process.env.PORT}`);
});