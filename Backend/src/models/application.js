import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  resumeUrl: { type: String, required: true }, // Path to file
  status: { type: String, default: 'Applied' },
  appliedAt: { type: Date, default: Date.now }
});

const Application = mongoose.model('Application', ApplicationSchema);

export default Application;