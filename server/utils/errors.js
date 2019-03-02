// Handle Errors -> next use stauts lookup
module.exports = (err, req, res, next) => {
    // handling server error : passing => err.status
    // forcing default
    errorLookup["default"].call(res, err.data)
}

const errorLookup = {
	default(data) {
		this.json(data)
	},
    500(data) {
        this.json(data)
    }
}