import React from 'react';
import HealthBar from './HealthBar';
import PropTypes from 'prop-types';

const textureMap = {
    1: {x: -1088, y: -1536},
    2: {x: -1152, y: -1536},
}

function OrdinaryEnemy({
    texture, 
    textureDebug = false, 
    showBorder = false,
    wayPoints = [],
    targetWayPoint = 1,
    health = 100,
    maxHealth = 100,
    onWayPointReached = null,
    show = false
}) {
    const [healthBarRotation, setHealthBarRotation] = React.useState(0);
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
    const cancelAnimation = React.useRef(false);
    const css = {
        "backgroundPosition": `${textureMap[texture].x}px ${textureMap[texture].y}px`,
        "visibility": show ? "visible" : "hidden"
    };
    const className =showBorder? "enemy-border" : "enemy";

    function animLoop(renderLocal, element) {
        var running, lastFrame = +new Date;
        function loop( now ) {
            if ( !cancelAnimation.current && running !== false ) {
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
        if ( enemyRef.current) {
            const dx = x.current - wayPoints[start.current].x;
            const dy = y.current - wayPoints[start.current].y;
            distanceTraveled.current = Math.sqrt(dx*dx + dy*dy);

            if ( distanceTraveled.current >= distance.current ) {
                if (onWayPointReached) {
                    onWayPointReached();
                }
                return false;
            } else {
                x.current += speed.current * direction.current.x;
                y.current += speed.current * direction.current.y;

                enemyRef.current.style.left = `${x.current}px`;
                enemyRef.current.style.top = `${y.current}px`;
            }
        } else {
            return false;
        }
    }

    React.useEffect(() => {
        if ( targetWayPoint > 0 && wayPoints.length > 1) {
            cancelAnimation.current = false;
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
            enemyRef.current.style.transition = "transform 0.5s ease-out";
            enemyRef.current.style.tracnsformOrigin = "top left";
            enemyRef.current.style.transform = `rotate(${rotation.current}deg)`;
            setHealthBarRotation(rotation.current);
            animLoop(render, enemyRef.current);
        } else {
            cancelAnimation.current = true;
        }
    }, [targetWayPoint]);

    return (
        <div ref={enemyRef} className={className} style={css}>
            <HealthBar health={health} maxHealth={maxHealth} rotation={healthBarRotation}/>
            {textureDebug ? <p>{texture}</p> : null}
        </div>
    );
}

OrdinaryEnemy.propTypes = {
    texture: PropTypes.number.isRequired,
    textureDebug: PropTypes.bool,
    showBorder: PropTypes.bool,
    wayPoints: PropTypes.array,
    targetWayPoint: PropTypes.number,
    health: PropTypes.number,
    maxHealth: PropTypes.number,
    onWayPointReached: PropTypes.func,
    show: PropTypes.bool
};

export default OrdinaryEnemy;