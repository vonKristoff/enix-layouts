const fs = require('fs')
const items = process.argv[2] || 21
const collection = []

// generate collection
for(let i = 0; i < items; i++) {
	let id = i + 1
	const item = {
	    id,
	    title: "Lorem Ipsum",
	    artwork: "https://placehold.it/1920x1080",
	    content: "Lorem ipsum dolor sit amet, consectetur..."
	}
	collection.push(item)
}
const file = JSON.stringify(collection)
// write db
fs.writeFile("./database.json", file, 'utf8', err => {
	console.log(file)
    if(err) console.log(err)
    else console.log("database has been generated..")
})