const express = require("express");
const path = require("path");
const csrf=require('csurf')
const expressSession=require('express-session');
const bodyParser = require("body-parser");
const autroutes = require("./routes/auth.route");
const errorhandlermiddleware=require('./middleware/error-handler')
const db = require("./data/database");
const addCsrfTokenMiddleware=require('./middleware/csrf-token');
const createSessionConfig = require("./config/session");
const app = express();

// Parse URL-encoded bodies (forms)
app.use(bodyParser.urlencoded({ extended: true }));
const sessionconfig=createSessionConfig()
app.use(expressSession(sessionconfig))
app.use(csrf())
app.use(addCsrfTokenMiddleware);
app.use(bodyParser.json());
//app.use(csrf())
app.use(autroutes);
app.use(errorhandlermiddleware);
app.use(express.static('views/styles'));
app.use(express.static('images'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.redirect('/signup');
});

db.connectToDatabase().then(() => {
    app.listen(3000, () => {
        console.log('Server is Running at 3000');
    });
}).catch(function (error) {
    console.log('Failed to connect the database');
    console.log(error);
});
