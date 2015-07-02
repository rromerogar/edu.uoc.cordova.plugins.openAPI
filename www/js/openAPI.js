var exec = require('cordova/exec');

var openAPI = {
    echo: function(str, callback) {
        cordova.exec(callback, function(err) {
            if(callback) {
                callback('Error: ' + err.toString());
            }
        }, "openAPI", "echo", [str]);
    }
};

module.exports = openAPI;
