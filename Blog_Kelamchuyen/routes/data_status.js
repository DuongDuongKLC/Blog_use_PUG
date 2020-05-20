const express = require("express");
const data_status = express.Router();

//........................................................add_sign_blog

data_status.post('/vonglap.txt', (req, res, next)=>{
    res.sendFile("vonglap.txt");
});
data_status.post('/bongo.txt', (req, res, next)=>{
    res.sendFile("bongo.txt");
});
data_status.post('/mql.txt', (req, res, next)=>{
    res.sendFile("mql.txt");
});
data_status.post('/aly.txt', (req, res, next)=>{
    res.sendFile("aly.txt");
});
data_status.post('/aly.txt', (req, res, next)=>{
    res.sendFile("aly.txt");
});
data_status.post('/kien_thuc.txt', (req, res, next)=>{
    res.sendFile("kien_thuc.txt");
});
data_status.post('/kien_thuc.txt', (req, res, next)=>{
    res.sendFile("kien_thuc.txt");
});
data_status.post('/linux.txt', (req, res, next)=>{
    res.sendFile("linux.txt");
});
data_status.post('/thresh.txt', (req, res, next)=>{
    res.sendFile("thresh.txt");
});
// ................................ intro
data_status.post('/intro1.txt', (req, res, next)=>{
    res.sendFile("intro1.txt");
});
data_status.post('/intro2.txt', (req, res, next)=>{
    res.sendFile("intro2.txt");
});
data_status.post('/intro3.txt', (req, res, next)=>{
    res.sendFile("intro3.txt");
});
data_status.post('/intro4.txt', (req, res, next)=>{
    res.sendFile("intro4.txt");
});
data_status.post('/intro5.txt', (req, res, next)=>{
    res.sendFile("intro5.txt");
});
//.............................................//
module.exports = data_status;