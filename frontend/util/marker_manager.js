
export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {}
    }


    updateMarkers(businesses){
        businesses.forEach(business => {
            const myLatLng = {lat: business.lat, lng: business.lng}
            this.createMarkerFromBusiness(myLatLng, this.map)
        })
        
    }

    createMarkerFromBusiness(latlng, map){
        new google.maps.Marker({
            position: latlng,
            map
        })
    }

}

