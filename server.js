var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reserveTableList = [
    {
        name: 'Pa Yeng',
        phone: '765',
        email: 'p@gmail.com',
        id: 1
    },
    {
        name: 'Pa Yeng',
        phone: '765',
        email: 'p@gmail.com',
        id: 2
    },
    {
        name: 'Pa Yeng',
        phone: '765',
        email: 'p@gmail.com',
        id: 3
    },
    {
        name: 'Pa Yeng',
        phone: '765',
        email: 'p@gmail.com',
        id: 4
    },
]

var waitingList = [
    {
        name: 'Pa',
        phone: '765',
        email: 'p@gmail.com',
        id: 5
    },
    {
        name: 'Pa',
        phone: '765',
        email: 'p@gmail.com',
        id: 6
    }
]

//============load page content==============

app.use(express.static(path.join(__dirname, "public")))

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/reservation', function(req,res){
    res.sendFile(path.join(__dirname, 'public/reservation.html'))
})

app.get('/table', function(req,res){
    res.sendFile(path.join(__dirname, 'public/table.html'))
})

//=============get api information===============

app.get('/api/reserveTable', function(req,res){
    return res.json(reserveTableList)  
})

app.get('/api/waitingTable', function(req,res){
    return res.json(waitingList)  
})

//=============POST reservation===============

app.post('/api/postReservation', function(req,res){

    console.log(req.body)

    if(reserveTableList.length < 5){
        reserveTableList.push(req.body);
        res.json(true)
    }else{
        waitingList.push(req.body);
        res.json(false)
    }

})

//=======Delete reservation=====

app.post('/api/clearTable', function(req,res){
    reserveTableList.length = 0;
    waitingList.length = 0;
    res.json({ok: true});
})







app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  