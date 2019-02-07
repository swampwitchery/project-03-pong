import './styles/game.css';
import Game from './partials/Game';

// create a game instance
const game = new Game('game', 512, 256);
//below is an IIFE. gameLoop function is being called as a recursive
(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();