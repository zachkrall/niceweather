// ------------------------------------- //
const weather = require('yahoo-weather');
const express = require('express');
const app     = express();
// ------------------------------------- //


app.get('/', ( req, res ) => {
  res.send('Hi, please try sending a GET request after adding a location.\nExample: https://niceweather.glitch.me/new%20york%20city.')
});

app.get('/:location', (req, res) => {
  
  weather( req.params.location, 'F' ).then(
  
    ( data ) => {
      
      let send
      res.send( buildWeatherObject(data) );
      
    }
    
  ).catch( (error) => {
      
      res.send( error );
  
  } );

});

function buildWeatherObject( data ){

  let builtObject = {
   location: data.location.city + ',' + info.location.region,
   weather: data.item.condition.text,
   temp: data.item.condition.temp,
   unit: data.units.temperature
  };
  
  return builtObject;
  
}


const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
