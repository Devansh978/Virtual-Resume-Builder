const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const resumeRoutes = require('./routes/resumeRoutes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/resumes', resumeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
