import mongoose from 'mongoose';

const QuerySchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  name: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  website: { type: String },
  message: { type: String, required: true },
  status: { type: String, default: 'pending' },
}, { timestamps: true });

const QUERY_COLLECTION = process.env.QUERY_COLLECTION || 'b2b2_queries';
const Query = mongoose.models.Query || mongoose.model('Query', QuerySchema, QUERY_COLLECTION);
export default Query;
