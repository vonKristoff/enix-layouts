import React from 'react'
const Lightbox = ({ active, model, closeLightbox }) => (
    <div className={isActive(active)} onClick={e => closeLightbox()}>
        <div className="lightbox-viewport">
            <div className="view-body" style={backgroundImageFromModel(model.artwork)}></div>
            <div className="view-caption">
                <span>{model.id} {model.title}</span>
            </div>
        </div>
    </div>
)
function backgroundImageFromModel(src) {
    return { 
        backgroundImage: src !== undefined ? `url(${src})` : 'none'
    }
}
function isActive(state) {
    return state ? "lightbox-component is-active" : "lightbox-component"
}
export default Component