import express from 'express';
import mongoose from 'mongoose';
import router from './routes.js';
import 'dotenv/config';
import cors from 'cors';

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

app.get('/', (req, res) => {
	res.send('Welcome to prompt API');
});

app.use((req, res, next) => {
	res.header(
		'Access-Control-Allow-Origin',
		'https://writing-prompt-generator.netlify.app'
	);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET');
	next();
});

app.use('/api', router);
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
	console.log(`Sever Started at ${process.env.PORT}`);
});
