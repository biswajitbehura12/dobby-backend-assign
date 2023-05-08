const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth.js');

const {
    getimageData
    ,createupload
} = require('../controllers/uploadControls.js');

router.post('/upload',auth, createupload)

router.post('/get-all-upload',auth, getimageData);

module.exports = router;