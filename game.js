export class Game {
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

  tick() {
    const next = Uint8Array.from(this.cells);
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        const neighbor = this.getNeighbor(i, j);
        const idx = this.getIndex(i, j);
        const cell = this.cells[idx];
        if (cell === 0 && neighbor === 3) {
          next[idx] = 1;
        } else if ((cell === 1 && neighbor === 2) || neighbor === 3) {
          next[idx] = 1;
        } else {
          next[idx] = 0;
        }
      }
    }
    this.cells = next;
  }

  getIndex(row, col) {
    if (row >= this.height || col >= this.width)
      throw new Error('not valid col or row');
    return row * this.width + col;
    // 0 1 2
  }

  render() {
    let r = '';
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        const idx = this.getIndex(row, col);
        r += this.cells[idx] ? '◾️' : '▫️';
      }
      r += '\n';
    }
    return r;
  }
}
