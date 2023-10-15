import React from 'react';
import OrdinaryEnemy from './OrdinaryEnemy';
import { useState } from 'react';

/*function moveEnemy() {
    let dx = endPosition.x - currentPosition.x;
    let dy = endPosition.y - currentPosition.y;
    let distance = Math.sqrt(dx*dx + dy*dy);
    let ratio = speed / distance;
    let x = ratio * dx;
    let y = ratio * dy;
    currentPosition = {x: x, y: y};
    //console.log(currentPosition);
}*/


  
export default function WayPointTest() {
    const wayPoints = [
        {x: 0, y: 0},
        {x: 30, y: 30},
        {x: 500, y: 500}
    ];

    const [angle, setAngle] = useState(0);
    const [started, setStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    //const [startWayPoint, setStartWayPoint] = useState(0);
    //const [destinationWayPoint, setDestinationWayPoint] = useState(1);
    // Unit of speed is px/ms
    //const [speed, setSpeed] = useState(1);
    const [currentPosition, setCurrentPosition] = useState(wayPoints[0]);
    //const [startTime, setStartTime] = useState(0);
    //const [endTime, setEndTime] = useState(0);
    //const [elapsedTime, setElapsedTime] = useState(0);

    // start an waypoint n
    // Move towards way point n + 1
    // Once we reach way point n + 1, start moving towards way point n + 2
    // And so on until we reach the final way point
    
    // Is the enemy at the final goal?
    // Yes, stop the enemy.
    // No, move the enemy.
    // Is the enemy at the next way point?
    // Yes, move the enemy to the following way point.
    // No, move the enemy towards the current way point.
    //
    // Movement detials
    // Move the enemy at a constant speed.
    // Speed is measured in pixels per second.
    // The enemy rotates to face the next way point.
    // Each update, consideres the amount of time that has passed since the last update.

    // This will not work because of the way React works.
    //
    // React may batch multiple setState() calls into a single update for performance.
    // Because this.props and this.state may be updated asynchronously, 
    // you should not rely on their values for calculating the next state.

    function moveTowardWayPoint() {
        //setEndTime(Date.now());
        //setElapsedTime(endTime - startTime); // ms
        let dx = wayPoints[1].x - currentPosition.x;
        let dy = wayPoints[1].y - currentPosition.y;
        //let distance = Math.sqrt(dx*dx + dy*dy); // px
        //console.log("Distance: " + distance);

        //if (distance < 5) {
        //    console.log("Reached way point");
        //    setCurrentPosition(wayPoints[destinationWayPoint]);
        //    setStartWayPoint((startWayPoint) => (startWayPoint + 1) % wayPoints.length);
        //    setDestinationWayPoint((destinationWayPoint) => (destinationWayPoint + 1) % wayPoints.length);
        //} else {
            let newAngle  = Math.atan2(-dy, dx) * 180 / Math.PI; // deg

            setAngle(newAngle);
            setCurrentPosition((currentPosition) => {
                return {
                    x: currentPosition.x + 1, 
                    y: currentPosition.y + 1
                };
            });
        //}

        //setStartTime(endTime);
    }
    
    function start() {
        if(!started){
            //setStartTime(Date.now());
            setTimer(setInterval(moveTowardWayPoint, 1000/24));
            setStarted(true);
        }
    }
    
    function stop() {
        clearInterval(timer);
        setStarted(false);
    }
    return (
        <>
            <div>
                <p>Waypoint Controls</p>
                <button onClick={() => start()}>start</button>
                <button onClick={() => stop()}>Stop</button>
                <button onClick={() => {
                    stop();
                    setAngle(0); 
                    setCurrentPosition(wayPoints[0]);
                    //setStartWayPoint(0);
                    //setDestinationWayPoint(1);
                    //setElapsedTime(0);
                    //setStartTime(0);
                    //setEndTime(0);
                    //setSpeed(1);
                }}>Reset</button>
            </div>
            <div>
                <p>Angle: {angle} Position: ( {currentPosition.x.toFixed(0)}, {currentPosition.y.toFixed(0)} )</p>
            </div>
            <div>
                <OrdinaryEnemy 
                    texture={1} 
                    textureDebug={false} 
                    showBorder={true} 
                    x={currentPosition.x}
                    y={currentPosition.y}
                    rotation={angle}/>
            </div>
            
        </>
    );
}