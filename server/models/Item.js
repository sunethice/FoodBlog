const mongoose = require('mongoose');
const { Schema } = mongoose; // === const Schema = mongoose.Schema;

var Item = new ItemSchema(
    {
        img: {
            data: Buffer,
            contentType: String
        }
    }
);
var Item = mongoose.model('Clothes', ItemSchema);
