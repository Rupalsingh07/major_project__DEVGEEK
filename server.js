//Install express server
// function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
// }

const express = require('express');
const path = require('path');

const app = express();
// app.use(requireHTTPS);
// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist'));
app.use(express.static('./dist/frontend'));

app.get('/*', (req, res)=>{
    console.log(__dirname)
    res.sendFile('index.html', {root: 'dist/frontend/'})
});



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);