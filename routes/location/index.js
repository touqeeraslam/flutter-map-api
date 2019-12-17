var express = require('express');
var router = express.Router();
var locationController = require('./location.controller')

/* GET lat and long. */
router.get('/',locationController.get_coords );

module.exports = router;
