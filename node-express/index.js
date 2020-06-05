const express = require('express'), http = require('http');
const hostname = 'localhost', port = 3000;
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');


app.use('/dishes',dishRouter);
app.use('/leader',leaderRouter);
app.use('/promo',promoRouter);
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.all('/dishes',(req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes', (req,res,next) => {
    res.end('Will send all the dishes to you!');
});

app.post('/dishes',(req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
});

app.delete('/dishes',(req,res,next) => {
    res.end('Deleting all dishes');
});

app.get('/dishes/:dishId', (req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});

app.use((req,res,next)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});


app.all('/leader',(req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/leader', (req,res,next) => {
    res.end('Will send all the leader to you!');
});

app.post('/leader',(req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leader');
});

app.delete('/leader',(req,res,next) => {
    res.end('Deleting all leader');
});

app.get('/leader/:leaderId', (req,res,next) => {
    res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
});

app.post('/leader/:leaderId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /leader/'+ req.params.leaderId);
});

app.put('/leader/:leaderId', (req, res, next) => {
  res.write('Updating the leader: ' + req.params.leaderId + '\n');
  res.end('Will update the leader: ' + req.body.name + 
        ' with details: ' + req.body.description);
});

app.delete('/leader/:leaderId', (req, res, next) => {
    res.end('Deleting leader: ' + req.params.leaderId);
});

app.all('/promo',(req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/promo', (req,res,next) => {
    res.end('Will send all the promo to you!');
});

app.post('/promo',(req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promo');
});

app.delete('/promo',(req,res,next) => {
    res.end('Deleting all promo');
});

app.get('/promo/:promoId', (req,res,next) => {
    res.end('Will send details of the promo: ' + req.params.promoId +' to you!');
});

app.post('/promo/:promoId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promo/'+ req.params.promoId);
});

app.put('/promo/:promoId', (req, res, next) => {
  res.write('Updating the promo: ' + req.params.promoId + '\n');
  res.end('Will update the promo: ' + req.body.name + 
        ' with details: ' + req.body.description);
});

app.delete('/promo/:promoId', (req, res, next) => {
    res.end('Deleting promo: ' + req.params.promoId);
});

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});

