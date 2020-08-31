import {Game} from './game.js';

const game = new Game(34, 34);

const pre = document.getElementsByClassName('z-layer');

const render = () => {
  for ( let a of pre){
    a.innerText = game.render();
  }
  game.tick();
    requestAnimationFrame(render);
};

render();

