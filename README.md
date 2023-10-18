# tower-defense-react
 An open source tower defense game built in React. Originally built for the October 2023 React Game Jan

# Requirements (Local Dev)

- Text editor like [VS Code](https://code.visualstudio.com)
- Recent version of [Node.js](https://nodejs.org/en)

# Requirements (Containerized)

- A container environment like [Docker Personal](https://www.docker.com/products/personal/)

# Commands

Either launch method serves the app on http://loclhost:8080

## Local Dev
- Install dependencies `npm install`
- Build for dev `npm run build-dev`
- Build for prod `npm run build-prod`
- Run the local development server `npm run start`

## Containerized

- Launch containers `docker compose up`
- Clean up containers `docker compose down`

# Recognition

- [tower defense tilemap, OpenGameArt.org](https://opengameart.org/content/tower-defense-300-tilessprites)

# References

- [Animating with javascript: from setInterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/)
- [Bare Bones React Setup](https://medium.com/swlh/react-without-create-react-app-setting-up-a-dev-build-from-scratch-fefd5d9d6baa)
- [High Performance React](https://www.braingu.com/blog/react-rendering-for-rapidly-changing-uis)
- [React Webpack Settings](https://blog.logrocket.com/versatile-webpack-configurations-react-application/)
- [Tic Tac Toe Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
- [React Game Jam](https://reactjam.com)
- [Window::RequestAnimationFrame() method](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

# Demos

## Waypoints, Health Bar, and Map

[![Waypoint demo](https://img.youtube.com/vi/0ch7giEoVkU/0.jpg)](https://www.youtube.com/watch?v=0ch7giEoVkU)

## Collision Test

![Collision Test](/screenshots/collision-demo.png?raw=true "Collision Test")

# Capabilities

- [x] Show a map of sprite textures
- [x] Show enemy sprites
- [x] Move enemies using a way point system
- [x] Show enemy health 
- [x] Detect collisions
- [ ] Show tower sprites
- [ ] Show tower health
- [ ] Interactively place towers on the map
- [ ] Multiple enemy support
- [ ] Projectile system
- [ ] Simulate tower response to a wave of enemies
- [ ] Time a round
- [ ] Score a round
- [ ] Customize artwork to match React Game Jam 2023
- [ ] Sound effects
- [ ] Damage animations