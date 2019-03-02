const router = require('express').Router(),
    errorHandler = require('../utils/errors'),
    { catchErrors } = require('../utils/middleware'),
    controllers = require('../controllers/api')

router
.get('/all-data', catchErrors(controllers.getAllData))
.use(errorHandler)

module.exports = router