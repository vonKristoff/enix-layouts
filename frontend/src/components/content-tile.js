import React from 'react'
const ContentTile = ({ model, triggerLightbox }) => (
    <div className={setLayoutClassName(model.row)} onClick={e => triggerLightbox(model)}>
    	<div className="tile-background" style={backgroundImageFromModel(model.artwork)}></div>
    	<div className="tile-meta">
	        <h3>{model.title}</h3>
	        <p>{model.content}</p>
       </div>
    </div>
)
const setLayoutClassName = row => `content-tile ${row}`
const backgroundImageFromModel = src => { 
	return {
		backgroundImage: `url(${src})`
	}
}
export default Component