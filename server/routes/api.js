const express = require('express');
const router = express.Router();

// Get api listing
router.get('/', function(req, res){
  res.send('API works');
});

module.exports = router;
