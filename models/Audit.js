import mongoose from 'mongoose';

const AuditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  website: { type: String },
  stuff: { type: String },
  status: { type: String, default: 'pending' },
}, { timestamps: true });

const AUDIT_COLLECTION = process.env.AUDIT_COLLECTION || 'audits';
const Audit = mongoose.models.Audit || mongoose.model('Audit', AuditSchema, AUDIT_COLLECTION);
export default Audit;