import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import '../../scss/map.scss';
import { geolocated } from 'react-geolocated';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const longitude = this.props.coords ? this.props.coords.longitude : 30.11182
        const latitude = this.props.coords ? this.props.coords.latitude : -1.95793
        return (
            <div className='leaflet-container'>
                <MapContainer
                    center={{ lat: -1.95513, lng: 30.10425 }}
                    zoom={13}
                    scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[latitude, longitude]}>
                        <Popup>You are here</Popup>
                    </Marker>
                </MapContainer>,
            </div>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false
    },
    userDecisionTimeout: 30000
})(Map)