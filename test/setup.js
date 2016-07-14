
require('babel-register')();
var jsdom = require('jsdom')

var DEFAULT_HTML = '<html><body></body></html>'

// Define some variables to make it look like we're a browser
// First, use JSDOM's fake DOM as the document
global.document = jsdom.jsdom(DEFAULT_HTML)

// Set up a mock window
global.window = document.defaultView

// Allow for things like window.location
global.navigator = window.navigator
