export function lerp(start, end, amt) {
  return (1-amt)*start+amt*end
}

export function isCollision(elemA, elemB) {
    let rect1 = elemA.current.getBoundingClientRect();
    let rect2 = elemB.current.getBoundingClientRect();

    return (rect1.x < rect2.x + rect2.width &&
         rect1.x + rect1.width > rect2.x &&
         rect1.y < rect2.y + rect2.height &&
         rect1.y + rect1.height > rect2.y)
}