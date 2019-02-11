import {
  SVG_NS,
  KEYS
} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Winner from './Winner'

export default class Game {
  constructor(element, width, height) {
    this.width = width;
    this.height = height;

    this.gameElement = document.getElementById(element);
    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;

    this.radius = 8;
    this.boardWidth = 512;
    this.boardHeight = 256;

    this.score1 = new Score(this.width / 2 - 50, 30, 30);
    this.score2 = new Score(this.width / 2 + 25, 30, 30);
    this.board = new Board(this.width, this.height);

    this.winner = new Winner(this.width, this.height, 40);

    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      (this.height - this.paddleHeight) / 2,
      KEYS.a,
      KEYS.z
    );
    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.width - this.paddleWidth - this.boardGap,
      (this.height - this.paddleHeight) / 2,
      KEYS.up,
      KEYS.down
    );

    this.ball = new Ball(this.radius, this.width, this.height);
    this.ball2 = new Ball(this.radius, this.width, this.height);
    this.ball3 = new Ball(this.radius, this.width, this.height);

    this.score = new Score(this.x, this.y, this.size);

    document.addEventListener('keydown', event => {
      if (event.key === KEYS.spaceBar) {
        this.pause = !this.pause;
      }
    });
  }

  winningPlayer(svg, player) {
    this.winner.render(svg, `${player} Wins!!!`);
    this.pause = true;
  }

  render() {
    if (this.pause) {
      return;
    }


    this.gameElement.innerHTML = '';

    let svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttributeNS(null, 'width', this.width);
    svg.setAttributeNS(null, 'height', this.height);
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
    svg.setAttributeNS(null, 'version', '1.1');
    this.gameElement.appendChild(svg);

    this.board.render(svg);
    this.player1.render(svg);
    this.player2.render(svg);
    this.ball.render(svg, this.player1, this.player2);
    this.score1.render(svg, this.player1.score);
    this.score2.render(svg, this.player2.score);

    if (this.player1.score === 10) {
      this.winningPlayer(svg, this.player1)
    } else if (this.player2.score === 10) {
      this.winningPlayer(svg, this.player2)
    }
  }
}