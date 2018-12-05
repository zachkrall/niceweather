// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

const weather = require('yahoo-weather');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/:location', function(request, response) {

  let answer = new Object();
  
  answer.request_name = request.params.location;
  
  weather( request.params.location ).then(
  
    info => {
    
      answer.response = info;
      
      response.send( answer );
    
    }
    
  ).catch( error => response.send( error ) );

});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
