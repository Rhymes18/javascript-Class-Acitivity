
var express = require("express");
const { appendFile } = require("fs");
var server = express();
var path = require("path");


function start(){
    console.log("server is strted at 8070");
};


server.listen(8070, start);