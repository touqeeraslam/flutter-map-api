
'use strict';
var controller = {}

controller.get_coords = function (req, res) {
    //creating sample lat and long
    var coordinate = {
        lat: 92.33,
        long: 93.145
    }
    //sending response back 
    res.send(coordinate);
};


module.exports = controller;