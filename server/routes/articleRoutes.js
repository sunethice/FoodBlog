// const articleHandler = require('../service/articleHandler');

// module.exports = app => {
//     app.post('/add-article', articleHandler.cpInsertArticle);
// }

const express = require('express');
const ArticleRoutes = express.Router();

// Require Business model in our routes module
let Article = require('../models/Article');
const articleHandler = require('../service/articleHandler');


// Defined store route
ArticleRoutes.route('/add').post(articleHandler.cpInsertArticle);

// Defined get data(index or listing) route
ArticleRoutes.route('/').get(function (req, res) {
    Article.find(function (err, Articles) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(Articles);
        }
    });
});

// Defined edit route
ArticleRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Article.findById(id, function (err, article) {
        res.json(article);
    });
});

//  Defined update route
ArticleRoutes.route('/update/:id').post(function (req, res) {
    Article.findById(req.params.id, function (err, next, article) {
        if (!article)
            return next(new Error('Could not load Document'));
        else {
            article.person_name = req.body.person_name;
            article.business_name = req.body.business_name;
            article.business_gst_number = req.body.business_gst_number;

            article.save().then(article => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
ArticleRoutes.route('/delete/:id').get(function (req, res) {
    Article.findByIdAndRemove({ _id: req.params.id }, function (err, article) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = ArticleRoutes;