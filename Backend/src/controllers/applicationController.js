import Application from '../models/application.js';

const applyForJob = async (req, res) => {
  try {
    // Check if file exists
    if (!req.file) {
      return res.status(400).json({ msg: 'Please upload a resume' });
    }

    const newApplication = new Application({
      job: req.params.jobId,
      applicant: req.user.id,
      resumeUrl: req.file.path 
    });

    const application = await newApplication.save();
    res.json(application);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

const getUserApplications = async (req, res) => {
  try {
    const applications = await Application.find({ applicant: req.user.id })
      .populate('job', ['title', 'company']); // Get job details
    res.json(applications);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

export { applyForJob, getUserApplications };