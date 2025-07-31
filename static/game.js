import { Cross, Circle } from './player.js';

export class Game {
    fields = Array(9).fill(null);
    constructor() {
        this.cross = new Cross();
        this.circle = new Circle();
        this.currentPlayer = this.cross;
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer instanceof Cross ? this.circle : this.cross;
    }

    makeMove(index) {
        if (this.fields[index] === null) {
            this.fields[index] = this.currentPlayer;
            this.currentPlayer.render(index);
            this.switchPlayer();
        }
    }

    clickFields() {
        document.querySelectorAll('.field').forEach((field, index) => {
            field.addEventListener('click', () => {
                this.makeMove(index);
            });
        });
    }
}