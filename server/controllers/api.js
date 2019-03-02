const server = require('../server')
const db = require('../actions/db')

// Route Controller methods for /api 

exports.getAllData = async (req, res, next) => {
    const data = await db.getAll()
    res.json(data)
}
