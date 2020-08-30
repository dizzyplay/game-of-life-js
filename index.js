import {Game} from './game.js';

const game = new Game(10, 10);

const pre = document.getElementById('pre');

const render = () => {
  pre.textContent = game.render();
  game.tick();
  requestAnimationFrame(render);
};

render();
