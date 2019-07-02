//Install express server
const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(`${__dirname}/front-end/dist/`));

app.get('/*', function(req,res) {
    
res.sendFile(`./front-end/dist/index.html`);
});


// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/<name-of-app>'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
// });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);