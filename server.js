const express = require('express');
const app = express();

const weather = require('yahoo-weather');


app.use(express.static('public'));

app.get('/', ( req, res ) => res.send('No') );

app.get('/:location', function(request, response) {

  let answer = new Object();
  
  weather( request.params.location, 'F' ).then(
  
    info => {
    
      answer.location = info.location.city + ',' + info.location.region;
      answer.weather  = info.item.condition.text;
      answer.temp     = info.item.condition.temp;
      answer.unit     = info.units.temperature;
      
      response.send( answer );
    
    }
    
  ).catch( error => response.send( error ) );

});


const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
