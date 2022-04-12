import express from 'express';
import Data from './model/model.js';
const router = express.Router();

router.get('/getAll', async (req, res) => {
	try {
		const data = await Data.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.get('/10prompt', (req, res) => {
	res.send('Here are 10 prompts');
});

export default router;
