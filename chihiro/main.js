// import './style.scss'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
const app = new PIXI.Application({ transparent: true });
document.body.appendChild(app.view);

// create a new Sprite from an image path.
// const bunny = PIXI.Sprite.from('https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140');
const bunny = PIXI.Sprite.from('/images/cercle.png');


// center the sprite's anchor point
bunny.anchor.set(0.5);
// bunny.anchor.set(0.100);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

app.ticker.add((delta) => {
    // just for fun, let's rotate mr rabbit a little
    // use delta to create frame-independent transform
    bunny.rotation  -= 0.01 * delta;
});