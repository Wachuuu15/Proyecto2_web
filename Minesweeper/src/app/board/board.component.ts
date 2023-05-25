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
  flagPhoto= "./../assets/numeroBandera.png";
  difficulty= false; //Dificultad: alta
  difficultyPhoto= "./../assets/estrella.png";

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

    if(this.flagPhoto === "./../assets/banderaNumero.png"){
      this.flagPhoto= "./../assets/numeroBandera.png";
    }
    else{
      this.flagPhoto= "./../assets/banderaNumero.png";
    }
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

  gameDifficulty(){
    this.difficulty = !this.difficulty

    if(this.difficulty) //Si dificultad baja (true)
    {
      this.board = new Board(10, 10);
      this.difficultyPhoto= "./../assets/flecha.png";
    }
    else //dificultad alta (false)
    {
      this.board= new Board(20, 50);
      this.difficultyPhoto= "./../assets/estrella.png";
    }
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
