import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  house: { type: String, required: true },
  role: { type: String, required: true }
});

export default mongoose.model('Character', characterSchema);