
export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
        this.createMarkerFromBusiness = this.createMarkerFromBusiness.bind(this);
    }

    updateMarkers(businesses) {
        const map = this.map
        if (businesses.length > 1) {
            for (let i = 0; i < businesses.length; i++) {
                this.createMarkerFromBusiness(businesses[i], map, i);
            }
        } else {
            businesses.forEach(business => {
                this.createMarkerFromBusiness(business, map, null)
            })
        }
    }

    createMarkerFromBusiness(business, map, num) {
        
        if (num === null) {
            const marker = new google.maps.Marker({
                position: { lat: business.lat, lng: business.lng },
                map
            })
        } else {
            const marker = new google.maps.Marker({
                position: { lat: business.lat, lng: business.lng },
                label: (num + 1).toString(),
                map
            }) 
        }
    }
}                 

