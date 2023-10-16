import React from 'react';
import OrdinaryEnemy from './OrdinaryEnemy';
import { useState } from 'react';
  
export default function WayPointTest() {
    const wayPoints = [
        {x: 0, y: 0},
        {x: 100, y: 100},
        {x: 300, y: 0},
        {x: 300, y: 300},
        {x: 50, y: 200},       
    ];

    const [targetWayPoint, setTargetWayPoint] = useState(1);

    function nextWayPoint() {
        setTargetWayPoint((targetWayPoint) => (targetWayPoint + 1));
    }
    
    return (
        <>
            <div>
                <p>Way Point Controls</p>
                <button onClick={() => { nextWayPoint()}}>Next Way Point</button>
            </div>
            <div>
                <OrdinaryEnemy 
                    texture={1} 
                    textureDebug={false} 
                    showBorder={true} 
                    wayPoints={wayPoints}
                    targetWayPoint={targetWayPoint}
                />
            </div>
            
        </>
    );
}