import React from 'react';
import OrdinaryEnemy from './OrdinaryEnemy';

const wayPoints = [
    {x: 100, y:100},
    {x: 500, y:500},
];
  
export default function Level1() {
    return (
        <>
            <OrdinaryEnemy 
                texture={1} 
                textureDebug={true} 
                showBorder={true} 
                x={wayPoints[0].x}
                y={wayPoints[0].y}/>
        </>
    );
}