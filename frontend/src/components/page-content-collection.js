import React from 'react'
import ContentTile from './content-tile'

// wraps all the collection items
// styles them using classes (see frontend/src/stylus/page-layouts.styl) based on the mediaQuery passed in as a prop

const Component = ({ collection, setLightbox, viewport }) => (
	<div className={setOrientationClass(viewport.layout)}>
		{layoutReducer(viewport)(collection).map(item => <ContentTile key={item.id} model={item} triggerLightbox={setLightbox}/>)}
	</div>
)

// Private helpers
// Should probably move these to their own Layout service 

// map the collection, adding a new 'row' parameter detailing layout type based upon device & orientatoin
function layoutReducer({ device, layout }) {
	let mediaQuery = `${device}${capitalizeFirstLetter(layout)}` 	// ie: mobileLandscape	
	return collection => dispatchLayout[mediaQuery](collection)		// finds layout guide for each collection item via the mediaQuery
}
// return a new [collection]
const dispatchLayout = {
	desktopLandscape(collection) {
		return collection.map((item, index) => {
			item.row = getRowFromFormation("2-3-4-6", index)
			return item
		})
	},
	desktopPortrait(collection) {
		return collection.map((item, index) => {
			item.row = getRowFromFormation("2-3-4-6", index)
			return item
		})
	},
	tabletLandscape(collection) {
		return collection.map((item, index) => {
			item.row = getRowFromFormation("1-3-4-6", index)
			return item
		})
	},
	tabletPortrait(collection) {
		return collection.map((item, index) => {
			item.row = getRowFromFormation("1-2-3-6", index)
			return item
		})
	},
	mobileLandscape(collection) {
		return collection.map((item, index) => {
			item.row = getRowFromFormation("1-2", index)
			return item
		})
	},
	mobilePortrait(collection) {
		return collection.map((item, index) => {
			item.row = getRowFromFormation("1-2", index)
			return item
		})
	}
}
// helper to isolate specific grid layouts
// returns a string that denotes the items class which handles the respective widths
function getRowFromFormation(formation, index) {
	switch(formation) {
		case "2-3-4-6":
			return index === 0 			? "row-of-2--large"
			: index === 1 				? "row-of-2--medium"
			: index > 1 && index <= 4 	? "row-of-3"
			: index > 4 && index <= 8 	? "row-of-4"
			: "row-of-6"
		case "1-2-3-6":
			return index === 0 			? "row-of-1"
			: index > 0 && index <= 2 	? "row-of-2"
			: index > 2 && index <= 8 	? "row-of-3"
			: "row-of-6"
		case "1-3-4-6":
			return index === 0 			? "row-of-1"
			: index > 0 && index <= 6 	? "row-of-3"
			: index > 6 && index <= 10 	? "row-of-4"
			: "row-of-6"
		case "1-2":
			return index <= 9 			? "row-of-1"
			: "row-of-2"
		default:
			return index === 0 			? "row-of-1"
			: index > 0 && index <= 1 	? "row-of-2"
			: index > 1 && index <= 4 	? "row-of-3"
			: index > 4 && index <= 8 	? "row-of-4"
			: "row-of-6"
	}
}
function setOrientationClass(type) {
	return `content-collection orientation--${type}` // now superflous
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export default Component