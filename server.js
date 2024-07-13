const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const userRoutes = require('./controllers/api/user-routes'); // Path to user-routes.js

const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;



const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      //sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
};


app.use(session(sess));


const loginRoutes = require("./controllers/api/user-routes");
app.use('/login', loginRoutes);


// Parse incoming request bodies with JSON payloads
app.use(express.json());

// Parse incoming request bodies with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Set Handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');



app.use(routes);
app.use(express.static('public'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});