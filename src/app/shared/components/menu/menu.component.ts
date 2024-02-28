import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  menuOpen:  boolean = false;

  constructor() {

  }

  menuToggle(): void {
    this.menuOpen = !this.menuOpen;
  }

}
