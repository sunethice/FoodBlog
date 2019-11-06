const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const keys = require('./config/keys');

const app = express();

/*===============Middleware===============*/
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));
app.use(function (req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

/*===============Routes===============*/
// require('./routes/authRoutes')(app);
require('./routes/fileManipulationRoutes')(app);
// require('./routes/articleRoutes')(app);
const businessRoute = require('./routes/articleRoutes');
app.use('/article', businessRoute);


/*===============Services===============*/
// require('./services/fileUpload.js');

/*===============Models===============*/
require('./models/User');
require('./models/Article');

/*===============Connection===============*/
const PORT = process.env.PORT || 4000; /* in production environment when we deploy the application to a service, it assigns
                                          a port to the environmental variable. but in development environment it is unavailable
                                          so that we need to give a port in that case.
                                        */
// Create mongo connection
// mongoose.createConnection(keys.mongoURI);
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
  .then(app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
  .catch(console.log);
