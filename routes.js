
module.exports = function (app) {

    //HOMEPAGE
    app.get('/', function (req, res) {
        res.render('content');
    });

    app.get('content', function(req, res) {
        res.render('/content.ejs')
    });
}