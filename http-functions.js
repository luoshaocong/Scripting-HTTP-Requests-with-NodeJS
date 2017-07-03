var https = require('https');
function getHTML (options, callback) {
	var dataSum = "";
	https.get(options,function (response){
	  response.setEncoding('utf8');
	  response.on('data', function(data){
			dataSum += data; 
		});
	
	
        
        
     response.on('end', function(){
     	 callback(dataSum);
     });
      
});

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};
getHTML(requestOptions,printHTML);
module.exports = function getHTML (options, callback) {
    /* Your code here */
    var dataSum = "";
	https.get(options,function (response){
	  response.setEncoding('utf8');
	  response.on('data', function(data){
			dataSum += data; 
		});
	
	
        
        
     response.on('end', function(){
     	 callback(dataSum);
     });
      
});
};
