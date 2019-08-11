const mongoose = require('mongoose');
const { Schema } = mongoose; // === const Schema = mongoose.Schema;

const articleSchema = new Schema({
    articleHeader: {
        type: String,
    },
    articleDescription: {
        type: String,
    },
    articleMainImg: {
        type: String,
    },
    articleBody: {
        type: String,
    },
    articleStatus: { 
        type: Number, 
        default: 0
    }, //0: In Progress, 1:ready to publish, 2: Published, 3: Unpublished
    articleLastEdited: {
        type: Date,
    },
},{
    collection: 'Article'
});

module.exports = mongoose.model('articles', articleSchema);
