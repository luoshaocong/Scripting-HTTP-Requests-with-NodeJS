function printUpperCase (html) {

  /* Write your code here! */
  console.log(html.toUpperCase());

}
var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};


getHTML(requestOptions, printUpperCase);