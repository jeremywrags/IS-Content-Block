var express = require('express');
var request = require('request');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function getToken(){
  var options = {
    'method': 'POST',
    'url': 'https://mcdgh6zb-3v79rzh9lbzr6m-1pxq.auth.marketingcloudapis.com/v2/token',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "grant_type": "client_credentials",
      "client_id": "<CLIENTID HERE>",
      "client_secret": "<CLIENTSECERET HERE>",
      "account_id": "1407771"
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    return(response.body.access_token);
  });
}

module.exports = router;
