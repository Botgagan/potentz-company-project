import Job from '../models/job.js';

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ postedAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

const createJob = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const job = await newJob.save();
    res.json(job);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

export { getAllJobs, createJob };