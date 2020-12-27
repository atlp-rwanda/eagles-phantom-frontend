import React, { Component } from 'react';
import { MapView , TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
import data from './data/data.json';
import Makers from './VenueMarkers';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation : { lat: -1.9652573000000002, long: 30.170465399999998 },
            zoom: 13,
        }
    }
    render() {
        const { currentLocation, zoom } = this.state;
        return (
            <MapView center= { currentLocation } zoom = { zoom }>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />

            <Makers venues = { data.venues }/>
            </MapView>
        );
    }
}

export default Map;
