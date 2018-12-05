// ------------------------------------- //
const weather = require('yahoo-weather');
const express = require('express');
const app     = express();
// ------------------------------------- //


//
//  This is just because I didn't feel
//  like writing a template file
//

app.get('/', function( req, res ){
  res.send(`<html>
<head>
<title>Nice Weather</title>
</head>
<body>
  <h1>Hello!</h1>
  <p>Please try sending a GET request with a location.<br>Example: https://niceweather.glitch.me/new%20york%20city.</p>
</body>
</html>`);
});

app.get('/:location', function(req, res){
  
  weather( req.params.location, 'F' ).then(
  
    function( data ){
      
      let niceWeather = {
       location: data.location.city + ',' + data.location.region,
       weather: data.item.condition.text,
       temp: data.item.condition.temp,
       unit: data.units.temperature
      };
      res.send( niceWeather );
      
    }
    
  ).catch( function(error){
      
      res.send(`Could not find weather for ${req.params.location}`);
  
  } );

});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
