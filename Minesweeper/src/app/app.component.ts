import { Component } from '@angular/core';
import { Board } from './game/board';
import { Cell } from './game/cell';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'minesweeper';
  carita = "./../assets/carita.png"

  board!: Board;
  constructor() {
    this.reset();
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      // alert('You lose');
      this.carita= "./../assets/triste.png"

    } else if (result === 'win') {
      // alert('you win');
      this.carita = "./../assets/ganar.png"
    }
  }

  flag(cell: Cell) {
    console.log(cell)
    if (cell.status === 'flag') {
      cell.status = 'open';
    } else {
      cell.status = 'flag';
    } 
  }

  reset() {
    this.board = new Board(20, 50);
    this.carita = "./../assets/carita.png"
  }

}