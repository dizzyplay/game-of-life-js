import {Game} from './game.js';

const game = new Game(64, 64);

const pre = document.getElementById('pre');

const render = () => {
  pre.textContent = game.render();
  game.tick();
  requestAnimationFrame(render);
};

render();
