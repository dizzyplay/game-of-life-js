class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cells = new Uint8Array(width * height);
    this.size = width * height;
    for (let i = 0; i < this.size; i++) {
      if (i % 2 === 0 || i % 7 === 0) {
        this.cells[i] = 1;
      }
    }
  }

  getNeighbor(row, col) {
    let count = 0;
    for (let deltaX of [this.width - 1, 0, 1]) {
      for (let deltaY of [this.height - 1, 0, 1]) {
        if (deltaX === 0 && deltaY === 0) continue;
        let x = (deltaX + col) % this.width;
        let y = (deltaY + row) % this.height;
        const idx = this.getIndex(y, x);
        count += this.cells[idx];
      }
    }
    return count;
  }
  getIndex(row, col) {
    if (row >= this.height || col >= this.width)
      throw new Error('not valid col or row');
    return row * this.width + col;
    // 0 1 2
  }
}

const game = new Game(4, 4);
console.log(game.cells);
console.log(game.getNeighbor(1, 1));
