const express = require('express');
const router = express.Router();
const { createResume, getResumes } = require('../controllers/resumeController');

router.post('/create', createResume);
router.get('/', getResumes);

module.exports = router;
