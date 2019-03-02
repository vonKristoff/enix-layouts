module.exports = app => {
    // app views
    app.use('/api', require('./api'))
}