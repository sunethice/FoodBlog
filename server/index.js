const express = require('express'); // importing express js library
const app = express(); /* create running express application, normally have only one application but can have several.
                          this set up configuration to listen requests on the port and navigate to handler to get response.
                        */
// const cookieSession = require('cookie-session');
// const passport = require('passport');
// const bodyParser = require('body-parser');
const keys = require('./config/keys');
const mongoose = require('mongoose');;
require('./models/User');
require('./models/Article');

var multer = require('multer');
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
var gfs = Grid("test");

/** Setting up storage using multer-gridfs-storage */
var storage = GridFsStorage({
    url: keys.mongoURI,
    gfs : gfs,
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    },
    /** With gridfs we can store aditional meta-data along with the file */
    metadata: function(req, file, cb) {
        cb(null, { originalname: file.originalname });
    },
    root: 'ctFiles' //root name for collection to store files into
});

var upload = multer({ //multer settings for single upload
    storage: storage
});

/** API path that will upload the files */
app.post('/upload', function(req, res) {
    upload(req,res,function(err){
        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }
         res.json({error_code:0,err_desc:null});
    });
});


app.get('/file/:filename', function(req, res){
    gfs.collection('ctFiles'); //set collection name to lookup into

    /** First check if file exists */
    gfs.files.find({filename: req.params.filename}).toArray(function(err, files){
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        /** create read stream */
        var readstream = gfs.createReadStream({
            filename: files[0].filename,
            root: "ctFiles"
        });
        /** set the proper content type */
        res.set('Content-Type', files[0].contentType)
        /** return response */
        return readstream.pipe(res);
    });
});


const PORT = process.env.PORT || 5000; /* in production environment when we deploy the application to a service, it assigns
                                          a port to the environmental variable. but in development environment it is unavailable
                                          so that we need to give a port in that case.
                                        */

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })                                       
app.listen(PORT);
