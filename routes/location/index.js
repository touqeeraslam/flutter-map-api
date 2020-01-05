var express = require('express');
var router = express.Router();
var locationController = require('./location.controller')

/* GET lat and long. */
router.get('/',locationController.get_coords );
router.post('/login',function(req,res){
    console.log(req.body);
    return res.send(req.body);
});

module.exports = router;
