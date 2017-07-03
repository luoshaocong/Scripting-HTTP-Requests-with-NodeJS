var https = require('https');

function getAndPrintHTML (options) {

  
  https.get(options, function (response){
  	response.setEncoding('utf8');
  	response.on('data', function(data){
  		for(var i = 0; i <= data.length; i++)
  		{
  			var j = 0;
  			j = data + j ;
  		}
   console.log(j);
  	});
  });

  /* Add your code here */

}


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  getAndPrintHTML(requestOptions);