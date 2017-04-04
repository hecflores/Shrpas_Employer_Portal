echo off
pushd src\main\webapp
echo /********************************************************/
echo /* Starting Watch of React Code                         */
echo /*                                                      */
echo /* Close if you want to stop this                       */
echo /********************************************************/
<<<<<<< HEAD
.\node_modules\.bin\webpack main.js
=======
.\node_modules\.bin\webpack src/app.js --watch
>>>>>>> b52cc917bd6158e211e6fd5ad8ad68cceba8ac8e
popd