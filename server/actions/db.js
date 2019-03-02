const database = require('../database.json')
// CRUD actions

exports.getAll = target => {
    return new Promise((resolve, reject) => {
    	if(database) resolve(database)
    	else reject("file must not exist")
    })
}