# SQUARE ENIX - FrontEnd Developer Test

**Candidate: JC Nicolas**

_some brief notes_

Firstly thanks! that was a fun test - there were quite a few different ways of thinking of a solution for this.

### Build notes

I used `create react app` to generate my core frontend application. I also created an `express` server to serve the `index.html` plus app `bundle` , as well as deliver the database collection from a `get` request within the app.

The database `.json` was generated using `node` see `server/database-generator.js`

During development I ran the server to enable the fetch, and the CRA dev env to test develop, until I was ready to build the frontend app as statics to the public server location.

### Installation

Please navigate to the `server` directory and `npm install` there.

**Boot app**

```
npm start // http://localhost:8080
```

### Structural Overview

Please find App source code here: `frontend/src`

```
App						// core app state and requests collection payload
	ContentCollection 	// wraps and handles the collection
		ContentTile		// delivers the page content with layout style
	Lightbox			// recieves model from user interaction with the ContentTile 
```



### Missing (time constraints)

* Tests! Sorry
* Could look a great deal better
* Organisation of code could have been improved, such as creating a layout service to handle the layout classes outside of the `ContentTile` component
* No use of `Redux` .. however was it neccessary?
* Stylesheets lack better use of mixins
* Code comments - could be tidier and potentially more helpful! - speed gets in the way.

