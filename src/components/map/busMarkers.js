import React, { Fragement } from 'react';
import { Marker } from ' react-leaflet';
import { busLocationIcon } from './busLocationIcon';
import MarkerPopup from './MarkerPopup';

const busMarkers = (props) => {
    const { venues } = props;
    const markers = venues.map(( venue, index ) => (
        <Marker 
        key= {index}
        position = {venue.geometry}
        icon = { busLocationIcon }
        >
            <MarkerPopup data = { venues }/>
        </Marker>
    )); 
    return <Fragement>{markers}</Fragement>
};

export default busMarkers;
