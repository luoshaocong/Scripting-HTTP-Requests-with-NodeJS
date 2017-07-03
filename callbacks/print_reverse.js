function print_reverse (html) {

  /* Write your code here! */
  console.log(html.split('').reverse().join(''));

}
var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


getHTML(requestOptions, print_reverse);
