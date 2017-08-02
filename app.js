var express = require('express');
var app = express();



/*
 * Setup the webserver. 
 * Format routing. 
 */
app.use(express.static('public'));

/* 
 * Get / 
 */
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" ); 
    console.log("loaded index.html"); 
}); 

app.get('/courseguides/chartinfo', function (req, res) {
    res.sendFile( __dirname + "/public/" + "chartinfo.json" ); 
    console.log("loaded index.html"); 
}); 


var server = app.listen(4321, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})
