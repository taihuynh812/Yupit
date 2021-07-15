import React from 'react'
import MarkerManager from '../../util/marker_manager'

class BusinessMap extends React.Component{
    
    componentDidMount(){
        // debugger
        const mapOptions = {
            center: {lat: this.props.businesses[0].lat, lng: this.props.businesses[0].lng},
            zoom: 12
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions)
        this.MarkerManager = new MarkerManager(this.map)
        this.MarkerManager.updateMarkers(this.props.businesses)
    }

    componentDidUpdate(){
        // debugger
        const mapOptions = {
            center: {lat: this.props.businesses[0].lat, lng: this.props.businesses[0].lng},
            zoom: 12
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions)
        this.MarkerManager = new MarkerManager(this.map)
        this.MarkerManager.updateMarkers(this.props.businesses)
    }

    render(){
        return(
            <div id="map-container" ref={map => this.mapNode = map}>

            </div>
        )
    }
}

export default BusinessMap