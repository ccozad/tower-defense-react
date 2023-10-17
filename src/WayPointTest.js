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

    const [targetWayPoint, setTargetWayPoint] = useState(-11);

    function nextWayPoint() {
        setTargetWayPoint((targetWayPoint) => (targetWayPoint + 1));
    }

    function start() {
        setTargetWayPoint(1)
    }

    function stop() {
        setTargetWayPoint(-1)
    }
    
    return (
        <>
            <div>
                <p>Way Point Controls</p>
                <button onClick={() => { start()}}>Start</button>
                <button onClick={() => { stop()}}>Stop</button>
            </div>
            <div>
                <OrdinaryEnemy 
                    texture={1} 
                    textureDebug={false} 
                    showBorder={true} 
                    wayPoints={wayPoints}
                    targetWayPoint={targetWayPoint}
                    health={50}
                    onWayPointReached={() => { nextWayPoint()}}
                    show={true}
                />
            </div>
            
        </>
    );
}