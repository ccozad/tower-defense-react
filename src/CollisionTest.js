import React from 'react';
import { useRef, useState } from 'react';
import { isCollision } from './Util';

function CollisionTest() {
    const [boxInfo, setBoxInfo] = useState([]);

    const div1 = useRef(null);
    const div2 = useRef(null);
    const div3 = useRef(null);
    const div4 = useRef(null);

    const divs = [div1, div2, div3, div4];

    function detectColisions() {
        let collisions = [];

        divs.forEach((div) => {
            if (div.current !== null) {
                divs.forEach((div2) => {
                    if (div2.current !== null && div.current !== div2.current) {
                        if (isCollision(div, div2)) {
                            collisions.push(<li>Collisions between {div.current.id} and {div2.current.id}</li>);
                        } else {
                            collisions.push(<li>No collisions between {div.current.id} and {div2.current.id}</li>);
                        }
                    }
                });
            }
        });

        setBoxInfo(collisions);
    }


    return (
        <>
            <div className="controls" style={{position: 'absolute', top: "25px", left: "500px"}}>
                <button onClick={() => {detectColisions()}}>Detect Collisions</button>
            </div>
            <div className='game'>
                <div id="box1" ref={div1} style={{width: '200px', height: '150px', backgroundColor: '#ff000066', position: 'absolute', top: '50px', left: '100px'}}>1</div>
                <div id="box2" ref={div2} style={{width: '100px', height: '100px', backgroundColor: '#0000ff66', position: 'absolute', top: '150px', left: '50px'}}>2</div>
                <div id="box3" ref={div3} style={{width: '30px', height: '30px', backgroundColor: '#00ff0066', position: 'absolute', top: '75px', left: '150px'}}>3</div>
                <div id="box4" ref={div4} style={{width: '100px', height: '100px', backgroundColor: 'yellow', position: 'absolute', top: '300px', left: '300px'}}>4</div>
            </div>
            <div className="info" style={{position: 'absolute', top: "50px", left: "500px"}}>
                <p>Collision Info:</p>
                <ul>
                    {boxInfo}
                </ul>
            </div>
        </>
    )
}

export default CollisionTest;