import { Cross, Circle } from './player.js';

export class Game {
    fields = Array(9).fill(null);
    constructor() {
        this.cross = new Cross();
        this.circle = new Circle();
        this.currentPlayer = this.cross;
    }
}