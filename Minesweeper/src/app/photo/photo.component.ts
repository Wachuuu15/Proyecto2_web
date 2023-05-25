import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  title = 'minesweeper';

  constructor(private router: Router) {}

  redirectToPhoto() {
    this.router.navigate(['/photo']);
  }

  redirecToBoard(){
    this.router.navigate(['/board']);
  }
}
