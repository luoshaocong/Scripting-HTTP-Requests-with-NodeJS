function print_lowercase (html) {

  /* Write your code here! */
  console.log(html.toLowerCase());

}
var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


getHTML(requestOptions, print_lowercase);