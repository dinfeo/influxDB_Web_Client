let express = require("express");
let app = express();

app.use(express.static("dist"));

var server = app.listen(8083, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server Start! "+host+":"+port);
})