import React from 'react';
import OrdinaryEnemy from './OrdinaryEnemy';
import Map from './Map';
import { useState } from 'react';
  
export default function KitchenSinkTest() {
    const wayPoints = [
        {x: 896, y: 192},
        {x: 128, y: 192},
        {x: 128, y: 640},
        {x: 896, y: 640}       
    ];

    const mapTextures = [
        [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
        [79, 45, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 47, 79, 79],
        [79, 60, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 63, 46, 46],
        [79, 60, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61],
        [79, 60, 61, 48, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 61],
        [79, 60, 61, 62, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 61],
        [79, 60, 61, 62, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 61],
        [79, 60, 61, 62, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 61],
        [79, 60, 61, 63, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 61],
        [79, 60, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61],
        [79, 60, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61],
        [79, 75, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76],
        [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79]
    ];

    const [targetWayPoint, setTargetWayPoint] = useState(-1);
    const [health, setHealth] = useState(100);
    const [showBorder, setShowBorder] = useState(false);
    const [textureDebug, setTextureDebug] = useState(false);
    const [show, setShow] = useState(false);

    const wayPointList = wayPoints.map((wayPoint, index) => {
        if (index === targetWayPoint % wayPoints.length) {
            return (
                <li key={index} style={{color: "blue"}}>({wayPoint.x}, {wayPoint.y})</li>
            )
        } else {
            return (
                <li key={index}>({wayPoint.x}, {wayPoint.y})</li>
            )
        }
    });
    

    function nextWayPoint() {
        setTargetWayPoint((targetWayPoint) => (targetWayPoint + 1));
    }

    function decreaseHealth() {
        setHealth((health) => (health - 10));
    }

    function increaseHealth() {
        setHealth((health) => (health + 10));
    }

    function start() {
        setTargetWayPoint(1)
        setShow(true)
    }

    function stop() {
        setTargetWayPoint(-1)
        setShow(false)
    }
    
    return (
        <>  
        <div className="container">
            <div className="game">
                <div className='enemies'>
                    <OrdinaryEnemy 
                        texture={2} 
                        textureDebug={textureDebug} 
                        showBorder={showBorder} 
                        wayPoints={wayPoints}
                        targetWayPoint={targetWayPoint}
                        health={health}
                        maxHealth={100} 
                        onWayPointReached={() => { nextWayPoint()}}
                        show={show}
                    />
                </div>
                <div className='map'>
                    <Map 
                        rows={12} 
                        columns={15} 
                        textures2D={mapTextures} 
                        showBorder={showBorder} 
                        textureDebug={textureDebug}/>
                </div>
            </div>
           <div className="controls">
                <div>
                    <p>Debug Controls</p>
                    <input type="checkbox" id="showBorder" name="showBorder" checked={showBorder} onChange={() => setShowBorder(!showBorder)} />
                    <label htmlFor="showBorder">Show Border</label>
                    <input type="checkbox" id="textureDebug" name="textureDebug" checked={textureDebug} onChange={() => setTextureDebug(!textureDebug)} />
                    <label htmlFor="textureDebug">Texture Debug</label>
                </div>
                <div>
                    <p>Way Point Controls</p>
                    <button onClick={() => { start()}}>Start</button>
                    <button onClick={() => { stop()}}>Stop</button>
                    <p>Way Points</p>
                    <ol>
                        {wayPointList}
                    </ol>
                </div>
                <div>
                    <p>Health Controls</p>
                    <button onClick={() => decreaseHealth()}>Decrease Health</button>
                    <button onClick={() => increaseHealth()}>Increase Health</button>
                </div>
            </div>
        </div>
        </>
    );
}