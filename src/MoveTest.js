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


  
export default function Level1() {
    const wayPoints = [
        {x: 100, y:100},
        {x: 800, y:800},
    ];
    
    const [angle, setAngle] = useState(0);
    const [started, setStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(wayPoints[0]);

    function rotateEnemyCCW() {
        setAngle((angle) => (angle + 1) % 360);
    }

    function rotateEnemyCW() {
        setAngle((angle) => (angle - 1) % 360);
    }
    
    function startCCW() {
        console.log("startCCW");
        if(!started){
            setTimer(setInterval(rotateEnemyCCW, 1000/24));
            setStarted(true);
            console.log("started CCW");
        }
    }

    function startCW() {
        console.log("startCW");
        if(!started){
            setTimer(setInterval(rotateEnemyCW, 1000/24));
            setStarted(true);
            console.log("started CCW");
        }
    }
    
    function stop() {
        console.log("stop");
        clearInterval(timer);
        setStarted(false);
    }
    return (
        <>
            <div>
                <p>Rotation Controls</p>
                <button onClick={() => startCCW()}>Rotate CCW</button>
                <button onClick={() => startCW()}>Rotate CW</button>
                <button onClick={() => stop()}>Stop</button>
                <button onClick={() => {
                    stop();
                    setAngle(0); 
                    setCurrentPosition(wayPoints[0]);
                }}>Reset</button>
            </div>
            <div>
                <p>Angle: {angle}</p>
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