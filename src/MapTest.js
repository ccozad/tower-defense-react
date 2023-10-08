import React from 'react';
import Map from './Map';
  
export default function MapTest() {
    return (
        <div>
            <h1>This is where we will experiment with map mechanics </h1>
            <Map rows={15} columns={30} />
        </div>
    );
}