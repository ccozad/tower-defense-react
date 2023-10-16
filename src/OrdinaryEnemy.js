import React from 'react';
import PropTypes from 'prop-types';

const textureMap = {
    1: {x: -1088, y: -1536}
}

function OrdinaryEnemy({
    texture, 
    textureDebug = false, 
    showBorder = false,
    wayPoints = [],
    targetWayPoint = 1
}) {
    const x = React.useRef(0);
    const y = React.useRef(0);
    const rotation = React.useRef(0);
    const distanceTraveled = React.useRef(0);
    const speed = React.useRef(1);
    const distance = React.useRef(0);
    const direction = React.useRef({x: 0, y: 0});
    const enemyRef = React.useRef(null);
    const start = React.useRef(0);
    const end = React.useRef(1);
    const css = {
        "backgroundPosition": `${textureMap[texture].x}px ${textureMap[texture].y}px`
    };
    const className =showBorder? "enemy-border" : "enemy";

    function animLoop(renderLocal, element) {
        var running, lastFrame = +new Date;
        function loop( now ) {
            if ( running !== false ) {
                requestAnimationFrame( loop, element );
                var deltaT = now - lastFrame;
                // do not render frame when deltaT is too high
                if ( deltaT < 160 ) {
                    running = renderLocal( deltaT );
                }
                lastFrame = now;
            }
        }
        loop( lastFrame );
    }

    function render() {
        const dx = x.current - wayPoints[start.current].x;
        const dy = y.current - wayPoints[start.current].y;
        distanceTraveled.current = Math.sqrt(dx*dx + dy*dy);

        if ( distanceTraveled.current >= distance.current ) {
            return false;
        } else {
            //x.current += speed.current * deltaT;
            x.current += speed.current * direction.current.x;
            y.current += speed.current * direction.current.y;
            /*if (x.current > wayPoints[end.current].x || y.current > wayPoints[end.current].y) {
                x.current = wayPoints[end.current].x;
                y.current = wayPoints[end.current].y;
            }*/
            enemyRef.current.style.left = `${x.current}px`;
            enemyRef.current.style.top = `${y.current}px`;
        }
    }

    /*React.useEffect(() => {
        const dx = endPosition.x - startPosition.x;
        const dy = endPosition.y - startPosition.y;
        distance.current = Math.sqrt(dx*dx + dy*dy);
        direction.current = {x: dx / distance.current, y: dy / distance.current};
        rotation.current = Math.atan2(dy, dx) * 180 / Math.PI;
        enemyRef.current.style.transform = `rotate(${rotation.current}deg)`;
        animLoop(render, enemyRef.current);
    }, []);*/

    React.useEffect(() => {
        console.log('Target way point changed');
        console.log(`targetWayPoint: ${targetWayPoint}`);
        if ( wayPoints.length > 1) {
            start.current = (targetWayPoint - 1) % wayPoints.length;
            end.current = targetWayPoint % wayPoints.length;
            x.current = wayPoints[start.current].x;
            y.current = wayPoints[start.current].y;
            enemyRef.current.style.left = `${wayPoints[start.current].x}px`;
            enemyRef.current.style.top = `${wayPoints[start.current].y}px`;
            const dx = wayPoints[end.current].x - wayPoints[start.current].x;
            const dy = wayPoints[end.current].y - wayPoints[start.current].y;
            distance.current = Math.sqrt(dx*dx + dy*dy);
            direction.current = {x: dx / distance.current, y: dy / distance.current};
            rotation.current = Math.atan2(dy, dx) * 180 / Math.PI;
            enemyRef.current.style.transform = `rotate(${rotation.current}deg)`;
            animLoop(render, enemyRef.current);
        }
    }, [targetWayPoint]);

    /*function refresh() {
        setClassName(showBorder? "enemy-border" : "enemy");
        setCss({
            "backgroundPosition": `${textureMap[texture].x}px ${textureMap[texture].y}px`,
            "left": `${x.current}px`,
            "top": `${y.current}px`,
            "transform": `rotate(${rotation.current}deg)`
        });
    }*/
    
    return (
        <>
            <div ref={enemyRef} className={className} style={css}>{textureDebug ? texture: ''}</div>
        </>
    );
}

OrdinaryEnemy.propTypes = {
    texture: PropTypes.number.isRequired,
    textureDebug: PropTypes.bool,
    showBorder: PropTypes.bool,
    wayPoints: PropTypes.array,
    targetWayPoint: PropTypes.number
};

export default OrdinaryEnemy;