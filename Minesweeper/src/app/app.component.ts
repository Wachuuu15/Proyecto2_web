import { Component } from '@angular/core';
import { Board } from './game/board';
import { Cell } from './game/cell';
import { HostListener } from '@angular/core';

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
    this.onWindowResize();
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);

    if (result === 'gameover') {
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

  smallScreen(): boolean{
    return window.innerWidth < 400 && window.innerHeight<850;
  }

  largeScreen(): boolean{
    return window.innerWidth>= 400 && window.innerHeight>=850;
  }

  @HostListener('window:resize')
  onWindowResize(){
    if(this.smallScreen())
    {
      this.board = new Board(10, 50);
    }

    else if(this.largeScreen())
    {
      this.board = new Board(20, 50);

    }

    this.carita = "./../assets/carita.png"
  }

  reset() {
    if(window.innerWidth > 400 && window.innerHeight>850)
    {
      this.board = new Board(8, 50);
    }

    else
    {
      this.board = new Board(20, 50);

    }

    this.carita = "./../assets/carita.png"

  }
}