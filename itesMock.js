var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var mongoite003 =   require("./models/structite003");
var router      =   express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "I am on line!!"});
});


require('./routes')(app);

app.listen(process.env.PORT || 5000)
console.log("Listening on cloud");
