import React from 'react';
import MapCell from './MapCell';

export default function Map() {
    return (
        <>
            <div className="map-row">
                <MapCell />
                <MapCell />
            </div>
            <div className="map-row">
                <MapCell />
                <MapCell />
            </div> 
        </>
    );
}