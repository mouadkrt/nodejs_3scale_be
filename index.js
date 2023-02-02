var express = require('express'),
    fs = require('fs'),
    app = express();

var app = express();


const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
app.use(bodyParser.xml({inflate:true}));

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.post('/', function(req, res) {

    console.log("IAMSAPReceiptTransferExport_V1_BE received the following HTTP GET Request on / endpoint  :");

    console.log("HTTP HEADER ");
    console.log(req.headers);

    console.log("\nHTTP BODY : %j", req.body);

    const xml_content = fs.readFileSync("IAMSAPReceiptTransferExport_V1_BE_reply.xml");
    res.setHeader('content-type', 'text/xml; charset=utf-8');
    res.send(xml_content);


});

app.listen(8090, ip);
console.log('Server listening on 8090 ...');

module.exports = app;