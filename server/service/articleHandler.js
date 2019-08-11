// const path = require('path');
// const crypto = require('crypto');
// const mongoose = require('mongoose');
let Article = require('../models/Article');

// @route POST /
// @desc Insert Article
exports.cpInsertArticle = function (req, res) {
    // save model to database
    Article.collection.insertOne([req.body])
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        });

};

exports.cpGetArticles1 = function (req, res) {
    Article.find((err, Articles) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(Articles);
        }
    });
}

exports.cpGetArticles2 = function (req, res) {
    Article.find().
        then((Articles) => {
            res.send(Articles);
        }).catch((err) => {
            res.send(err);
        });
}