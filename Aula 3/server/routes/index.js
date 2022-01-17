const express = require('express');
const reports = require('./reports/documents');

const router = express.Router();

router.use('/api/v1/reports', reports);

module.exports = router;
