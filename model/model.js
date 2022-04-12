import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Data',
	},
	prompts: {
		type: String,
		required: true,
	},
	id: {
		type: Number,
		required: true,
	},
});

const Data = mongoose.model('Data', dataSchema);
export default Data;
