import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authors-girls',
  templateUrl: './authors-girls.component.html',
  styleUrls: ['./authors-girls.component.css']
})
export class AuthorsGirlsComponent {
  title = 'minesweeper';

  constructor(private router: Router) {}

  redirectToAuthorsGirls() {
    this.router.navigate(['/authors-girls']);
  }

  redirecToBoard(){
    this.router.navigate(['/board']);
  }
}
