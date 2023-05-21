import { Cell } from './cell';

const PEERS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

export class Board {
  cells: Cell[][] = [];

  private remainingCells = 0;
  private mineCount = 0;

  constructor(size: number, mines: number) {
    for (let y = 0; y < size; y++) {
      this.cells[y] = [];
      for (let x = 0; x < size; x++) {
        this.cells[y][x] = new Cell(y, x);
      }
    }

    // asignar minas
    for (let i = 0; i < mines; i++) {
      this.getRandomCell().mine = true;
    }

    // contar minas
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        let adjacentMines = 0;
        for (const peer of PEERS) {
          if (
            this.cells[y + peer[0]] &&
            this.cells[y + peer[0]][x + peer[1]] &&
            this.cells[y + peer[0]][x + peer[1]].mine
          ) {
            adjacentMines++;
          }
        }
        this.cells[y][x].proximityMines = adjacentMines;

        if (this.cells[y][x].mine) {
          this.mineCount++;
        }
        // Asignar el valor de colorClass
        const cell = this.cells[y][x];
        switch (cell.proximityMines) {
          case 1:
            cell.colorClass = 'one';
            break;
          case 2:
            cell.colorClass = 'two';
            break;
          case 3:
            cell.colorClass = 'three';
            break;
          case 4:
            cell.colorClass = 'four';
            break;
          case 5:
            cell.colorClass = 'five';
            break;
          case 6:
            cell.colorClass = 'six';
            break;
          case 7:
            cell.colorClass = 'seven';
            break;
            default:
              cell.colorClass = 'otro';
            break;
        }
        

      }
    }
    this.remainingCells = size * size - this.mineCount;
  }

  getRandomCell(): Cell {
    const y = Math.floor(Math.random() * this.cells.length);
    const x = Math.floor(Math.random() * this.cells[y].length);
    return this.cells[y][x];
  }

  checkCell(cell: Cell): 'gameover' | 'win' | null {
    if (cell.status !== 'open') {
      return null;
    } else if (cell.mine) {
      this.revealAll();
      return 'gameover';
    } else {
      cell.status = 'clear';

      // celda vacía
      if(cell.proximityMines === 0) {
        for(const peer of PEERS) {
          if (
            this.cells[cell.row + peer[0]] &&
            this.cells[cell.row + peer[0]][cell.column + peer[1]]
          ) {
            this.checkCell(this.cells[cell.row + peer[0]][cell.column + peer[1]]);
          }
        }
      }

      if (this.remainingCells-- <= 1) {
        console.log("Juego ganado")
        return 'win';
      }
      return null;
    }
  }

  revealAll() {
    for (const row of this.cells) {
      for (const cell of row) {
        if (cell.status === 'open') {
          cell.status = 'clear';
        }
      }
    }
  }
}