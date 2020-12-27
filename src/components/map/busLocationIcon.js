import L from 'leaflet';

export const busLocationIcon = L.icon({
    iconUrl: require('../../images/bus_location_icon.svg'),
    iconRetinaUrl: require('../../images/bus_location_icon.svg'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [ 35, 35],
    className: 'leaflet-bus-icon'
})