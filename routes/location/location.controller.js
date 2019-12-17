
'use strict';
var controller = {}

controller.get_coords = function (req, res) {
    //creating sample lat and long
    var coordinate = {
        lat: 37.42796133580664,
        long: -122.085749655962
    }
    //sending response back 
    res.send(coordinate);
};


module.exports = controller;