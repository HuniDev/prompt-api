import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema(
	{
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
	},
	{ collection: 'writingPrompt' }
);

const Data = mongoose.model('Data', dataSchema, 'writingPrompts');

export default Data;
