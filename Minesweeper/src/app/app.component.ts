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
  clase= "uno"

  board!: Board;
  constructor() {
    this.reset();
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);

    if(cell.proximityMines=== 1)
    {
      console.log("1");
      this.clase="one";
    }
    else if(cell.proximityMines=== 2)
    {
      console.log("2");
      this.clase="two";
    }
    else if(cell.proximityMines=== 3)
    {
      console.log("3");
      this.clase="three";
    }
    else if(cell.proximityMines=== 4)
    {
      console.log("4");
      this.clase="four";
    }
    else if(cell.proximityMines=== 5)
    {
      console.log("5");
      this.clase="five";
    }
    else if(cell.proximityMines=== 6)
    {
      console.log("6");
      this.clase="six";
    }
    else if(cell.proximityMines=== 7)
    {
      console.log("7");
      this.clase="seven";
    }
    else
    {
      console.log("otro");
      this.clase="otro";
    }

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