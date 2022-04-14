import express from 'express';
import Data from './model/model.js';
const router = express.Router();

router.get('/getAll', async (req, res) => {
	try {
		const data = await Data.find({}, { _id: 0 });
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.get('/random', async (req, res) => {
	try {
		const count = await Data.countDocuments();
		const random = Math.floor(Math.random() * count + 1);
		const data = await Data.find({ id: random }, { _id: 0 });
		res.send(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.get('/10', async (req, res) => {
	try {
		const data = await Data.aggregate([
			{ $project: { _id: 0 } },
			{ $sample: { size: 10 } },
		]);
		res.send(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.get('/5', async (req, res) => {
	try {
		const data = await Data.aggregate([
			{ $project: { _id: 0 } },
			{ $sample: { size: 5 } },
		]);
		res.send(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export default router;
