/**
 * Created by Hector on 2/28/2017.
 */
console.log("Entering Test Webpack");
var context = require.context('./src', true, /.*spec\.js$/); //make sure you have your directory and regex test set correctly!
console.log(JSON.stringify(context.keys()));
context.keys().forEach(context);

console.log("Leaving Test Webpack");