import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { Board } from '../game/board';
import { Cell } from '../game/cell';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  title = 'minesweeper';
  carita = "./../assets/carita.png";
  clase = "uno";
  board!: Board;
  flagMode = false; // Agrega una variable para rastrear el modo de bandera

  constructor(private router: Router) {
    this.onWindowResize();
  }

  checkCell(cell: Cell) {
    // Verifica si está en el modo de bandera y realiza acciones según el modo
    if (this.flagMode) {
      this.flag(cell);
    } else {
      const result = this.board.checkCell(cell);

      if (result === 'gameover') {
        this.carita = "./../assets/triste.png";
      } else if (result === 'win') {
        this.carita = "./../assets/ganar.png";
      }
    }
  }

  flag(cell: Cell) {
    if (cell.status === 'flag') {
      cell.status = 'open';
    } else {
      cell.status = 'flag';
    }
  }

  toggleFlagMode() {
    this.flagMode = !this.flagMode;
  }


  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth < 400) {
      this.board = new Board(8, 18);
    } else {
      this.board = new Board(20, 50);
    }

    this.carita = "./../assets/carita.png";
  }

  reset() {
    if (window.innerWidth < 400) {
      this.board = new Board(8, 18);
    } else {
      this.board = new Board(20, 50);
    }

    this.carita = "./../assets/carita.png";
  }

  redirectToAuthorsGirls() {
    this.router.navigate(['/authors-girls']);
  }

  
}
