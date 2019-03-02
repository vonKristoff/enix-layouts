import React, { Component } from 'react';
import Navigation from './components/navigation'
import PageContentCollection from './components/page-content-collection'
import Lightbox from './components/lightbox'
import Axios from 'axios/dist/axios'

const ENDPOINT = "http://localhost:8080/api/all-data"

class App extends Component {
    constructor() {
        super()
        this.state = {
            loaded: false,                      // async wait for get request
            collection: [],                     // store for payload
            focus: {                            // user triggered model to action the Lightbox component
                active: false,
                model: {}
            },
            mediaQuery: {                       // handle the media queiries bound by the reize listener
                layout: this.getOrientation(),
                device: this.getMediaType()
            }
        }
    }
    componentDidMount = () => {
        Axios.get(ENDPOINT).then(response => {
            this.setState({ collection: response.data, loaded: true })
        }).catch(console.log)
        window.addEventListener('resize', this.handleResize)        
    }
    toggleLightbox = (model = false) => {
        let state = model ? true : false
        this.setState({ focus: { active: state, model } })
    }
    handleResize = () => {
        let mq = this.state.mediaQuery
        let layout = this.getOrientation()
        let device = this.getMediaType()
        if(mq.layout !== layout || mq.device !== device) this.setState({ mediaQuery: { layout, device } })
    }
    getOrientation = () => {
        return ((window.innerWidth / window.innerHeight) > 1) ? "landscape" : "portrait"
    }
    getMediaType = () => {
        let width = window.innerWidth
        let type = width > 1024 ? "desktop"
        : width < 1024 && width >= 640 ? "tablet"
        : "mobile"
        return type
    }
    render = () => (
        <div className={hasLightboxActive(this.state.focus.active)}>
            <Navigation />
            {this.state.loaded && <PageContentCollection viewport={this.state.mediaQuery} collection={this.state.collection} setLightbox={this.toggleLightbox}/>}
            <Lightbox active={this.state.focus.active} model={this.state.focus.model} closeLightbox={this.toggleLightbox}/>
        </div>
    );
}

function hasLightboxActive(state) {
    return state ? "App has-lightbox" : "App"
}
export default App