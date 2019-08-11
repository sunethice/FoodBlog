const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const keys = require('../config/keys');

// Init gfs
let gfs;

// Create mongo connection
const conn = mongoose.createConnection(keys.mongoURI);

conn.once('open', () => {
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
    url: keys.mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});
var cpUploadSingle = multer({ storage }).single('single');

// @route GET /
// @desc Loads form
exports.cpListFiles = function (req, res) {
    gfs.files.find().toArray((err, files) => {
        // Check if files
        if (!files || files.length === 0) {
            res.json({ files: false });
        } else {
            files.map(file => {
                if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
                    file.isImage = true;
                } else {
                    file.isImage = false;
                }
            });
            res.json({ files: files });
        }
    });
};

// @route POST /upload
// @desc  Uploads file to DB
exports.cpUploadFile = function (req, res, next) {
    // res.json({ file: req.file });
    cpUploadSingle(req, res, function (err) {
        if (err) {
            res.json({ file: false });
        }
        res.send( req.file );
    });
};

exports.cpWysiwygImgUpload = function (req, res, next) {
    // res.json({ file: req.file });
    cpUploadSingle(req, res, function (err) {
        if (err) {
            res.send(err);
        }
        res.send( {
            "status":true, 
            "originalName": req.file.originalname, 
            "generatedName":  req.file.filename.substr(0, req.file.filename.indexOf(".")+1), 
            "msg":"Image upload successful", 
            "imageUrl": "http://localhost:5000/image/" + req.file.filename 
        });
    });
};

// @route GET /files
// @desc  Display all files in JSON
exports.cpDispAllFiles = function (req, res) {
    gfs.files.find().toArray((err, files) => {
        // Check if files
        if (!files || files.length === 0) {
            return res.status(404).json({
                err: 'No files exist'
            });
        }
        // Files exist
        return res.json(files);
    });
};

// @route GET /files/:filename
// @desc  Display single file object
exports.cpDispFile = function (req, res) {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            });
        }
        // File exists
        return res.json(file);
    });
};

// @route GET /image/:filename
// @desc Display Image
exports.cpDispImage = function (req, res) {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            });
        }
        // Check if image
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            // Read output to browser
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).json({
                err: 'Not an image'
            });
        }
    });
};

// @route DELETE /files/:id
// @desc  Delete file
exports.cpDeleteFile = function (req, res) {
    gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, GridFSBucket) => {
        if (err) {
            return res.status(404).json({ err: err });
        }
        res.redirect('/');
    });
};