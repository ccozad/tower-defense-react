import React from 'react';
import { useRef, useState } from 'react';
import { isCollision } from './Util';

function CollisionTest() {
    const [box1Info, setBox1Info] = useState([]);
    const [box2Info, setBox2Info] = useState([]);
    const [box3Info, setBox3Info] = useState([]);
    const [box4Info, setBox4Info] = useState([]);

    const div1 = useRef(null);
    const div2 = useRef(null);
    const div3 = useRef(null);
    const div4 = useRef(null);

    const divs = [div1, div2, div3, div4];

    function detectColisions() {
        let box1Collisions = [];
        let box2Collisions = [];
        let box3Collisions = [];
        let box4Collisions = [];

        divs.forEach((div) => {
            if (div.current !== null) {
                if (isCollision(div1, div)) {
                    box1Collisions.push(<li>Collisions with {div.current.id}</li>);
                } else {
                    box1Collisions.push(<li>No collisions with {div.current.id}</li>);
                }

                if (isCollision(div2, div)) {
                    box2Collisions.push(<li>Collisions with {div.current.id}</li>);
                } else {
                    box2Collisions.push(<li>No collisions with {div.current.id}</li>);
                }

                if (isCollision(div3, div)) {
                    box3Collisions.push(<li>Collisions with {div.current.id}</li>);
                } else {
                    box3Collisions.push(<li>No collisions with {div.current.id}</li>);
                }

                if (isCollision(div4, div)) {
                    box4Collisions.push(<li>Collisions with {div.current.id}</li>);
                } else {
                    box4Collisions.push(<li>No collisions with {div.current.id}</li>);
                }
            }
        });

        setBox1Info(box1Collisions);
        setBox2Info(box2Collisions);
        setBox3Info(box3Collisions);
        setBox4Info(box4Collisions);
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
                <p>Box 1 Collisions:</p>
                <ul>
                    {box1Info}
                </ul>
                <p>Box 2 Collisions:</p>
                <ul>
                    {box2Info}
                </ul>
                <p>Box 3 Collisions:</p>
                <ul>
                    {box3Info}
                </ul>
                <p>Box 4 Collisions:</p>
                <ul>
                    {box4Info}
                </ul>
            </div>
            
        </>
    )
}

export default CollisionTest;