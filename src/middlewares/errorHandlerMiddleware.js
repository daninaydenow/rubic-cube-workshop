



exports.errorHandler = function(error, req, res, next) {
    if(error) {
        res.locals.error = error;
        res.redirect('404');
    }
}