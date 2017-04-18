/**
 * Created by Hector on 2/28/2017.
 */

import {Rests,TestingRest,TestingRestRepository} from "./src/libaries/Rest.jsx";

<<<<<<< HEAD


=======
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
/***************************************************************************/
/* This is needed to get a "FAKE" Server                                   */
/***************************************************************************/
const repositoriesNeeded=new TestingRest();
Rests.Lets().changeTo(repositoriesNeeded);
<<<<<<< HEAD
const debug=function(){};
=======
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e

console.log("Entering Test Webpack");
var context = require.context('./src', true, /.*spec\.js$/); //make sure you have your directory and regex test set correctly!
console.log(JSON.stringify(context.keys()));
context.keys().forEach(context);

console.log("Leaving Test Webpack");