// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get API routes
const api = require('./server/routes/api.js')

// Create app
const app = express();

// Set body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Set API routes
app.use('/api', api);

// Catch all other routes and return index file
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Get port from environment and store in express
const port = process.env.PORT || '3000';
app.set('port', port);

// Create server
const server = http.createServer(app);

// Listen on provided port on all network interfaces
server.listen(port, function() {
  console.log(`API running on localhost:${port}`);
});
