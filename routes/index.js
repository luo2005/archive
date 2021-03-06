var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    db.collection('articles').find().toArray(function (err, result) {
        if (err) return next(err);
        //add hyperlink url
        result.forEach(function (art) {
            art.url = './article/' + art._id;
        });
        res.render('index', { meta: req.meta, arts: result });
    });
});

module.exports = router;